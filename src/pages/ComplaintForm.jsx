import React, { useState, useRef } from "react";
import { storage, db } from "../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
// import "./ComplaintForm.css"; // Import the CSS for styling
import { useNavigate } from "react-router-dom";

const ComplaintForm = () => {
    const navigate = useNavigate()
    const [emergencyMessage, setEmergencyMessage] = useState("");
    const [mediaType, setMediaType] = useState(""); // "photo" or "audio"
    const [photoUrl, setPhotoUrl] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [error, setError] = useState("");
  
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
  
    // Handle file upload
    const handleFileChange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
  
      const fileName = `complaint-media/${Date.now()}-${file.name}`;
      const storageRef = ref(storage, fileName);
  
      try {
        setIsUploading(true);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        setPhotoUrl(url);
        setMediaType("photo");
        setIsUploading(false);
      } catch (err) {
        setError("Error uploading file: " + err.message);
        setIsUploading(false);
      }
    };
  
    // Start recording
    const startRecording = () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setError("Your browser does not support audio recording.");
        return;
      }
  
      setError("");
      setIsRecording(true);
  
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorderRef.current = mediaRecorder;
          mediaRecorder.start();
  
          mediaRecorder.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data);
          };
  
          mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
            uploadAudio(audioBlob);
            audioChunksRef.current = []; // Reset audio chunks
          };
        })
        .catch((err) => {
          setError("Error accessing microphone: " + err.message);
          setIsRecording(false);
        });
    };
  
    // Stop recording
    const stopRecording = () => {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
      }
    };
  
    // Upload audio to Firebase
    const uploadAudio = async (audioBlob) => {
      const fileName = `complaint-audio/${Date.now()}.wav`;
      const storageRef = ref(storage, fileName);
  
      try {
        setIsUploading(true);
        await uploadBytes(storageRef, audioBlob);
        const url = await getDownloadURL(storageRef);
        setAudioUrl(url);
        setMediaType("audio");
        setIsUploading(false);
      } catch (err) {
        setError("Error uploading audio: " + err.message);
        setIsUploading(false);
      }
    };
  
    // Submit the complaint form
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!emergencyMessage) {
        setError("Emergency message is required.");
        return;
      }
  
      const complaintData = {
        emergencyMessage,
        mediaType,
        mediaUrl: mediaType === "photo" ? photoUrl : audioUrl,
        timestamp: Timestamp.fromDate(new Date()),
      };
  
      try {
        await addDoc(collection(db, "complaints"), complaintData);
        alert("Complaint submitted successfully!");
      } catch (err) {
        setError("Error submitting complaint: " + err.message);
      }
    };
  
    return (
      <div className="complaint-form-container">
        <h2 className="nav"><i className="fa-solid fa-arrow-left" onClick={()=> navigate('/profile')}></i> File Complain</h2>
        <header className="complaint-header">
          <img
            src="/assets/profile-pic.png"
            alt="User Profile"
            className="profile-pic"
          />
          <div className="user-info">
            <h2>Favour Effiom</h2>
            <span className="privacy-status">
                <img src="/assets/global.png" alt="global icon" />
                <span>Private</span>
                <img src="/assets/arrow-bottom.png" alt="" />
            </span>
          </div>
        </header>
  
        <form className="complaint-form">
          <div className="emergency-msg">
            <p>Discuss Emergency</p>
            <textarea
                value={emergencyMessage}
                onChange={(e) => setEmergencyMessage(e.target.value)}
                className="emergency-message-input"
                required
            />
          </div>
  
          <div className="media-options">
            <div className="photo-upload">
              <label htmlFor="file-input">
                <div className="upload-icon">
                    <img src="/assets/vector.png" alt="add" />
                </div>
                <p>Add a Photo/Video</p>
                <span>Select photo or video you want to post</span>
              </label>
              <input
                type="file"
                id="file-input"
                accept="image/*,video/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              {photoUrl && <p>Media uploaded successfully!</p>}
            </div>
  
            <p className="or-text">Or</p>
  
            <div className="audio-record">
              {isRecording ? (
                <div className="records">
                    <img src="/assets/record.png" alt="" onClick={stopRecording} />
                    <p>Stop Recording</p>
                    <span>Press Mic to stop</span>
                </div>
              ) : (
                <div className="records">
                    <img src="/assets/record.png" alt="" onClick={startRecording} />
                    <p>Record</p>
                    <span>Press Mic to record</span>
                </div>
              )}
            </div>
          </div>
  
          <div  onClick={handleSubmit} className="btn">
            Submit Complain
          </div>
  
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    );
  };
  
  export default ComplaintForm;