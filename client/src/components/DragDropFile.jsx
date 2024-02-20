import React, { useRef, useState } from "react";

const DragDropFile = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);
  const inputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      setErrorMessage(false);
    } else {
      setFile(null);
      setErrorMessage(true);
    }
  };

  return (
    <div
      className="w-full min-h-[100px] flex items-center justify-center rounded-lg border-dashed border-[1px] border-black my-5"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {!file && (
        <span className="flex flex-col items-center">
          <p>
            Drag & Drop your image or{" "}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              hidden
              ref={inputRef}
            />
            <button
              className="m-0 p-0 text-black/70 font-semibold"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                inputRef.current.click();
              }}
            >
              Browse
            </button>
          </p>
          {errorMessage && (
            <p className="text-red-500 text-[12px]">
              Only *.png, *.jpeg or *.jpg are accepted!
            </p>
          )}
        </span>
      )}

      {file && (
        <div>
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded file"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default DragDropFile;
