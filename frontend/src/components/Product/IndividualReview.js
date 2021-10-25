import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import StarPicker from "react-star-picker";
import { useDispatch, useSelector } from "react-redux";

import ReviewLikeComponent from "./ReviewLikeComponent";
import { setAllReviews, editReview, deleteReview } from "../../store/reviews";
import styles from "./ProductPage.module.css";
import "./upload.css";

export default function IndividualReview({ review, i, productReviewsLength }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const reviewLikes = useSelector((state) => state.reviewLikes);

  const [bool, setBool] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [content, setContent] = useState(review.content);
  const [rating, setRating] = useState(review.rating);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [uploadMsg, setUploadMsg] = useState("Update Review Image");
  const [imageLoading, setImageLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  let curTime = new Date();

  const handleSubmit = async () => {
    await dispatch(editReview({ id: review.id, rating: rating, content }));

    await dispatch(setAllReviews());

    setBool(false);
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

  const handleSubmit2 = async () => {
    let arr = [];

    reviewLikes?.forEach((reviewLike) => {
      if (reviewLike.reviewId === review.id) {
        arr.push(reviewLike.id);
      }
    });

    await dispatch(deleteReview({ id: review.id, arr }));

    await dispatch(setAllReviews());

    setBool(false);
  };

  const updateImage = (e) => {
    const file = e.target.files[0];

    setBool2(true);

    setUploadMsg(file["name"].slice(0, 39));
    setSelectedFile(e.target.files[0]);

    if (file) setImage(file);
  };

  const clear = () => {
    setBool(false);
    setBool2(false);
    setContent(review.content);
    setRating(review.rating);
    setUploadMsg("Upload Picture (Optional)");
    setPreview("");
    setSelectedFile();
  };

  return (
    <div>
      <h3 className={styles.orderTitle}>Review {productReviewsLength - i}</h3>

      <h4>By: {review.User.username}</h4>

      <h5>
        Posted:{" "}
        {Math.abs(
          Math.round(
            (curTime - new Date(review.createdAt)) / (1000 * 60 * 60 * 24)
          )
        ) > 1 &&
          `${Math.abs(
            Math.round(
              (curTime - new Date(review.createdAt)) / (1000 * 60 * 60 * 24)
            )
          )} days ago`}{" "}
        {Math.abs(
          Math.round(
            (curTime - new Date(review.createdAt)) / (1000 * 60 * 60 * 24)
          )
        ) === 1 &&
          `${Math.abs(
            Math.round(
              (curTime - new Date(review.createdAt)) / (1000 * 60 * 60 * 24)
            )
          )} day ago`}
        {Math.abs(
          Math.round(
            (curTime - new Date(review.createdAt)) / (1000 * 60 * 60 * 24)
          )
        ) === 0 && "Today"}{" "}
      </h5>

      {!bool && <h4>{review.content}</h4>}

      {bool && (
        <div>
          <textarea
            type="text"
            onChange={(e) => setContent(e.target.value)}
            defaultValue={review.content}
          ></textarea>

          <br />

          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            value={+review.rating}
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
              {preview && (
                <img className="pic2" src={preview} alt="picToUpload" />
              )}
            </div>
          )}

          <br />

          {imageLoading && <p>Image Uploading...</p>}
        </div>
      )}

      {!bool && <StarPicker disabled={true} value={+review.rating} halfStars />}

      <br />

      {review.imageUrl !== null && !bool2 && (
        <img alt="reviewImage" src={review.imageUrl} className="pic"></img>
      )}

      <br />
      <br />

      {!bool && <ReviewLikeComponent className={styles.pic} review={review} />}

      <br />
      <br />

      {!bool && review.userId === user.id && (
        <button onClick={() => setBool(true)}>Edit</button>
      )}

      {bool && review.userId === user.id && (
        <div>
          <button onClick={handleSubmit}>Submit</button>

          {"     "}

          <button onClick={handleSubmit2}>Remove</button>

          {"     "}

          <button onClick={clear}>Cancel</button>
        </div>
      )}
    </div>
  );
}

// {!bool && (
//   <ReactStars
//     disabled={true}
//     value={+review.rating}
//     count={5}
//     size={24}
//     isHalf={true}
//     emptyIcon={<i className="far fa-star"></i>}
//     halfIcon={<i className="fa fa-star-half-alt"></i>}
//     fullIcon={<i className="fa fa-star"></i>}
//     activeColor="#ffd700"
//   />
// )}
