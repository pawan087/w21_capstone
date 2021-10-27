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

        <div className={styles.carnival}>
          <Carousel shoDots cols={3} rows={1} gap={0} loop>
            {reviews?.map((review, i) => {
              return (
                <Carousel.Item className={styles.item} key={i}>
                  <IndividualTopReview review={review} avgRating={avgRating} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>

        {/* MAP END */}
      </div>
      <div className={styles.topReviewsBottomContainer}>
        <div className={styles.showAllButton}>Show All Reviews</div>
      </div>
    </div>
  );
}