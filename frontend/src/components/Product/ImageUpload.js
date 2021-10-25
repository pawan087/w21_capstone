import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { upload } from "../../store/reviews";
// import styles from "./ProductPage.module.css";
import "./upload.css";

export default function ImageUpload() {
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState([]);
  const [uploadMsg, setUploadMsg] = useState("Upload Profile Picture");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = [];

    // console.log(image);

    dispatch(upload({ image }));
  };

  const updateFile = (e) => {
    const file = e.target.files[0];

    if (file) setImage(file);
  };

  const updateImage = (e) => {
    const file = e.target.files[0];

    setUploadMsg(file["name"]);

    setImage(file);
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

      <br />

      <label>
        <input type="file" onChange={updateFile} />
      </label>

      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
