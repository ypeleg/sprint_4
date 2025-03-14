

import { useSelector } from "react-redux"
import { useParams } from "react-router-dom" 
import { initializeApp } from "firebase/app" 
import { AppHeader } from "../cmps/AppHeader" 
import { useEffect, useState, useRef } from "react" 
import { userService } from "../services/user.service" 
import { DECLINE_CALL, OUTGOING_VIDEO_CALL, socketService } from "../services/util.service" 
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, onSnapshot } from "firebase/firestore" 


const firebaseConfig = {
    apiKey: "AIzaSyBwFLT5aCDRvi9RAzrUkjqG1skOi65Bz0k", authDomain: "trello-39738.firebaseapp.com", projectId: "trello-39738", storageBucket: "trello-39738.firebasestorage.app", messagingSenderId: "224985870834", appId: "1:224985870834:web:f021dd2dbe54cdcdeabb6b", measurementId: "G-56J468LM5P",
}


export function VideoCall() {

    const callInputRef = useRef(null)
    const webcamVideoRef = useRef(null)
    const remoteVideoRef = useRef(null)
    const remoteMediaStreamRef = useRef(new MediaStream())

    const { callId: routeCallId } = useParams() 

    const [users, setUsers] = useState([])
    const [callTimer, setCallTimer] = useState(0)
    const [userFilter, setUserFilter] = useState("")
    const [firestore, setFirestore] = useState(null)
    const [isAudioOn, setIsAudioOn] = useState(true)
    const [isVideoOn, setIsVideoOn] = useState(true)
    const [pickedUser, setPickedUser] = useState(null)
    const [localStream, setLocalStream] = useState(null)
    const [remoteStream, setRemoteStream] = useState(null)
    const [showControls, setShowControls] = useState(true)
    const [isConnecting, setIsConnecting] = useState(false)
    const [showDeclined, setShowDeclined] = useState(false)
    const [callId, setCallId] = useState(routeCallId || "")
    const [timerInterval, setTimerInterval] = useState(null)
    const [showUserPicker, setShowUserPicker] = useState(true)
    const [peerConnection, setPeerConnection] = useState(null)
    const [isWebcamActive, setIsWebcamActive] = useState(false)
    const [controlsTimeout, setControlsTimeout] = useState(null)
    const [isLoadingCamera, setIsLoadingCamera] = useState(false)


    const loggedUser = useSelector((state) => state.userModule.user)

    useEffect(async () => {
        console.log("[VideoCall] Initializing Firebase + PeerConnection") 
        const app = initializeApp(firebaseConfig) 
        const db = getFirestore(app) 
        setFirestore(db) 
        socketService.on(DECLINE_CALL, (payload) => {
            if (payload === loggedUser.fullname) {
                setShowDeclined(true)
            }
        })
        const servers = {
            iceServers: [{ urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"] },], iceCandidatePoolSize: 10,
        } 
        const pc = new RTCPeerConnection(servers) 
        if (routeCallId) {
            console.log("[Route] Auto-join ->", routeCallId) 
            setCallId(routeCallId) 
            (async () => {
                startWebcam(pc) 
                answerCall(routeCallId, pc, db) 
            })() 
        }

        pc.ontrack = (event) => {
            console.log("[ontrack] Remote track event ->", event.streams[0]) 
            const remoteStreamObj = remoteMediaStreamRef.current 
            event.streams[0].getTracks().forEach(async (track) => {
                console.log("[ontrack] Adding track ->", track.kind) 
                remoteStreamObj.addTrack(track) 
            }) 
            setRemoteStream(remoteStreamObj)
        } 

        pc.oniceconnectionstatechange = () => {
            console.log("[ICE State]", pc.iceConnectionState) 
            if (pc.iceConnectionState === "connected" || pc.iceConnectionState === "completed") {
                console.log("[ICE] connected -> call established") 
                setIsConnecting(false) 
                const interval = setInterval(() => setCallTimer((prev) => prev + 1), 1000) 
                setTimerInterval(0) 
            } else if (pc.iceConnectionState === "disconnected" || pc.iceConnectionState === "failed") {
                console.log("[ICE] disconnected/failed -> stop call") 
                setIsConnecting(false) 
                if (timerInterval) clearInterval(timerInterval) 
                setTimerInterval(null) 
                setCallTimer(0) 
            }
        } 

        setPeerConnection(pc) 


        return () => {
            pc.close() 
            if (timerInterval) clearInterval(timerInterval) 
        } 
    }, []) 

    useEffect(() => {
        if (localStream && webcamVideoRef.current) {
            webcamVideoRef.current.srcObject = localStream 
        }
    }, [localStream]) 

    useEffect(() => {
        if (remoteStream && remoteVideoRef.current) {

            console.log("[RemoteStream] Attaching to remote video") 
            remoteVideoRef.current.srcObject = remoteStream 
            remoteVideoRef.current
                .play()
                .catch((err) => console.error("[RemoteStream] Play error:", err)) 
        } else {
            console.log("[RemoteStream] Not attaching yet - either ref is null or no stream") 
        }
    }, [remoteStream])

    async function startWebcam(pc = peerConnection) {
        if (!pc) {
            console.warn("[startWebcam] No PeerConnection yet") 
            return 
        }
        if (localStream) {
            console.warn("[startWebcam] Already have localStream, skipping") 
            return 
        }
        setIsLoadingCamera(true) 
    
        try {
            let hasPermission = false
            try {
                if (navigator.permissions && navigator.permissions.query) {
                    const permissionStatus = await navigator.permissions.query({ name: 'camera' }) 
                    hasPermission = permissionStatus.state === 'granted' 
                    console.log("[startWebcam] Camera permission status:", permissionStatus.state) 
                }
            } catch (permErr) {
                console.warn("[startWebcam] Permission check failed:", permErr) 
            }
            
            let videoDevices = []
            let stream = null 
            
            try {
                const devices = await navigator.mediaDevices.enumerateDevices() 
                videoDevices = devices.filter(device => device.kind === 'videoinput') 
                console.log("[startWebcam] Found", videoDevices.length, "video devices") 
            } catch (enumErr) {
                console.warn("[startWebcam] Failed to enumerate devices:", enumErr) 
            }
            
            if (videoDevices.length > 0) {
                const lastSuccessfulIndex = localStorage.getItem('lastSuccessfulCameraIndex')
                let startIndex = 0 
                
                if (lastSuccessfulIndex !== null) {
                    const index = parseInt(lastSuccessfulIndex) 
                    if (index >= 0 && index < videoDevices.length) {
                        startIndex = index 
                        console.log("[startWebcam] Starting with previously successful camera index:", startIndex) 
                    }
                }
                
                const getOrderedIndices = (start, total) => {
                    const indices = [] 
                    for (let i = 0 ; i < total;  i++) {
                        indices.push((start + i) % total) 
                    }
                    return indices 
                } 
                
                const orderedIndices = getOrderedIndices(startIndex, videoDevices.length) 
                
                for (const i of orderedIndices) {
                    try {
                        console.log(`[startWebcam] Trying camera index ${i}: ${videoDevices[i].label || 'Unnamed camera'}`) 
                        
                        stream = await navigator.mediaDevices.getUserMedia({
                            video: {
                                deviceId: { exact: videoDevices[i].deviceId },
                                width: { ideal: 640 },
                                height: { ideal: 480 }
                            },
                            audio: true
                        }) 
                        
                        localStorage.setItem('lastSuccessfulCameraIndex', i.toString())
                        console.log(`[startWebcam] Successfully connected to camera ${i}`) 
                        break 
                    } catch (err) {
                        console.warn(`[startWebcam] Failed to access camera ${i}:`, err) 
                    }
                }
            }
            
            if (!stream) {
                console.log("[startWebcam] Trying default camera with generic constraints") 
                try {
                    stream = await navigator.mediaDevices.getUserMedia({ 
                        video: { 
                            width: { ideal: 640 },
                            height: { ideal: 480 }
                        }, 
                        audio: true 
                    }) 
                    console.log("[startWebcam] Successfully connected to default camera") 
                } catch (err) {
                    console.error("[startWebcam] Default camera failed:", err) 
                    
                    console.log("[startWebcam] Final attempt: video-only mode")
                    stream = await navigator.mediaDevices.getUserMedia({ 
                        video: true,
                        audio: false
                    }) 
                }
            }
            
            console.log("[startWebcam] localStream ->", stream)
            setLocalStream(stream) 
            setIsWebcamActive(true) 
            setIsVideoOn(true) 
            
            const hasAudio = stream.getAudioTracks().length > 0
            setIsAudioOn(hasAudio) 
            if (!hasAudio) {
                console.warn("[startWebcam] No audio tracks available in the stream") 
            }
    
            if (webcamVideoRef.current) {
                webcamVideoRef.current.srcObject = stream 
            }
    
            stream.getTracks().forEach(async (track) => {
                console.log("[startWebcam] Adding local track ->", track.kind) 
                await pc.addTrack(track, stream) 
            }) 
        } catch (err) {
            console.error("[startWebcam] All camera access attempts failed:", err) 
            setIsWebcamActive(false)
        }
        
        setIsLoadingCamera(false) 
    }

    function toggleVideo() {
        if (!localStream) return 
        const videoTrack = localStream.getVideoTracks()[0] 
        if (videoTrack) {
            videoTrack.enabled = !videoTrack.enabled 
            setIsVideoOn(videoTrack.enabled) 
            console.log("[toggleVideo] ->", videoTrack.enabled ? "ON" : "OFF") 
        }
    }

    function toggleAudio() {
        if (!localStream) return 
        const audioTrack = localStream.getAudioTracks()[0] 
        if (audioTrack) {
            audioTrack.enabled = !audioTrack.enabled 
            setIsAudioOn(audioTrack.enabled) 
            console.log("[toggleAudio] ->", audioTrack.enabled ? "ON" : "OFF") 
        }
    }

    async function initiateCall (userToCall) {
        if (!firestore) {
            console.error("[initiateCall] No Firestore!") 
            return 
        }
        if (!peerConnection) {
            console.error("[initiateCall] No PeerConnection!") 
            return 
        }
        if (!userToCall) {
            alert("Please select a user to call.") 
            return 
        }
        if (!localStream) await startWebcam() 

        setPickedUser(userToCall) 
        setShowUserPicker(false) 
        setIsConnecting(true) 

        try {
            console.log("[initiateCall] Creating Firestore doc...") 
            const callDocRef = doc(collection(firestore, "calls")) 
            const offerCandidates = collection(callDocRef, "offerCandidates") 
            const answerCandidates = collection(callDocRef, "answerCandidates") 
            setCallId(callDocRef.id) 

            peerConnection.onicecandidate = async (e) => {
                if (e.candidate) {
                    console.log("[initiateCall] Local ICE ->", e.candidate) 
                    await addDoc(offerCandidates, e.candidate.toJSON()) 
                }
            } 

            console.log("[initiateCall] Creating offer...") 
            const offerDesc = await peerConnection.createOffer() 
            await peerConnection.setLocalDescription(offerDesc) 

            console.log("[initiateCall] Writing offer to Firestore...") 
            await setDoc(callDocRef, {
                offer: { sdp: offerDesc.sdp, type: offerDesc.type },
            }) 

            console.log("[initiateCall] Emitting socket event (OUTGOING_VIDEO_CALL)...") 
            socketService.emit(OUTGOING_VIDEO_CALL, {
                callId: callDocRef.id,
                callerName: loggedUser?.fullname || "Unknown",
                callReceiver: userToCall._id,
                callerImg: loggedUser?.imgUrl || "",
            }) 

            onSnapshot(callDocRef, async (snapshot) => {
                const data = snapshot.data() 
                if (data?.answer && !peerConnection.currentRemoteDescription) {
                    console.log("[initiateCall] Remote answer ->", data.answer) 
                    const answerDesc = new RTCSessionDescription(data.answer) 
                    await peerConnection.setRemoteDescription(answerDesc) 
                }
            }) 

            onSnapshot(answerCandidates, async (snapshot) => {
                snapshot.docChanges().forEach(async (change) => {
                    if (change.type === "added") {
                        const candidateData = change.doc.data() 
                        console.log("[initiateCall] Remote ICE ->", candidateData) 
                        const candidate = new RTCIceCandidate(candidateData) 
                        await peerConnection.addIceCandidate(candidate) 
                    }
                }) 
            }) 
        } catch (err) {
            console.error("[initiateCall] Error:", err) 
            alert("Failed to create call. Try again.") 
            setIsConnecting(false) 
        }
    }

    async function answerCall(callIdToJoin, pc = peerConnection, db = firestore) {
        if (!callIdToJoin) {
            alert("Need a valid call ID") 
            return 
        }
        if (!db) {
            console.error("[answerCall] Firestore not init") 
            return 
        }
        if (!pc) {
            console.error("[answerCall] No PeerConnection") 
            return 
        }
        if (!localStream) await startWebcam(pc) 

        setIsConnecting(true) 

        try {
            console.log("[answerCall] Reading doc: calls/", callIdToJoin) 
            const callDocRef = doc(db, "calls", callIdToJoin) 
            const offerCandidates = collection(callDocRef, "offerCandidates") 
            const answerCandidates = collection(callDocRef, "answerCandidates") 

            pc.onicecandidate = async (e) => {
                if (e.candidate) {
                    console.log("[answerCall] Local ICE ->", e.candidate) 
                    await addDoc(answerCandidates, e.candidate.toJSON()) 
                }
            } 

            const docSnap = await getDoc(callDocRef) 
            if (!docSnap.exists()) {
                alert("Call ID not found") 
                setIsConnecting(false) 
                return 
            }
            const callData = docSnap.data() 
            if (!callData.offer) {
                alert("No valid offer in Firestore doc") 
                setIsConnecting(false) 
                return 
            }

            console.log("[answerCall] Setting remote desc from offer...") 
            const offerDesc = new RTCSessionDescription(callData.offer) 
            await pc.setRemoteDescription(offerDesc) 

            console.log("[answerCall] Creating answer...") 
            const answerDesc = await pc.createAnswer() 
            await pc.setLocalDescription(answerDesc) 

            console.log("[answerCall] Saving answer in Firestore...") 
            await setDoc(callDocRef, { answer: { type: answerDesc.type, sdp: answerDesc.sdp } }, { merge: true }) 

            onSnapshot(offerCandidates, (snapshot) => {
                snapshot.docChanges().forEach(async (change) => {
                    if (change.type === "added") {
                        const candidateData = change.doc.data() 
                        console.log("[answerCall] Remote ICE (caller) ->", candidateData) 
                        const candidate = new RTCIceCandidate(candidateData) 
                        await pc.addIceCandidate(candidate) 
                    }
                }) 
            }) 
        } catch (err) {
            console.error("[answerCall] Error:", err) 
            alert("Failed to join call. Invalid ID?") 
            setIsConnecting(false) 
        }
    } 

    function hangUp() {
        console.log("[hangUp] Closing call") 
        if (peerConnection) peerConnection.close() 
        if (localStream) localStream.getTracks().forEach((track) => track.stop()) 
        if (timerInterval) clearInterval(timerInterval) 

        setTimerInterval(null) 
        setCallTimer(0) 
        setLocalStream(null) 
        setRemoteStream(null) 
        setIsWebcamActive(false) 
        setCallId("") 
        setPickedUser(null) 
        setUserFilter("") 
        setIsConnecting(false) 

        remoteMediaStreamRef.current = new MediaStream() 

        const servers = {
            iceServers: [{ urls: ["stun:stun1.l.google.com:19302"] }], iceCandidatePoolSize: 10,
        } 
        const newPc = new RTCPeerConnection(servers) 
        newPc.ontrack = (event) => {
            const rs = remoteMediaStreamRef.current 
            event.streams[0].getTracks().forEach((track) => rs.addTrack(track)) 
            setRemoteStream(rs) 
        } 
        newPc.oniceconnectionstatechange = () => {
            if (newPc.iceConnectionState === "connected" || newPc.iceConnectionState === "completed") {
                setIsConnecting(false) 
                const interval = setInterval(() => setCallTimer((prev) => prev + 1), 1000) 
                setTimerInterval(interval) 
            } else if (newPc.iceConnectionState === "disconnected" || newPc.iceConnectionState === "failed") {
                setIsConnecting(false) 
                if (timerInterval) clearInterval(timerInterval) 
                setTimerInterval(null) 
                setCallTimer(0) 
            }
        } 
        setPeerConnection(newPc) 
    }

    async function onUserFilter(ev) {
        const value = ev.target.value 
        setUserFilter(value) 
        if (!value) {
            setShowUserPicker(false) 
            setUsers([]) 
            return 
        }
        try {
            const filteredUsers = await userService.getUsers(value) 
            const available = filteredUsers.filter((u) => u._id !== loggedUser?._id) 
            setUsers(available) 
            setShowUserPicker(true) 
        } catch (err) {
            console.error("[onUserFilter] Error:", err) 
        }
    } 

    function formatTimer(seconds) {
        const hh = Math.floor(seconds / 3600) 
        const mm = Math.floor((seconds % 3600) / 60) 
        const ss = seconds % 60 
        return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}` 
    } 

    function onMouseMove() {
        setShowControls(true) 
        if (controlsTimeout) clearTimeout(controlsTimeout) 
        const timeout = setTimeout(() => setShowControls(false), 3000) 
        setControlsTimeout(timeout) 
    } 

    const hideUserPicker = Boolean(isConnecting || callId) 
    console.log('ha')
    return (<div className="video-call-container" onMouseMove={onMouseMove}>
        <AppHeader useDarkTextColors={false} />

        <div className="video-grid">
            <div className="remote-video-container">
                (<video ref={remoteVideoRef} autoPlay playsInline style={{ width: "600px", height: "400px", background: "black" }} className="remote-video" />)
            </div>

            <div className="local-video-wrapper">
                {isLoadingCamera ? (<div className="loading">Starting camera...</div>) : localStream ? (<video ref={webcamVideoRef} autoPlay playsInline muted style={{ aspectRatio: '16/9', background: "#333" }} className="local-video" />) : (<div className="no-video">No local video</div>)}

                {localStream && (<div className="video-overlay">
                    <span className="recording-indicator">
                        <span className="dot" />
                        Live
                    </span>
                </div>)}
            </div>
        </div>

        <div className={`control-bar ${showControls ? "visible" : ""}`}>
            <div className="control-section left">
                <div className="timer">{formatTimer(callTimer)}</div>
            </div>
            <div className="control-section center">
                <button className={`control-btn ${isAudioOn ? "active" : ""}`} onClick={toggleAudio} title={isAudioOn ? "Mute" : "Unmute"} disabled={!localStream}>
                    <svg viewBox="0 0 24 24" className="control-icon">
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                </button>

                <button className={`control-btn ${isVideoOn ? "active" : ""}`} onClick={toggleVideo} title={isVideoOn ? "Turn Off Video" : "Turn On Video"} disabled={!localStream}>
                    <svg viewBox="0 0 24 24" className="control-icon">
                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                    </svg>
                </button>

                <button className="control-btn" onClick={() => setShowUserPicker(!showUserPicker)} title="Search Users" disabled={hideUserPicker}>
                    <svg viewBox="0 0 24 24" className="control-icon">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                </button>

                <button className="control-btn danger" onClick={hangUp} title="End Call" disabled={!localStream}>
                    <svg viewBox="0 0 24 24" className="control-icon">
                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17l-3.59-3.59L8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41l-3.59 3.59L17 15.59z" />
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

        {!hideUserPicker && showUserPicker && (<div className="user-search-overlay">
            <div className="search-container no-mag-glass">
                <input type="text" placeholder="Search users to call..." value={userFilter} onChange={onUserFilter} className="search-input" autoFocus />
            </div>
            {users.length > 0 && (<div className="user-list">
                {users.map((u) => (<div onClick={() => initiateCall(u)} key={u._id} className="user-item">
                    <img src={u.imgUrl || "roi.png"} alt={u.fullname} /> <span>{u.fullname}</span>
                    <button >Call</button>
                </div>))}
            </div>)}
        </div>)}

        {!pickedUser && (<div className="join-call">
            <input ref={callInputRef} placeholder="Enter call ID to join" value={callId} onChange={(e) => setCallId(e.target.value)} />
            <button onClick={() => answerCall(callId)}>Join Call</button>
        </div>)}

        {showDeclined && <div className="show-decilend">
            <h3 ><span className="cancleduser">{pickedUser.fullname}</span> has Declined your call</h3>
            <button className="task-modal-close" onClick={() => setShowDeclined(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor" />
                </svg>
            </button>
        </div>}

    </div>)
}

