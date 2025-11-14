import React, { useState } from "react";
import axios from "axios";
import "./FileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file!");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResponse(res.data.message || "File processed successfully!");
    } catch (err) {
      console.error(err);
      setResponse("Error uploading file");
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Financial Document</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {response && <p className="response">{response}</p>}
    </div>
  );
};

export default FileUpload;
