import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage"; // Upload page with TempUploader and Start Analysis button
import ProcessingPage from "./pages/ProcessingPage"; // Processing animation page
import ResultsPage from "./pages/ResultsPage"; // Results display with diagnosis and charts

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/processing" element={<ProcessingPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
