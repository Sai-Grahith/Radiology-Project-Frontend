import React from "react";
import { motion } from "framer-motion";
import "../styles/ProgressIndicator.css";

const ProgressIndicator = ({ isProcessing }) => {
  return (
    <motion.div
      className="progress-indicator"
      whileHover={{ scale: 1.05 }}
      style={{
        padding: "20px",
        textAlign: "center",
        background: "#f1f8ff",
        borderRadius: "10px",
        marginTop: "10px",
      }}
    >
      {isProcessing ? (
        <div className="loader"></div>
      ) : (
        <p style={{ color: "#3f51b5" }}>Upload an image to get started!</p>
      )}
    </motion.div>
  );
};

export default ProgressIndicator;
