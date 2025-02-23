

import { useEffect, useState, useRef } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, onSnapshot } from "firebase/firestore";
import { AppHeader } from "../cmps/AppHeader";
import { userService } from "../services/user.service";
import { useSelector } from "react-redux";
import { OUTGOING_VIDEO_CALL, socketService } from "../services/util.service";
import { useParams } from "react-router-dom";


export function VideoCall() {
    // Refs for DOM elements
    const webcamVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const callInputRef = useRef(null);

    // Route parameters
    const { callId: routeCallId } = useParams();

    // Redux state for logged-in user
    const loggedUser = useSelector((state) => state.userModule.user);

    // State management
    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    const [peerConnection, setPeerConnection] = useState(null);
    const [callId, setCallId] = useState("");
    const [isWebcamActive, setIsWebcamActive] = useState(false);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [isAudioOn, setIsAudioOn] = useState(true);
    const [showControls, setShowControls] = useState(true);
    const [controlsTimeout, setControlsTimeout] = useState(null);
    const [userFilter, setUserFilter] = useState("");
    const [showUserPicker, setShowUserPicker] = useState(true);
    const [users, setUsers] = useState([]);
    const [pickedUser, setPickedUser] = useState(null);
    const [callTimer, setCallTimer] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);
    const [isLoadingCamera, setIsLoadingCamera] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);

    // Initialize Firebase and WebRTC
    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyBwFLT5aCDRvi9RAzrUkjqG1skOi65Bz0k",
            authDomain: "trello-39738.firebaseapp.com",
            projectId: "trello-39738",
            storageBucket: "trello-39738.firebasestorage.app",
            messagingSenderId: "224985870834",
            appId: "1:224985870834:web:f021dd2dbe54cdcdeabb6b",
            measurementId: "G-56J468LM5P",
        };
        initializeApp(firebaseConfig);

        const servers = {
            iceServers: [{ urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"] }],
            iceCandidatePoolSize: 10,
        };

        const pc = new RTCPeerConnection(servers);
        setPeerConnection(pc);

        pc.ontrack = (event) => {
            const stream = remoteStream || new MediaStream();
            event.streams[0].getTracks().forEach((track) => stream.addTrack(track));
            setRemoteStream(stream);
            remoteVideoRef.current.srcObject = stream;
        };

        pc.oniceconnectionstatechange = () => {
            if (pc.iceConnectionState === "connected") {
                setIsConnecting(false);
                const interval = setInterval(() => setCallTimer((prev) => prev + 1), 1000);
                setTimerInterval(interval);
            } else if (pc.iceConnectionState === "disconnected" || pc.iceConnectionState === "failed") {
                setIsConnecting(false);
                if (timerInterval) clearInterval(timerInterval);
                setTimerInterval(null);
                setCallTimer(0);
            }
        };

        // Auto-join call if callId is in the route
        if (routeCallId && !localStream) {
            startWebcam().then(() => {
                setCallId(routeCallId);
                answerCall(routeCallId);
                setIsConnecting(true);
            });
        }

        return () => {
            pc.close();
            localStream?.getTracks().forEach((track) => track.stop());
            if (timerInterval) clearInterval(timerInterval);
            setLocalStream(null);
            setRemoteStream(null);
            setPeerConnection(null);
            setTimerInterval(null);
            setCallTimer(0);
        };
    }, []); // Empty dependency array to run only on mount/unmount

    // Start webcam
    const startWebcam = async () => {
        setIsLoadingCamera(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setLocalStream(stream);
            webcamVideoRef.current.srcObject = stream;
            stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));
            setIsWebcamActive(true);
            setIsVideoOn(true);
            setIsAudioOn(true);
            setIsLoadingCamera(false);
        } catch (error) {
            console.error("Error starting webcam:", error);
            alert("Couldn’t access your webcam. Check permissions and try again." + error);
            setIsLoadingCamera(false);
        }
    };

    // Toggle video
    const toggleVideo = () => {
        if (localStream) {
            const videoTrack = localStream.getVideoTracks()[0];
            if (videoTrack) {
                videoTrack.enabled = !videoTrack.enabled;
                setIsVideoOn(videoTrack.enabled);
            }
        }
    };

    // Toggle audio
    const toggleAudio = () => {
        if (localStream) {
            const audioTrack = localStream.getAudioTracks()[0];
            if (audioTrack) {
                audioTrack.enabled = !audioTrack.enabled;
                setIsAudioOn(audioTrack.enabled);
            }
        }
    };

    // Initiate a call
    const initiateCall = async (user) => {
        if (!user) {
            alert("Please select a user to call.");
            return;
        }
        if (!localStream) await startWebcam();
        setPickedUser(user);
        setShowUserPicker(false);
        setIsConnecting(true);
        try {
            const firestore = getFirestore();
            const callDocRef = doc(collection(firestore, "calls"));
            const offerCandidates = collection(callDocRef, "offerCandidates");
            const answerCandidates = collection(callDocRef, "answerCandidates");

            setCallId(callDocRef.id);

            peerConnection.onicecandidate = (event) => {
                if (event.candidate) addDoc(offerCandidates, event.candidate.toJSON());
            };

            const offerDescription = await peerConnection.createOffer();
            await peerConnection.setLocalDescription(offerDescription);
            await setDoc(callDocRef, { offer: offerDescription });

            socketService.emit(OUTGOING_VIDEO_CALL, {
                callId: callDocRef.id,
                callerName: loggedUser.fullname,
                callReceiver: user._id,
                callerImg: loggedUser.imgUrl,
            });

            onSnapshot(callDocRef, (snapshot) => {
                const data = snapshot.data();
                if (!peerConnection.currentRemoteDescription && data?.answer) {
                    peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
                }
            });

            onSnapshot(answerCandidates, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        peerConnection.addIceCandidate(new RTCIceCandidate(change.doc.data()));
                    }
                });
            });
        } catch (error) {
            console.error("Error initiating call:", error);
            alert("Failed to start the call. Try again.");
            setIsConnecting(false);
        }
    };

    // Answer/join a call
    const answerCall = async (callIdToJoin) => {
        if (!callIdToJoin) {
            alert("Please enter a valid call ID.");
            return;
        }
        if (!localStream) await startWebcam();
        setIsConnecting(true);
        try {
            const firestore = getFirestore();
            const callDocRef = doc(firestore, "calls", callIdToJoin);
            const answerCandidates = collection(callDocRef, "answerCandidates");
            const offerCandidates = collection(callDocRef, "offerCandidates");

            peerConnection.onicecandidate = (event) => {
                if (event.candidate) addDoc(answerCandidates, event.candidate.toJSON());
            };

            const callData = (await getDoc(callDocRef)).data();
            if (!callData?.offer) {
                alert("Call ID not found or invalid.");
                setIsConnecting(false);
                return;
            }

            await peerConnection.setRemoteDescription(new RTCSessionDescription(callData.offer));
            const answerDescription = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answerDescription);
            await setDoc(callDocRef, { answer: answerDescription }, { merge: true });

            onSnapshot(offerCandidates, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        peerConnection.addIceCandidate(new RTCIceCandidate(change.doc.data()));
                    }
                });
            });
        } catch (error) {
            console.error("Error joining call:", error);
            alert("Failed to join the call. Check the ID and try again.");
            setIsConnecting(false);
        }
    };

    // Hang up
    const hangUp = () => {
        peerConnection?.close();
        localStream?.getTracks().forEach((track) => track.stop());
        if (timerInterval) clearInterval(timerInterval);
        setLocalStream(null);
        setRemoteStream(null);
        setIsWebcamActive(false);
        setCallId("");
        setPickedUser(null);
        setUserFilter("");
        setShowUserPicker(true); // Show picker again after hang up
        setTimerInterval(null);
        setCallTimer(0);
        setIsConnecting(false);

        const newPc = new RTCPeerConnection({
            iceServers: [{ urls: ["stun:stun1.l.google.com:19302"] }],
        });
        setPeerConnection(newPc);
        newPc.ontrack = (event) => {
            const stream = remoteStream || new MediaStream();
            event.streams[0].getTracks().forEach((track) => stream.addTrack(track));
            setRemoteStream(stream);
            remoteVideoRef.current.srcObject = stream;
        };
        newPc.oniceconnectionstatechange = () => {
            if (newPc.iceConnectionState === "connected") {
                setIsConnecting(false);
                const interval = setInterval(() => setCallTimer((prev) => prev + 1), 1000);
                setTimerInterval(interval);
            } else if (newPc.iceConnectionState === "disconnected" || newPc.iceConnectionState === "failed") {
                setIsConnecting(false);
                if (timerInterval) clearInterval(timerInterval);
                setTimerInterval(null);
                setCallTimer(0);
            }
        };
    };

    // Filter users
    const onUserFilter = async (e) => {
        const value = e.target.value;
        setUserFilter(value);
        if (!value) {
            setShowUserPicker(false);
            setUsers([]);
        } else {
            try {
                const filteredUsers = await userService.getUsers(value);
                setUsers(filteredUsers.filter((u) => u._id !== loggedUser?._id));
                setShowUserPicker(true);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
    };

    // Format timer
    const formatTimer = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`;
    };

    // Show/hide controls
    const handleMouseMove = () => {
        setShowControls(true);
        if (controlsTimeout) clearTimeout(controlsTimeout);
        const timeout = setTimeout(() => setShowControls(false), 3000);
        setControlsTimeout(timeout);
    };

    return (
        <div className="video-call-container" onMouseMove={handleMouseMove}>
            <AppHeader useDarkTextColors={false} />

            {/* Video Grid */}
            <div className="video-grid">
                <div className="remote-video-container">
                    {isConnecting ? (
                        <div className="connecting">Connecting to call...</div>
                    ) : remoteStream ? (
                        <video ref={remoteVideoRef} autoPlay playsInline className="remote-video" />
                    ) : (
                        <div className="no-video">Waiting for remote video</div>
                    )}
                </div>
                <div className="local-video-wrapper">
                    {isLoadingCamera ? (
                        <div className="loading">Starting camera...</div>
                    ) : localStream ? (
                        <video ref={webcamVideoRef} autoPlay playsInline muted className="local-video" />
                    ) : (
                        <div className="no-video">No local video</div>
                    )}
                    {localStream && (
                        <div className="video-overlay">
                            <span className="recording-indicator">
                                <span className="dot"></span>
                                Live
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Control Bar */}
            <div className={`control-bar ${showControls ? "visible" : ""}`}>
                <div className="control-section left">
                    <div className="timer">{formatTimer(callTimer)}</div>
                </div>
                <div className="control-section center">
                    <button
                        className={`control-btn ${isAudioOn ? "active" : ""}`}
                        onClick={toggleAudio}
                        title={isAudioOn ? "Mute" : "Unmute"}
                        disabled={!localStream}
                    >
                        <svg viewBox="0 0 24 24" className="control-icon">
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                        </svg>
                    </button>
                    <button
                        className={`control-btn ${isVideoOn ? "active" : ""}`}
                        onClick={toggleVideo}
                        title={isVideoOn ? "Turn Off Video" : "Turn On Video"}
                        disabled={!localStream}
                    >
                        <svg viewBox="0 0 24 24" className="control-icon">
                            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                        </svg>
                    </button>
                    <button
                        className="control-btn"
                        onClick={() => setShowUserPicker(!showUserPicker)}
                        title="Search Users"
                    >
                        <svg viewBox="0 0 24 24" className="control-icon">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                    </button>
                    <button
                        className="control-btn danger"
                        onClick={hangUp}
                        title="End Call"
                        disabled={!localStream}
                    >
                        <svg viewBox="0 0 24 24" className="control-icon">
                            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                        </svg>
                    </button>
                </div>
                <div className="control-section right">
                    <button className="control-btn" title="More Options">
                        <svg viewBox="0 0 24 24" className="control-icon">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* User Search Overlay */}
            {showUserPicker && (
                <div className="user-search-overlay">
                    <div className="search-container no-mag-glass">
                        <input
                            type="text"
                            placeholder="Search users to call..."
                            value={userFilter}
                            onChange={onUserFilter}
                            className="search-input"
                            autoFocus
                        />
                    </div>
                    {users.length > 0 && (
                        <div className="user-list">
                            {users.map((user) => (
                                <div key={user._id} className="user-item">
                                    <img src={user.imgUrl || "roi.png"} alt={user.fullname} />
                                    <span>{user.fullname}</span>
                                    <button onClick={() => initiateCall(user)}>Call</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Manual Join (Optional, for testing) */}
            {!routeCallId && !pickedUser && (
                <div className="join-call">
                    <input ref={callInputRef} placeholder="Enter call ID to join" />
                    <button onClick={() => answerCall(callInputRef.current.value)}>Join Call</button>
                </div>
            )}
        </div>
    );
}


export function VideoCallaa() {
    // Refs for DOM elements
    const webcamVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const callInputRef = useRef(null);

    // Redux state for logged-in user
    const loggedUser = useSelector((state) => state.userModule.user);

    // State management
    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    const [peerConnection, setPeerConnection] = useState(null);
    const [callId, setCallId] = useState("");
    const [isWebcamActive, setIsWebcamActive] = useState(false);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [isAudioOn, setIsAudioOn] = useState(true);
    const [showControls, setShowControls] = useState(true);
    const [controlsTimeout, setControlsTimeout] = useState(null);
    const [userFilter, setUserFilter] = useState("");
    const [showUserPicker, setShowUserPicker] = useState(true);
    const [users, setUsers] = useState([]);
    const [pickedUser, setPickedUser] = useState(null);
    const [callTimer, setCallTimer] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);

    // Initialize Firebase and WebRTC
    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyBwFLT5aCDRvi9RAzrUkjqG1skOi65Bz0k",
            authDomain: "trello-39738.firebaseapp.com",
            projectId: "trello-39738",
            storageBucket: "trello-39738.firebasestorage.app",
            messagingSenderId: "224985870834",
            appId: "1:224985870834:web:f021dd2dbe54cdcdeabb6b",
            measurementId: "G-56J468LM5P",
        };
        const app = initializeApp(firebaseConfig);
        const firestore = getFirestore(app);

        const servers = {
            iceServers: [{ urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"] }],
            iceCandidatePoolSize: 10,
        };

        const pc = new RTCPeerConnection(servers);
        setPeerConnection(pc);

        // Handle incoming remote stream
        pc.ontrack = (event) => {
            const stream = remoteStream || new MediaStream();
            event.streams[0].getTracks().forEach((track) => stream.addTrack(track));
            setRemoteStream(stream);
            remoteVideoRef.current.srcObject = stream;
        };

        // Manage call timer based on connection state
        pc.oniceconnectionstatechange = () => {
            if (pc.iceConnectionState === "connected") {
                const interval = setInterval(() => setCallTimer((prev) => prev + 1), 1000);
                setTimerInterval(interval);
            } else if (pc.iceConnectionState === "disconnected" || pc.iceConnectionState === "failed") {
                if (timerInterval) clearInterval(timerInterval);
                setTimerInterval(null);
                setCallTimer(0);
            }
        };

        // Cleanup on unmount
        return () => {
            pc.close();
            localStream?.getTracks().forEach((track) => track.stop());
            if (timerInterval) clearInterval(timerInterval);
            setLocalStream(null);
            setRemoteStream(null);
            setPeerConnection(null);
            setTimerInterval(null);
            setCallTimer(0);
        };
    }, [localStream, remoteStream]); // Dependencies ensure cleanup works correctly

    // Start webcam and attach to peer connection
    const startWebcam = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setLocalStream(stream);
            webcamVideoRef.current.srcObject = stream;
            stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));
            setIsWebcamActive(true);
            setIsVideoOn(true);
            setIsAudioOn(true);
        } catch (error) {
            console.error("Error starting webcam:", error);
            alert("Couldn’t access your webcam. Check permissions and try again.");
        }
    };

    // Toggle video track
    const toggleVideo = () => {
        if (localStream) {
            const videoTrack = localStream.getVideoTracks()[0];
            if (videoTrack) {
                videoTrack.enabled = !videoTrack.enabled;
                setIsVideoOn(videoTrack.enabled);
            }
        }
    };

    // Toggle audio track
    const toggleAudio = () => {
        if (localStream) {
            const audioTrack = localStream.getAudioTracks()[0];
            if (audioTrack) {
                audioTrack.enabled = !audioTrack.enabled;
                setIsAudioOn(audioTrack.enabled);
            }
        }
    };

    // Initiate a call to a selected user
    const initiateCall = async (user) => {
        if (!user) {
            alert("Please select a user to call.");
            return;
        }
        if (!localStream) await startWebcam();
        setPickedUser(user);
        setShowUserPicker(false);
        try {
            const firestore = getFirestore();
            const callDocRef = doc(collection(firestore, "calls"));
            const offerCandidates = collection(callDocRef, "offerCandidates");
            const answerCandidates = collection(callDocRef, "answerCandidates");

            setCallId(callDocRef.id);

            peerConnection.onicecandidate = (event) => {
                if (event.candidate) addDoc(offerCandidates, event.candidate.toJSON());
            };

            const offerDescription = await peerConnection.createOffer();
            await peerConnection.setLocalDescription(offerDescription);
            await setDoc(callDocRef, { offer: offerDescription });

            socketService.emit(OUTGOING_VIDEO_CALL, {
                callId: callDocRef.id,
                callerName: loggedUser.fullname,
                callReceiver: user._id,
                callerImg: loggedUser.imgUrl,
            });

            onSnapshot(callDocRef, (snapshot) => {
                const data = snapshot.data();
                if (!peerConnection.currentRemoteDescription && data?.answer) {
                    peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
                }
            });

            onSnapshot(answerCandidates, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        peerConnection.addIceCandidate(new RTCIceCandidate(change.doc.data()));
                    }
                });
            });
        } catch (error) {
            console.error("Error initiating call:", error);
            alert("Failed to start the call. Try again.");
        }
    };

    // Answer/join an existing call
    const answerCall = async () => {
        const callIdInput = callInputRef.current.value.trim();
        if (!callIdInput) {
            alert("Please enter a valid call ID.");
            return;
        }
        if (!localStream) await startWebcam();
        try {
            const firestore = getFirestore();
            const callDocRef = doc(firestore, "calls", callIdInput);
            const answerCandidates = collection(callDocRef, "answerCandidates");
            const offerCandidates = collection(callDocRef, "offerCandidates");

            peerConnection.onicecandidate = (event) => {
                if (event.candidate) addDoc(answerCandidates, event.candidate.toJSON());
            };

            const callData = (await getDoc(callDocRef)).data();
            if (!callData?.offer) {
                alert("Call ID not found or invalid.");
                return;
            }

            await peerConnection.setRemoteDescription(new RTCSessionDescription(callData.offer));
            const answerDescription = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answerDescription);
            await setDoc(callDocRef, { answer: answerDescription }, { merge: true });

            onSnapshot(offerCandidates, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        peerConnection.addIceCandidate(new RTCIceCandidate(change.doc.data()));
                    }
                });
            });
        } catch (error) {
            console.error("Error joining call:", error);
            alert("Failed to join the call. Check the ID and try again.");
        }
    };

    // Hang up and reset everything
    const hangUp = () => {
        peerConnection?.close();
        localStream?.getTracks().forEach((track) => track.stop());
        if (timerInterval) clearInterval(timerInterval);
        setLocalStream(null);
        setRemoteStream(null);
        setIsWebcamActive(false);
        setCallId("");
        setPickedUser(null);
        setUserFilter("");
        setShowUserPicker(false);
        setTimerInterval(null);
        setCallTimer(0);

        // Recreate peer connection for next call
        const newPc = new RTCPeerConnection({
            iceServers: [{ urls: ["stun:stun1.l.google.com:19302"] }],
        });
        setPeerConnection(newPc);
        newPc.ontrack = (event) => {
            const stream = remoteStream || new MediaStream();
            event.streams[0].getTracks().forEach((track) => stream.addTrack(track));
            setRemoteStream(stream);
            remoteVideoRef.current.srcObject = stream;
        };
        newPc.oniceconnectionstatechange = () => {
            if (newPc.iceConnectionState === "connected") {
                const interval = setInterval(() => setCallTimer((prev) => prev + 1), 1000);
                setTimerInterval(interval);
            } else if (newPc.iceConnectionState === "disconnected" || newPc.iceConnectionState === "failed") {
                if (timerInterval) clearInterval(timerInterval);
                setTimerInterval(null);
                setCallTimer(0);
            }
        };
    };

    // Filter users for the picker
    const onUserFilter = async (e) => {
        const value = e.target.value;
        setUserFilter(value);
        if (!value) {
            setShowUserPicker(false);
            setUsers([]);
        } else {
            try {
                const filteredUsers = await userService.getUsers(value);
                setUsers(filteredUsers.filter((u) => u._id !== loggedUser?._id)); // Exclude self
                setShowUserPicker(true);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
    };

    // Format call timer (HH:MM:SS)
    const formatTimer = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`;
    };

    // Show/hide control bar on mouse move
    const handleMouseMove = () => {
        setShowControls(true);
        if (controlsTimeout) clearTimeout(controlsTimeout);
        const timeout = setTimeout(() => setShowControls(false), 3000);
        setControlsTimeout(timeout);
    };

    return (
        <div className="video-call-container" onMouseMove={handleMouseMove}>
            <AppHeader useDarkTextColors={false} />

            {/* Video Grid */}
            <div className="video-grid">
                <div className="remote-video-container">
                    <video ref={remoteVideoRef} autoPlay playsInline className="remote-video" />
                </div>
                <div className="local-video-wrapper">
                    <video ref={webcamVideoRef} autoPlay playsInline muted className="local-video" />
                    <div className="video-overlay">
            <span className="recording-indicator">
              <span className="dot"></span>
              Live
            </span>
                    </div>
                </div>
            </div>

            {/* Control Bar */}
            <div className={`control-bar ${showControls ? "visible" : ""}`}>
                <div className="control-section left">
                    <div className="timer">{formatTimer(callTimer)}</div>
                </div>
                <div className="control-section center">
                    <button
                        className={`control-btn ${isAudioOn ? "active" : ""}`}
                        onClick={toggleAudio}
                        title={isAudioOn ? "Mute" : "Unmute"}
                    >
                        <svg viewBox="0 0 24 24" className="control-icon">
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                        </svg>
                    </button>
                    <button
                        className={`control-btn ${isVideoOn ? "active" : ""}`}
                        onClick={toggleVideo}
                        title={isVideoOn ? "Turn Off Video" : "Turn On Video"}
                    >
                        <svg viewBox="0 0 24 24" className="control-icon">
                            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                        </svg>
                    </button>
                    <button
                        className="control-btn"
                        onClick={() => setShowUserPicker(!showUserPicker)}
                        title="Search Users"
                    >
                        <svg viewBox="0 0 24 24" className="control-icon">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                    </button>
                    <button className="control-btn danger" onClick={hangUp} title="End Call">
                        <svg viewBox="0 0 24 24" className="control-icon">
                            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                        </svg>
                    </button>
                </div>
                <div className="control-section right">
                    <button className="control-btn" title="More Options">
                        <svg viewBox="0 0 24 24" className="control-icon">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* User Search Overlay */}
            {showUserPicker && (
                <div className="user-search-overlay">
                    <div className="search-container no-mag-glass">
                        <input
                            type="text"
                            placeholder="Search users to call..."
                            value={userFilter}
                            onChange={onUserFilter}
                            className="search-input"
                            autoFocus
                        />
                    </div>
                    {users.length > 0 && (
                        <div className="user-list">
                            {users.map((user) => (
                                <div key={user._id} className="user-item">
                                    <img src={user.imgUrl || "roi.png"} alt={user.fullname} />
                                    <span>{user.fullname}</span>
                                    <button onClick={() => initiateCall(user)}>Call</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}







export function VideoCallaaa() {
    const webcamVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const callInputRef = useRef(null);
    const logedUser = useSelector(state => state.userModule.user)
    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    const [pc, setPc] = useState(null);
    const [callId, setCallId] = useState(null);
    const [isCalling, setIsCalling] = useState(false);
    const [isAnswering, setIsAnswering] = useState(false);
    const [userFilter, setUserFilter] = useState('')
    const [showUserPicker, setShowUserPicker] = useState(null)
    const [users, SetUsers] = useState([])
    const [pickedUser, setPickedUser] = useState(null)
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
        // function handleClick(ev){

        //  if (ev.target !== ev.currentTarget&&showUserPicker) setShowUserPicker()

        // }
        peerConnection.ontrack = handleTrackEvent;
        // window.addEventListener('mousedown',handleClick)
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

    function createCalal () {

        console.log('calling to',pickedUser._id)
        socketService.emit(OUTGOING_VIDEO_CALL,
            {
                callerName: logedUser.fullname,
                callReceiver: pickedUser._id,
                callerImg: logedUser.imgUrl
            }
        )
    }

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

            console.log('calling to',pickedUser._id)
            socketService.emit(OUTGOING_VIDEO_CALL,

                    {
                            callId: callDocRef.id,
                            callerName: logedUser.fullname,
                            callReceiver: pickedUser._id,
                            callerImg: logedUser.imgUrl,
                    }
            )
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
            console.log("Error creating call:", error);
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
    async function onUserFilter({ target }) {
            setUserFilter(target.value)
            if (!target.value) {
                setShowUserPicker(false)

            } else {
                const newUsers = await userService.getUsers(userFilter)
                SetUsers(newUsers)
                setShowUserPicker(true)
            }
        }
        function onSetPickuser(user){
            setPickedUser(user)
            setUserFilter(user.fullname)
        }

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

                    </div>
                    <div>
                    <input value={userFilter} onChange={onUserFilter} type="text" />
                    <button className="callButton" onClick={createCall}
                        // disabled={!isCalling}
                    >Create Call</button>
                    </div>
                    <div className="call">
                        <input placeholder="Enter call link " ref={callInputRef} />
                        <button className="answer" onClick={answerCall} disabled={!isAnswering}>Join</button>
                    </div>
                    <button className="hangup" onClick={hangUp}>Hangup</button>
                </div>
                {showUserPicker && <div className="userpicker">
                <section className="userlist">
                    {users.map(user => {
                        return (
                            <div onClick={() => { onSetPickuser(user); setShowUserPicker(false) }} className="user-item">
                                <div className="user">

                                    <img src={user.imgUrl || 'roi.png'} alt="" />
                                    <span>{user.fullname}</span>
                                </div>

                            </div>

                        )
                    })}
                </section>

            </div>}
            </div>
        </div>
    );
}