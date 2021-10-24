import React from "react";

import styles from "./ProductPage.module.css";

function ReviewCard({ productReviews }) {
  return (
    <>
      <h4 className={styles.title}>Reviews</h4>

      {productReviews?.map((review, i) => {
        return (
          <div key={i}>
            <h4 className={styles.orderTitle}>Review {i + 1}</h4>

            <h5>by: {review.User.username}</h5>

            <h4>{review.content}</h4>

            <h4>{review.rating} Stars</h4>

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
          </div>
        );
      })}

      {productReviews?.length === 0 && <p>Sorry, no reviews.</p>}
    </>
  );
}

export default ReviewCard;
