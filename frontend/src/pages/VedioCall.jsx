
import { useEffect, useState, useRef } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, onSnapshot } from 'firebase/firestore';
import { AppHeader } from "../cmps/AppHeader";

export function VedioCall() {
    const webcamVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const callInputRef = useRef(null);

    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    const [pc, setPc] = useState(null);
    const [callId, setCallId] = useState(null);
    const [isCalling, setIsCalling] = useState(false);
    const [isAnswering, setIsAnswering] = useState(false);

    useEffect(() => {
        const firebaseConfig = {
            apiKey: 'AIzaSyBwFLT5aCDRvi9RAzrUkjqG1skOi65Bz0k',
            authDomain: "trello-39738.firebaseapp.com",
            projectId: "trello-39738",
            storageBucket: "trello-39738.firebasestorage.app",
            messagingSenderId: "224985870834",
            appId: "1:224985870834:web:f021dd2dbe54cdcdeabb6b",
            measurementId: "G-56J468LM5P"
        };
        const app = initializeApp(firebaseConfig);
        const firestore = getFirestore(app);

        const servers = {
            iceServers: [
                { urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'] }
            ],
            iceCandidatePoolSize: 10,
        };

        const peerConnection = new RTCPeerConnection(servers);
        setPc(peerConnection);

        const handleTrackEvent = (event) => {
            if (!remoteStream) {
                const newRemoteStream = new MediaStream();
                setRemoteStream(newRemoteStream);
                remoteVideoRef.current.srcObject = newRemoteStream;
                event.streams[0].getTracks().forEach((track) => {
                    newRemoteStream.addTrack(track);
                });
            }else{
                event.streams[0].getTracks().forEach((track) => {
                    remoteStream.addTrack(track);
                });
            }
        };

        peerConnection.ontrack = handleTrackEvent;

        return () => {
            peerConnection.close();
            localStream?.getTracks().forEach(track => track.stop());
            setLocalStream(null);
            setRemoteStream(null);
        };
    }, []);

    const startWebcam = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setLocalStream(stream);
            webcamVideoRef.current.srcObject = stream;
            stream.getTracks().forEach((track) => pc.addTrack(track, stream));
            setIsCalling(true);
            setIsAnswering(true);
        } catch (error) {
            console.error("Error accessing webcam:", error);
        }
    };

    const createCall = async () => {
        try {
            const callDocRef = doc(collection(getFirestore(), 'calls'));
            const offerCandidates = collection(callDocRef, 'offerCandidates');
            const answerCandidates = collection(callDocRef, 'answerCandidates');

            setCallId(callDocRef.id);
            callInputRef.current.value = callDocRef.id;

            pc.onicecandidate = (event) => {
                if (event.candidate) {
                    addDoc(offerCandidates, event.candidate.toJSON());
                }
            };

            const offerDescription = await pc.createOffer();
            await pc.setLocalDescription(offerDescription);
            await setDoc(callDocRef, { offer: offerDescription });

            onSnapshot(callDocRef, (snapshot) => {
                const data = snapshot.data();
                if (!pc.currentRemoteDescription && data?.answer) {
                    pc.setRemoteDescription(new RTCSessionDescription(data.answer));
                }
            });

            onSnapshot(answerCandidates, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === 'added') {
                        pc.addIceCandidate(new RTCIceCandidate(change.doc.data()));
                    }
                });
            });
        } catch (error) {
            console.error("Error creating call:", error);
        }
    };

    const answerCall = async () => {
        try {
            const callId = callInputRef.current.value;
            const callDocRef = doc(getFirestore(), 'calls', callId);
            const answerCandidates = collection(callDocRef, 'answerCandidates');
            const offerCandidates = collection(callDocRef, 'offerCandidates');

            pc.onicecandidate = (event) => {
                if (event.candidate) {
                    addDoc(answerCandidates, event.candidate.toJSON());
                }
            };

            const callData = (await getDoc(callDocRef)).data();
            await pc.setRemoteDescription(new RTCSessionDescription(callData.offer));

            const answerDescription = await pc.createAnswer();
            await pc.setLocalDescription(answerDescription);
            await setDoc(callDocRef, { answer: answerDescription }, { merge: true });

            onSnapshot(offerCandidates, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === 'added') {
                        pc.addIceCandidate(new RTCIceCandidate(change.doc.data()));
                    }
                });
            });
        } catch (error) {
            console.error("Error answering call:", error);
        }
    };

    const hangUp = () => {
        pc.close();
        localStream?.getTracks().forEach(track => track.stop());
        setLocalStream(null);
        setRemoteStream(null);
    };

    return (
        <div className="vediogrid">
            <AppHeader />
            <div className="content">
                <div className="videos">
                    <span>
                        <video ref={webcamVideoRef} autoPlay playsInline />
                    </span>
                    <span>
                        <video ref={remoteVideoRef} autoPlay playsInline />
                    </span>
                </div>
                <div className="buttons">
                    <div className="start">
                        <button onClick={startWebcam}>Start webcam</button>
                        <button className="callButton" onClick={createCall} disabled={!isCalling}>Create Call</button>
                    </div>
                    <div className="call">
                        <input placeholder="Enter call link " ref={callInputRef} />
                        <button className="answer" onClick={answerCall} disabled={!isAnswering}>Join</button>
                    </div>
                    <button className="hangup" onClick={hangUp}>Hangup</button>
                </div>
            </div>
        </div>
    );
}