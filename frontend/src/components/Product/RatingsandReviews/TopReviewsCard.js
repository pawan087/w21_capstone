import React from "react";
import styles from "./TopReviewsCard.module.css";

export default function TopReviewsCard() {
  return (
    <div className={styles.topReviewsContainer}>
      <div className={styles.topReviewsTopContainer}>
        <div className={styles.topReviewTitle}>Top Reviews</div>
      </div>

      <div className={styles.topReviewsMiddleContainer}>
        <div className={styles.reviewCard1}>
          <div className={styles.reviewCardTopContainer}>
            <div className={styles.starsContainer}>
              <div className={styles.stars}>STARS GO HERE</div>
            </div>

            <div className={styles.fakeVerifiedContainer}>
              <div className={styles.fakeVerified}>Verified Purchaser</div>
            </div>
          </div>

          <div className={styles.reviewCardMiddleContainer}>
            <div className={styles.username}>USER NAME GOES HERE</div>

            <div className={styles.timeAgo}>X HOURS AGO GOES HERE</div>

            <div className={styles.reviewContent}>REVIEW CONTENT GOES HERE</div>
          </div>

          <div className={styles.reviewCardBottomContainer}>
            <div className={styles.helpfulContainer}>Helpful?</div>

            <div className={styles.likeButtonContainer}>
              <button className={styles.likeButton}>
                THUMBS UP GOES HERE YES #
              </button>
            </div>

            <div className={styles.dislikeButtonContainer}>
              <button className={styles.dislikeButton}>
                THUMBS DOWN GOES HERE YES #
              </button>
            </div>
          </div>
        </div>

        <div className={styles.reviewCard2}>
          <div className={styles.reviewCardTopContainer}>
            <div className={styles.starsContainer}>
              <div className={styles.stars}>STARS GO HERE</div>
            </div>

            <div className={styles.fakeVerifiedContainer}>
              <div className={styles.fakeVerified}>Verified Purchaser</div>
            </div>
          </div>

          <div className={styles.reviewCardMiddleContainer}>
            <div className={styles.username}>USER NAME GOES HERE</div>

            <div className={styles.timeAgo}>X HOURS AGO GOES HERE</div>

            <div className={styles.reviewContent}>REVIEW CONTENT GOES HERE</div>
          </div>

          <div className={styles.reviewCardBottomContainer}>
            <div className={styles.helpfulContainer}>Helpful?</div>

            <div className={styles.likeButtonContainer}>
              <button className={styles.likeButton}>
                THUMBS UP GOES HERE YES #
              </button>
            </div>

            <div className={styles.dislikeButtonContainer}>
              <button className={styles.dislikeButton}>
                THUMBS DOWN GOES HERE YES #
              </button>
            </div>
          </div>
        </div>

        <div className={styles.reviewCard3}>
          <div className={styles.reviewCardTopContainer}>
            <div className={styles.starsContainer}>
              <div className={styles.stars}>STARS GO HERE</div>
            </div>

            <div className={styles.fakeVerifiedContainer}>
              <div className={styles.fakeVerified}>Verified Purchaser</div>
            </div>
          </div>

          <div className={styles.reviewCardMiddleContainer}>
            <div className={styles.username}>USER NAME GOES HERE</div>

            <div className={styles.timeAgo}>X HOURS AGO GOES HERE</div>

            <div className={styles.reviewContent}>REVIEW CONTENT GOES HERE</div>
          </div>

          <div className={styles.reviewCardBottomContainer}>
            <div className={styles.helpfulContainer}>Helpful?</div>

            <div className={styles.likeButtonContainer}>
              <button className={styles.likeButton}>
                THUMBS UP GOES HERE YES #
              </button>
            </div>

            <div className={styles.dislikeButtonContainer}>
              <button className={styles.dislikeButton}>
                THUMBS DOWN GOES HERE YES #
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.topReviewsBottomContainer}>
        <div className={styles.showAllButton}>SHOW ALL REVIEWS</div>
      </div>
    </div>
  );
}
