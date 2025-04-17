import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../styles/Uploader.css";

const TempUploader = () => {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="upload-box" {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="upload-prompt">
        <h3>📤 Drag & Drop or Click to Upload</h3>
        <p>Supported formats: JPG, PNG, DICOM</p>
        {file && <p className="file-info">📁 {file.name}</p>}
      </div>
    </div>
  );
};

export default TempUploader;
