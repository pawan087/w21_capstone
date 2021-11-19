import React, { useState } from "react";
import Carousel from "react-grid-carousel";

import IndividualTopReview from "./IndividualTopReview";
import AllReviewsContainer from "./AllReviewsContainer";
import styles from "./TopReviewsCard.module.css";
import { motion } from "framer-motion/dist/framer-motion";

export default function TopReviewsCard({ reviews, avgRating }) {
  const [bool, setBool] = useState(false);
  const [bool2, setBool2] = useState(true);

  let recent = [...reviews];

  recent.sort(function (a, b) {
    return b.id - a.id;
  });

  const showAllHideTop = () => {
    setBool(!bool);
    setBool2(!bool2);
    window.scrollTo({
      top: 1125,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.topReviewCardMotionDiv}
    >
      {bool2 && (
        <div className={styles.topReviewsContainer}>
          <div className={styles.topReviewsTopContainer}>
            <div className={styles.topReviewTitle}>Top Reviews</div>
          </div>

          <div className={styles.topReviewsMiddleContainer}>
            <div className={styles.carnival}>
              <Carousel shoDots cols={3} rows={1} gap={0} loop>
                {recent?.map((review, i) => {
                  return (
                    <Carousel.Item className={styles.item} key={i}>
                      <IndividualTopReview
                        review={review}
                        avgRating={avgRating}
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          </div>

          <div className={styles.topReviewsBottomContainer}>
            <div className={styles.showAllButton}>
              <span onClick={showAllHideTop} className={styles.showAllBtn}>
                Show All Reviews
              </span>
            </div>
          </div>
        </div>
      )}

      {bool && <AllReviewsContainer reviews={reviews} />}
    </motion.div>
  );
}
