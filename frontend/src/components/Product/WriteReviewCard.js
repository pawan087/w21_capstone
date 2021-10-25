import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ReactStars from "react-rating-stars-component";

import { createReview, setAllReviews } from "../../store/reviews";
import "./upload.css";
import styles from "./ProductPage.module.css";

export default function WriteReviewCard() {
  const dispatch = useDispatch();
  const params = useParams();

  const user = useSelector((state) => state.session.user);

  const [content, setContent] = useState("");
  const [rating, setRating] = useState();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [uploadMsg, setUploadMsg] = useState("Upload Picture (Optional)");
  const [imageLoading, setImageLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const clear = () => {
    setContent("");
    setRating(0);
    setUploadMsg("Upload Picture (Optional)");
    setPreview("");
    setSelectedFile();
  };

  const handleSubmit = async () => {
    if (content === "") {
      return;
    }

    setLoading(true);

    if (image) {
      setImageLoading(true);
    }

    await dispatch(
      createReview({
        userId: user.id,
        productId: params.id,
        content,
        rating,
        image,
      })
    );

    await dispatch(setAllReviews());

    setContent("");
    setRating(0);
    setPreview("");
    setRating(0);

    if (image) {
      setImageLoading(false);
    }

    setUploadMsg("Upload Picture (Optional)");
    setLoading(false);
    setSelectedFile();

    // window.location.reload();
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
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

    setUploadMsg(file["name"].slice(0, 39));
    setSelectedFile(e.target.files[0]);

    if (file) setImage(file);
  };

  return (
    <div>
      <h3 className={styles.title}>Write a Review</h3>

      <br></br>

      <div>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          placeholder={"Share your thoughts"}
          type="text"
          value={content}
        ></textarea>
      </div>

      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />

      <br />

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

      {image && (
        <div>
          <br />
          {preview && <img className="pic2" src={preview} alt="picToUpload" />}
        </div>
      )}

      <br />

      {imageLoading && <p>Image Uploading...</p>}

      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>

      {"     "}

      <button onClick={clear}>Cancel</button>

      {loading && <p>Thank you for your review.</p>}
    </div>
  );
}
