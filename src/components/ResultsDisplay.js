import React from "react";
import "../styles/ResultsDisplay.css";

const ResultsDisplay = ({ diagnosis }) => {
  return (
    <div className="results-display">
      {diagnosis ? (
        <div className="diagnosis-card">
          <h2>Diagnostic Report</h2>
          <p>{diagnosis}</p>
        </div>
      ) : (
        <p>No results to display yet. Upload an image to analyze!</p>
      )}
    </div>
  );
};

export default ResultsDisplay;
