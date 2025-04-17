import React from "react";
import { useNavigate } from "react-router-dom";
import TempUploader from "../components/TempUploader";
import NavigationBar from "../components/NavigationBar";
import "../styles/Uploader.css";

const UploadPage = () => {
  const navigate = useNavigate();

  const handleStartAnalysis = () => {
    navigate("/processing");
  };

  return (
    <div className="upload-page">
      <NavigationBar />
      <div className="upload-container">
        <section className="upload-info">
          <h1>Step 1: Upload Your Radiology Image</h1>
          <p>Seamlessly upload your chest X-ray to begin the AI-driven diagnosis.</p>
        </section>
        <TempUploader />
        <button className="start-analysis-btn" onClick={handleStartAnalysis}>
          -Start Analysis
        </button>
      </div>
      <footer className="upload-footer">
        <p>© 2025 Radiology AI. All rights reserved. | <a href="/contact">Contact</a></p>
      </footer>
    </div>
  );
};

export default UploadPage;
