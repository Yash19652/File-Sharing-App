import React from "react";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState("");
  console.log(file);
  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="wrapper">
            <h1>File Sharing App</h1>
            <p>Upload And Share The Download Link</p>

            <button onClick={() => onUploadClick()}>Upload</button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
