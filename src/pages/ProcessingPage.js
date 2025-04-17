import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressIndicator from "../components/ProgressIndicator";
import "../styles/ProgressIndicator.css";

const ProcessingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/results"); // Redirect to ResultsPage after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigate]);

  return (
    <div className="processing-page">
      <header className="processing-header">
        <h1>Step 2: Processing Your Image</h1>
        <p>Hang tight! Your diagnostic insights are on the way.</p>
      </header>
      <div className="processing-content">
        <ProgressIndicator isProcessing={true} />
        <p className="processing-message">Analyzing your image… This may take a few seconds.</p>
      </div>
    </div>
  );
};

export default ProcessingPage;
