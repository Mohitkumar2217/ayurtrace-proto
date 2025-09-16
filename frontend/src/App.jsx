import React, { useState } from "react";
import "./index.css";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a waste image first.");
      return;
    }
    // 🔹 Mock result for demo
    setResult({
      category: "Plastic Bottle",
      location: "Ward 12, Pune",
      recyclingScore: Math.floor(Math.random() * 100) + "%",
    });
  };

  return (
    <div className="app-container">
      <div className="card">
        {/* Header */}
        <div className="header">
          <div className="logo">WM</div>
          <div>
            <h1>WasteTrace</h1>
            <p>Blockchain + AI prototype for smart waste management</p>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid">
          {/* Left panel */}
          <div className="main">
            <h2 className="h1-lg">Dashboard</h2>
            <p className="description">
              Upload waste images and metadata. Get AI category + recycling score
              and record data on blockchain.
            </p>

            {result && (
              <div className="preview">
                <div className="row">
                  <span className="label">Category</span>
                  <span className="value">{result.category}</span>
                </div>
                <div className="row">
                  <span className="label">Location</span>
                  <span className="value">{result.location}</span>
                </div>
                <div className="row">
                  <span className="label">Recycling Score</span>
                  <span className="value">{result.recyclingScore}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right panel */}
          <aside className="side">
            <div className="form-row">
              <label htmlFor="fileUpload">Waste image</label>
              <input
                type="file"
                id="fileUpload"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <button className="btn btn-primary" onClick={handleUpload}>
              Upload & Classify
            </button>
          </aside>
        </div>

        {/* Footer */}
        <div className="footer">WasteTrace — Prototype</div>
      </div>
    </div>
  );
}

export default App;
