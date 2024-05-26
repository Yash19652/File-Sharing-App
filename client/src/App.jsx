import React from "react";
import "./App.css";
import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./services/api";

function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState("");
  const [output,setOutput] = useState("");
  console.log(file);

  useEffect(() => {
    const getImage = async () => {
      if(file)
        {
          const data = new FormData();
          data.append("name",file.name);
          data.append("file",file);

          const response = await uploadFile(data);
          setOutput(response.path);
        }
    };
    getImage();
  }, [file]);

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
            {output ? <a href={output}>Click here to download</a> : " "}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
