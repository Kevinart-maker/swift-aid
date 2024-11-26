import React, { useState } from "react";
import { storage, db } from "../firebase-config"; // Your firebase config import
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import the necessary functions
import VoiceRecorder from "./VoiceRecorder";
import { collection, addDoc, getFirestore, Timestamp } from "firebase/firestore"; // Firestore methods

const ComplaintForm = () => {
  const [emergencyMessage, setEmergencyMessage] = useState(""); // Emergency message state
  const [audioUrl, setAudioUrl] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [mediaType, setMediaType] = useState("photo"); // State to manage the media type (photo/video or audio)
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const [isFormValid, setIsFormValid] = useState(true); // State to track form validation

  const handleMediaTypeChange = (e) => {
    setMediaType(e.target.value); // Change media type based on user selection
  };

  const handleEmergencyMessageChange = (e) => {
    setEmergencyMessage(e.target.value);
  };

  const validateForm = () => {
    if (!emergencyMessage) {
      setIsFormValid(false); // If emergency message is not provided, set form as invalid
      return false;
    }
    setIsFormValid(true); // Form is valid if emergency message is filled
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Prepare data to save in Firestore
    const complaintData = {
      emergencyMessage,
      mediaType,
      timestamp: Timestamp.fromDate(new Date()), // Timestamp for when the complaint was submitted
    };

    // Add media URL if available
    if (mediaType === "photo" && photoUrl) {
      complaintData.mediaUrl = photoUrl;
    } else if (mediaType === "audio" && audioUrl) {
      complaintData.mediaUrl = audioUrl;
    }

    try {
      // Add the complaint data to Firestore
      await addDoc(collection(db, "complaints"), complaintData);
      console.log("Complaint submitted successfully:", complaintData);
      alert("Your complaint has been submitted successfully!");
    } catch (err) {
      setError("Error submitting complaint: " + err.message);
    }
  };

  // Handle photo or video upload
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const fileName = `complaint-media/${Date.now()}-${file.name}`;
    const storageRef = ref(storage, fileName);

    try {
      setIsUploading(true);
      await uploadBytes(storageRef, file);  // Upload the file to Firebase Storage

      // Get the download URL for the uploaded file
      const fileUrl = await getDownloadURL(storageRef);
      setPhotoUrl(fileUrl);
      setIsUploading(false);
    } catch (err) {
      setError("Error uploading media: " + err.message);
      setIsUploading(false);
    }
  };

  // Handle voice recording upload
  const handleStopRecording = async (audioBlob) => {
    const fileName = `complaint-voice/${Date.now()}.wav`;
    const storageRef = ref(storage, fileName);

    try {
      setIsUploading(true);
      await uploadBytes(storageRef, audioBlob);  // Upload the audio blob to Firebase Storage

      // Get the download URL for the uploaded audio file
      const audioUrl = await getDownloadURL(storageRef);
      setAudioUrl(audioUrl);
      setIsUploading(false);
    } catch (err) {
      setError("Error uploading voice recording: " + err.message);
      setIsUploading(false);
    }
  };

  return (
    <div>
      <h3>Submit Your Complaint</h3>

      {/* Emergency message input */}
      <div>
        <label>
          Emergency Message (This is compulsory):
          <textarea
            value={emergencyMessage}
            onChange={handleEmergencyMessageChange}
            rows="4"
            cols="50"
            required
          />
        </label>
      </div>

      {/* Error message for the emergency message */}
      {!isFormValid && <p style={{ color: "red" }}>Please provide an emergency message!</p>}

      {/* Media selection */}
      <div>
        <label>
          <input
            type="radio"
            value="photo"
            checked={mediaType === "photo"}
            onChange={handleMediaTypeChange}
          />
          Photo/Video
        </label>
        <label>
          <input
            type="radio"
            value="audio"
            checked={mediaType === "audio"}
            onChange={handleMediaTypeChange}
          />
          Voice Recording
        </label>
      </div>

      {/* Photo/Video upload */}
      {mediaType === "photo" && (
        <div>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
          />
          {photoUrl && (
            <div>
              <p>Media uploaded successfully!</p>
              <img src={photoUrl} alt="Uploaded" width="200" />
            </div>
          )}
        </div>
      )}

      {/* Audio recording */}
      {mediaType === "audio" && (
        <VoiceRecorder onStopRecording={handleStopRecording} />
      )}

      {/* Uploading status */}
      {isUploading && <p>Uploading...</p>}

      {/* Display uploaded audio */}
      {audioUrl && (
        <div>
          <p>Voice recording uploaded successfully!</p>
          <audio controls>
            <source src={audioUrl} type="audio/wav" />
          </audio>
        </div>
      )}

      {/* Submit button */}
      <button onClick={handleSubmit}>Submit Complaint</button>

      {/* Error handling */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ComplaintForm;