import React from "react";
import styles from "./TopReviewsCard.module.css";
import IndividualTopReview from "./IndividualTopReview";
import Carousel from "react-grid-carousel";

export default function TopReviewsCard({ reviews, avgRating }) {
  let lastThree = reviews?.reverse().slice(0, 3);

  return (
    <div className={styles.topReviewsContainer}>
      <div className={styles.topReviewsTopContainer}>
        <div className={styles.topReviewTitle}>Top Reviews</div>
      </div>

      <div className={styles.topReviewsMiddleContainer}>
        {/* MAP START */}

        {lastThree?.map((review) => {
          return <IndividualTopReview review={review} avgRating={avgRating} />;
        })}

        {/* MAP END */}
      </div>
      <div className={styles.topReviewsBottomContainer}>
        <div className={styles.showAllButton}>Show All Reviews</div>
      </div>
    </div>
  );
}

