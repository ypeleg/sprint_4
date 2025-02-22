import { useEffect, useState } from "react"
import { httpService, SOCKET_JOIN_VEDIO, socketService } from "../services/util.service"
import { useNavigate } from "react-router"

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, onSnapshot } from 'firebase/firestore';
import { AppHeader } from "../cmps/AppHeader";


export function VedioCall() {
    useEffect(() => {
        // Import necessary functions from Firebase SDK

        // Firebase configuration object
        const firebaseConfig = {
            apiKey: "AIzaSyBwFLT5aCDRvi9RAzrUkjqG1skOi65Bz0k",
            authDomain: "trello-39738.firebaseapp.com",
            projectId: "trello-39738",
            storageBucket: "trello-39738.firebasestorage.app",
            messagingSenderId: "224985870834",
            appId: "1:224985870834:web:f021dd2dbe54cdcdeabb6b",
            measurementId: "G-56J468LM5P"
        };
        const app = initializeApp(firebaseConfig);

        // ✅ Initialize Firestore
        const firestore = getFirestore(app);

        // Initialize Firebase


        // Define ICE servers
        const servers = {
            iceServers: [
                { urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'] }
            ],
            iceCandidatePoolSize: 10,
        };

        // Create RTC connection
        const pc = new RTCPeerConnection(servers);
        let localStream = null;
        let remoteStream = null;

        // DOM elements
        const webcamButton = document.getElementById('webcamButton');
        const webcamVideo = document.getElementById('webcamVideo');
        const callButton = document.getElementById('callButton');
        const callInput = document.getElementById('callInput');
        const answerButton = document.getElementById('answerButton');
        const remoteVideo = document.getElementById('remoteVideo');
        const hangupButton = document.getElementById('hangupButton');



        hangupButton.onclick = () => {
            pc.close();

            // Remove event listeners
            pc.onicecandidate = null;
            pc.ontrack = null;
            pc.onconnectionstatechange = null;

            // Stop all local media tracks
            localStream?.getTracks().forEach(track => track.stop());
            // Reset video elements
            if (webcamVideo) webcamVideo.srcObject = null;
            const remoteVideo = document.getElementById('remoteVideo');
            if (remoteVideo) remoteVideo.srcObject = null;
        }
        // 1. Setup media sources
        webcamButton.onclick = async () => {
            localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            remoteStream = new MediaStream();

            // Push tracks from local stream to peer connection
            localStream.getTracks().forEach((track) => {
                pc.addTrack(track, localStream);
            });

            // Pull tracks from remote stream, add to video stream
            pc.ontrack = (event) => {
                event.streams[0].getTracks().forEach((track) => {
                    remoteStream.addTrack(track);
                });
            };

            webcamVideo.srcObject = localStream;
            remoteVideo.srcObject = remoteStream;

            callButton.disabled = false;
            answerButton.disabled = false;
            webcamButton.disabled = true;
        };

        // 2. Create an offer
        callButton.onclick = async () => {
            const callDocRef = doc(collection(firestore, 'calls')); // Get document reference for new call
            const offerCandidates = collection(callDocRef, 'offerCandidates');
            const answerCandidates = collection(callDocRef, 'answerCandidates');

            callInput.value = callDocRef.id;

            pc.onicecandidate = (event) => {
                if (event.candidate) {
                    addDoc(offerCandidates, event.candidate.toJSON());
                }
            };

            // Create offer
            const offerDescription = await pc.createOffer();
            await pc.setLocalDescription(offerDescription);

            const offer = {
                sdp: offerDescription.sdp,
                type: offerDescription.type,
            };

            await setDoc(callDocRef, { offer });

            // Listen for remote answer
            onSnapshot(callDocRef, (snapshot) => {
                const data = snapshot.data();
                if (!pc.currentRemoteDescription && data?.answer) {
                    const answerDescription = new RTCSessionDescription(data.answer);
                    pc.setRemoteDescription(answerDescription);
                }
            });

            // When answered, add candidate to peer connection
            onSnapshot(answerCandidates, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === 'added') {
                        const candidate = new RTCIceCandidate(change.doc.data());
                        pc.addIceCandidate(candidate);
                    }
                });
            });

            hangupButton.disabled = false;
        };

        // 3. Answer the call
        answerButton.onclick = async () => {
            const callId = callInput.value;
            const callDocRef = doc(firestore, 'calls', callId);
            const answerCandidates = collection(callDocRef, 'answerCandidates');
            const offerCandidates = collection(callDocRef, 'offerCandidates');

            pc.onicecandidate = (event) => {
                if (event.candidate) {
                    addDoc(answerCandidates, event.candidate.toJSON());
                }
            };

            const callData = (await getDoc(callDocRef)).data();

            const offerDescription = callData.offer;
            await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

            const answerDescription = await pc.createAnswer();
            await pc.setLocalDescription(answerDescription);

            const answer = {
                type: answerDescription.type,
                sdp: answerDescription.sdp,
            };

            await setDoc(callDocRef, { answer }, { merge: true });

            onSnapshot(offerCandidates, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === 'added') {
                        const data = change.doc.data();
                        pc.addIceCandidate(new RTCIceCandidate(data));
                    }
                });
            });
        };


    }, [])

    return (

        <div className="vediogrid">
            <AppHeader />
            <div className="content">
        
                <div className="videos">
                    <span>

                        <video id="webcamVideo" autoPlay playsInline></video>
                    </span>
                    <span>

                        <video id="remoteVideo" autoPlay playsInline></video>
                    </span>


                </div>
                <div className="buttons">
                    <div className=" start">

                    <button id="webcamButton">Start webcam</button>
                    <button className="callButton" id="callButton" disabled>Create Call</button>
                    </div>

                    <div className="call">

                        <input placeholder="Enter call link " id="callInput" />

                        <button className="answer" id="answerButton" disabled>Join</button>

                    </div>
                    <button className="hangup" id="hangupButton" disabled>Hangup</button>
                </div>
            </div>
        </div>

    )
}