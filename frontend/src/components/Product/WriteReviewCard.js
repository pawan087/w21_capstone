import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ReactStars from "react-rating-stars-component";


import { createReview, setAllReviews } from "../../store/reviews";
import styles from "./ProductPage.module.css";

export default function WriteReviewCard() {
  const dispatch = useDispatch();
  const params = useParams();

  const user = useSelector((state) => state.session.user);

  const [content, setContent] = useState("");
  const [rating, setRating] = useState();
  const [loading, setLoading] = useState(false);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const clear = () => {
    setContent("");
  };

  const handleSubmit = async () => {
    if (content === "") {
      return;
    }

    setLoading(true);

    await dispatch(
      createReview({ userId: user.id, productId: params.id, content, rating })
    );

    await dispatch(setAllReviews());

    setContent("");
    setRating(0);

    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div>
      <div className={styles.title}>Write a Review</div>

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

      <button onClick={handleSubmit}>Submit</button>

      {"     "}

      <button onClick={clear}>Cancel</button>

      {loading && <p>Thank you for your review.</p>}
    </div>
  );
}
