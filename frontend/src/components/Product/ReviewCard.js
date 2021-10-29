import React from "react";

import Testing from "./Testing";
import IndividualReview from "./IndividualReview";
import styles from "./ProductPage.module.css";

function ReviewCard({ productReviews }) {
  return (
    <>
      <h2 className={styles.title}>Reviews</h2>

      <br />

      {productReviews?.length > 0 && <Testing reviews={productReviews} />}

      <br />
      <br />

      {productReviews
        ?.map((review, i) => {
          return (
            <IndividualReview
              review={review}
              i={i}
              key={i}
              productReviewsLength={productReviews?.length}
            />
          );
        })
        .reverse()}

      {productReviews?.length === 0 && <p>Sorry, no reviews.</p>}
    </>
  );
}

export default ReviewCard;
