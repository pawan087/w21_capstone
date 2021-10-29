import React from "react";
import Carousel from "react-grid-carousel";

import IndividualRecentlyViewed from "./IndividualRecentlyViewed";
import styles from "./RecentlyViewed.module.css";

export default function RecentlyViewedCard() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={styles.topReviewsContainer}>
      <div className={styles.topReviewsTopContainer}>
        <div className={styles.topReviewTitle}>Recently Viewed</div>
      </div>

      <div className={styles.topReviewsMiddleContainer}>
        <div className={styles.carnival}>
          <Carousel shoDots cols={6} rows={1} gap={0} loop>
            {arr?.map((x, i) => {
              return (
                <Carousel.Item className={styles.item} key={i}>
                  <IndividualRecentlyViewed />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
