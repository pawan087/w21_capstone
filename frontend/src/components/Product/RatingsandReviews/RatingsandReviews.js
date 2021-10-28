import React, { useState } from "react";
import styles from "./RatingandReviews.module.css";
import StarPicker from "react-star-picker";
import Testing from "../Testing";
import TopReviewsCard from "./TopReviewsCard";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import ReactStars from "react-rating-stars-component";

export default function RatingsandReviews({ avgRating, reviews }) {
  const [bool, setBool] = useState(false); // <-- set to false after dev
  const [visible, setVisible] = useState(true); // <-- set to true after dev
  const [rating, setRating] = useState();

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <div className={styles.outerContainer}>
      <div onClick={() => setBool(!bool)} className={styles.topContainer}>
        <div className={styles.title}>Ratings and Reviews</div>
        {bool && (
          <div onClick={() => setBool(!bool)} className={styles.menuIcon}>
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
                d="M20 12H4"
              />
            </svg>
          </div>
        )}

        {!bool && (
          <div onClick={() => setBool(!bool)} className={styles.menuIcon}>
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        )}
      </div>

      {bool && (
        <div className={styles.bottomContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.leftTopContainer}>
              <div className={styles.reviewNumber}>
                {" "}
                {avgRating}
                <div className={styles.starsContainer}>
                  <div className={styles.starRating}>
                    <StarPicker
                      starDimension="10px"
                      disabled={true}
                      value={avgRating}
                      halfStars
                    />
                  </div>
                </div>
              </div>

              <div className={styles.ratingText}>{reviews.length} Ratings</div>
            </div>

            <div className={styles.leftBottomContainer}>
              <button onClick={show} className={styles.writeReview}>
                Write A Review
              </button>
            </div>
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.barChartsContainer}>
              <Testing reviews={reviews} />
            </div>
          </div>
        </div>
      )}

      {bool && <TopReviewsCard reviews={reviews} avgRating={avgRating} />}

      <Rodal
        width={1265}
        height={790}
        animation={"slideDown"}
        visible={visible}
        onClose={hide}
      >
        <div className={styles.writeReviewOuterContainer}>
          <div className={styles.writeReviewTopContainer}>
            <div className={styles.writeReviewTitle}>Write a review</div>

            <div className={styles.writeReviewSubtitle}>
              <div className={styles.productImageContainer}>
                <img
                  className={styles.writeReviewProductPic}
                  src={"https://shortpixel.com/img/robot_lookleft_wink_big.png"}
                ></img>
              </div>

              <div className={styles.productNameContainer}>
                Product name goes here
              </div>
            </div>
          </div>

          <div className={styles.writeReviewMiddleContainer}>
            <div className={styles.ratingContainer}>
              <div className={styles.ratingTitle}>Overall Rating</div>

              <div className={styles.writeReviewStarsContainer}>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
            </div>

            <div className={styles.reviewInputsContainer}>
              <div className={styles.emailInputContainer}>
                <input placeholder={'chahal.pawanpreet@gmail.com'}  className={styles.emailInput} type="email"></input>
              </div>

              <div className={styles.contentInputContainer}>
                <textarea type='text' placeholder='Your review' className={styles.reviewInput}></textarea>
                <div className={styles.addPhotoContainer}>
                  <button className={styles.addPhotoButton}>Add Photo</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.writeReviewBottomContainer}>
            <button className={styles.writeReviewButton}>POST REVIEW</button>
          </div>
        </div>
      </Rodal>
    </div>
  );
}
