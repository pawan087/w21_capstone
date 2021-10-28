import React, { useState } from "react";
import styles from "./TopReviewsCard.module.css";
import IndividualTopReview from "./IndividualTopReview";
import Carousel from "react-grid-carousel";
import AllReviewsContainer from "./AllReviewsContainer";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

export default function TopReviewsCard({ reviews, avgRating }) {
  const [bool, setBool] = useState(false);
  const [bool2, setBool2] = useState(true);

  const showAllHideTop = () => {
    setBool(!bool);
    setBool2(!bool2);
  };

  return (
    <>
      {bool2 && (
        <div className={styles.topReviewsContainer}>
          <div className={styles.topReviewsTopContainer}>
            <div className={styles.topReviewTitle}>Top Reviews</div>
          </div>

          <div className={styles.topReviewsMiddleContainer}>
            {/* MAP START */}

            <div className={styles.carnival}>
              <Carousel shoDots cols={3} rows={1} gap={0} loop>
                {reviews
                  ?.map((review, i) => {
                    return (
                      <Carousel.Item className={styles.item} key={i}>
                        <IndividualTopReview
                          review={review}
                          avgRating={avgRating}
                        />
                      </Carousel.Item>
                    );
                  })
                  .reverse()}
              </Carousel>
            </div>

            {/* MAP END */}
          </div>

          <div className={styles.topReviewsBottomContainer}>
            <div onClick={showAllHideTop} className={styles.showAllButton}>
              Show All Reviews
            </div>
          </div>
        </div>
      )}

      {bool && <AllReviewsContainer reviews={reviews} />}
    </>
  );
}
