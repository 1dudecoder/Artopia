import React, { useState } from "react";
import { uploadfileicon, uploadpofile } from "../../../assets";
import Spinner from "../spinner/Spinner";
import { twMerge } from "tailwind-merge";

const DragandDrop = ({ myclass, vectorstyle, text }) => {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      uploadFile(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadFile(file);
    }
  };

  const uploadFile = (file) => {
    setFileName(file.name);
    setLoading(true);
    setUploadProgress(0); // Reset upload progress

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const newProgress = prevProgress + 10; // Simulate progress increase
        if (newProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
        }
        return newProgress;
      });
    }, 200);

    // Simulate file upload completion
    setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div
        className={` ${twMerge(
          "flex justify-center items-center border-[0.2px] border-[#7470706c] text-nowrap  mt-2 rounded-2xl  flex-col bg-[#7470701a]",
          myclass
        )}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <img src={uploadpofile} alt="upload-icon" draggable="true" />
        <p className="font-bold text-base mt-2">{text}</p>
        <p className="text-[9px] mt-1">
          SVG, PNG, JPG or GIF (max. 1024x1024px)
        </p>
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleFileSelect}
        />
      </div>

      {fileName && (
        <div
          className={`${twMerge(
            "border-[0.2px] bg-white mt-2 py-2 px-4  text flex justify-between items-center gap-2 rounded text-sm text-black w-full",
            vectorstyle
          )}`}
        >
          <div className="flex justify-center items-center gap-2">
            <div className="gap-2">
              <img src={uploadfileicon} alt="upload-file-icon" />
            </div>
            <div>
              <p className="font-bold">{fileName}</p>
              {uploadProgress !== 100 && <p>{`${uploadProgress}% Uploaded`}</p>}
            </div>
          </div>

          <div>{loading && <Spinner />}</div>
        </div>
      )}
    </>
  );
};

export default DragandDrop;
