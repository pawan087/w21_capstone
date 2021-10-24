import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

import { setAllReviews, editReview, deleteReview } from "../../store/reviews";
import styles from "./ProductPage.module.css";

export default function IndividualReview({ review, i, productReviewsLength }) {
  const dispatch = useDispatch();
  const params = useParams();

  const user = useSelector((state) => state.session.user);

  const [bool, setBool] = useState(false);
  const [content, setContent] = useState(review.content);
  const [rating, setRating] = useState(review.rating);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  let curTime = new Date();

  const handleSubmit = async () => {
    await dispatch(editReview({ id: review.id, rating: rating, content }));

    await dispatch(setAllReviews());

    setBool(false);
  };

  const handleSubmit2 = async () => {
    await dispatch(deleteReview(review.id));

    await dispatch(setAllReviews());

    setBool(false);
  };

  return (
    <div>
      <h4 className={styles.orderTitle}>Review {productReviewsLength - i}</h4>

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
            value={review.rating}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
      )}

      {!bool && (
        <ReactStars
          disabled={true}
          value={review.rating}
          count={5}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
      )}

      <br />

      {review.likeCount === 1 ? (
        <span>{review.likeCount} Like</span>
      ) : (
        <span>{review.likeCount} Likes</span>
      )}

      {"     &     "}

      {review.dislikeCount === 1 ? (
        <span>{review.dislikeCount} Dislike</span>
      ) : (
        <span>{review.dislikeCount} Dislikes</span>
      )}

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

          <button onClick={() => setBool(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
