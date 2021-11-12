import React, { useState } from "react";
import Carousel from "react-grid-carousel";
import { useDispatch, useSelector } from "react-redux";
import IndividualTopReview from "./IndividualTopReview";
import AllReviewsContainer from "./AllReviewsContainer";
import styles from "./TopReviewsCard.module.css";
import { motion } from "framer-motion/dist/framer-motion";

import { setShowAllReviews } from "../../../store/ShowAllReviews";

export default function TopReviewsCard({ reviews, avgRating }) {
  const dispatch = useDispatch();
  const [bool, setBool] = useState(false);
  const [bool2, setBool2] = useState(true);

  if (reviews.length === 0) {
    // console.log("NO REVIEWS");
  }

  const showAllHideTop = () => {
    setBool(!bool);
    setBool2(!bool2);

    dispatch(setShowAllReviews(true));
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
          </div>

          <div className={styles.topReviewsBottomContainer}>
            <div onClick={showAllHideTop} className={styles.showAllButton}>
              Show All Reviews
            </div>
          </div>
        </div>
      )}

      {bool && <AllReviewsContainer reviews={reviews} />}
    </motion.div>
  );
}
