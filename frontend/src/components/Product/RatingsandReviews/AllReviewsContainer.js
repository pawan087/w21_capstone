import React from "react";
import styles from "./AllReviewsContainer.module.css";
// import IndividualAllReview from "./IndividualAllReview";
import Pagination from "../../ImageZoom";

export default function AllReviewsContainer({ reviews }) {
  return (
    <div className={styles.allReviewsContainer}>
      <div className={styles.topContainer}>
        <div className={styles.topTopContainer}>
          <div className={styles.allReviewsTitle}>
            All Reviews{" "}
          </div>
        </div>

        <div className={styles.topMiddleContainer}>
          <button className={styles.button}>
            <span>Sort by:</span> Most Helpful
            <div className={styles.downIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className={styles.topBottomContainer}>
          <div className={styles.filterIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>

          <div className={styles.filterText}>Filter</div>
        </div>
      </div>
      {/* reviews?.map((review) => {
        return <IndividualAllReview review={review} />;
      }) */}

      <Pagination arr={reviews} />
    </div>
  );
}
