import React from "react";
import styles from "./ProductPage.module.css";

function ReviewCard({ productReviews }) {
  return (
    <>
      <h4 className={styles.title}>Reviews</h4>

      {productReviews?.map((review, i) => {
        return (
          <div key={i}>
            <li>{review.User.username}</li>

            <li>{review.content}</li>

            <li>{review.rating} Stars</li>

            {review.likeCount === 1 ? (
              <li>{review.likeCount} Like</li>
            ) : (
              <li>{review.likeCount} Likes</li>
            )}

            {review.dislikeCount === 1 ? (
              <li>{review.dislikeCount} Dislike</li>
            ) : (
              <li>{review.dislikeCount} Dislikes</li>
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
