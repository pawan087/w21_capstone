import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { upload } from "../../store/reviews";
import "./upload.css";

export default function ImageUpload() {
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [uploadMsg, setUploadMsg] = useState("Upload Picture");
  const [imageLoading, setImageLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setImageLoading(true);

    // dispatch(upload({ image }));

    setImageLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);

    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const updateImage = (e) => {
    const file = e.target.files[0];

    setUploadMsg(file["name"]);
    setSelectedFile(e.target.files[0]);

    if (file) setImage(file);
  };

  return (
    <div>
      <h1>Image Upload Page</h1>

      <div className="fileinputs">
        <input
          className="inputContainer file"
          type="file"
          accept="image/*"
          onChange={updateImage}
        />

        <div class="inputContainer fakefile">
          <label className="uploadLabel">{uploadMsg}</label>

          <div className="uploadPic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>
        </div>
      </div>

      {image && <img className="pic" src={preview} alt="picToUpload" />}

      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
