import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { upload } from "../../store/reviews";

export default function ImageUpload() {
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState([]);

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

  return (
    <div>
      <h1>Image Upload Page</h1>

      <label>
        <input type="file" onChange={updateFile} />
      </label>

      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
