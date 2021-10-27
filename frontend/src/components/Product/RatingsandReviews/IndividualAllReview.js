import React from "react";
import styles from "./IndividualAllReviews.module.css";
import StarPicker from "react-star-picker";

export default function IndividualTopReview({ review, avgRating }) {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  // console.log(review.imageUrl);

  let curTime = new Date();

  // Math.abs(
  //   Math.round((curTime - new Date(review.createdAt)) / (1000 * 60 * 60 * 24))
  // );

  //   console.log(review);

  /*
      RATING - review.rating, USERNAME - review.User.username, DAYS AGO - review.createdAt
      CONTENT - review.content, LIKES - review.likeCount, DISLIKES - review.dislikeCount
      */
  return (
    <div className={styles.reviewCard1}>
      <div className={styles.reviewCardTopContainer}>
        <div className={styles.starsContainer}>
          <div className={styles.starRating}>
            <StarPicker
              starDimension="10px"
              disabled={true}
              value={review?.rating}
              halfStars
            />
          </div>
        </div>

        <div className={styles.ratingText}>
          {formatter.format(review?.rating)}
        </div>

        <div className={styles.fakeVerifiedContainer}>
          <div className={styles.fakeVerified}>
            {" "}
            <div className={styles.star}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            Verified Purchaser
          </div>
        </div>
      </div>

      <div className={styles.reviewCardMiddleContainer}>
        <div className={styles.username}>{review?.User?.username}</div>

        <div className={styles.timeAgo}>
          {Math.abs(
            Math.round(
              (curTime - new Date(review?.createdAt)) / (1000 * 60 * 60 * 24)
            )
          )}{" "}
          days ago
        </div>

        <div className={styles.reviewWithPic}>
          <div className={styles.reviewContent}>{review?.content}</div>

          {review?.imageUrl && <div className={styles.picContainer}>
            <img
              className={styles.pic}
              alt={"reviewPic"}
              src={review.imageUrl}
            />
          </div>}
        </div>
      </div>

      <div className={styles.reviewCardBottomContainer}>
        <div className={styles.helpfulContainer}>Helpful?</div>

        <div className={styles.likeButtonContainer}>
          <button className={styles.likeButton}>
            <div className={styles.thumbsUpIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
            </div>{" "}
            YES {review?.likeCount}
          </button>
        </div>

        <div className={styles.dislikeButtonContainer}>
          <button className={styles.dislikeButton}>
            <div className={styles.thumbsDownIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
              </svg>
            </div>{" "}
            NO {review?.dislikeCount}
          </button>
        </div>
      </div>
    </div>
  );
}
