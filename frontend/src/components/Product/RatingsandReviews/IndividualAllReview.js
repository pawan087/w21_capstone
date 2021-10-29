import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarPicker from "react-star-picker";
import Rodal from "rodal";
import ReactLoading from "react-loading";

import {
  setAllReviews,
  editReview,
  deleteReview,
  deleteImage,
} from "../../../store/reviews";
import styles from "./IndividualAllReviews.module.css";
import "rodal/lib/rodal.css";

export default function IndividualTopReview({ review }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const reviewLikes = useSelector((state) => state.reviewLikes);

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false); // <-- set to true after dev
  const [visible3, setVisible3] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bool, setBool] = useState(true);

  const hide3 = () => {
    // setVisible2(false);
    // setVisible(true);
    setVisible3(false);
  };

  const handleSubmit2 = async () => {
    setLoading(true);
    setBool(false);
    let arr = [];

    reviewLikes?.forEach((reviewLike) => {
      if (reviewLike.reviewId === review.id) {
        arr.push(reviewLike.id);
      }
    });

    await dispatch(deleteReview({ id: review.id, arr }));

    await dispatch(setAllReviews());

    setLoading(false);
    setVisible2(false);
    setBool(true);
    setVisible3(true);
    setTimeout(() => setVisible3(false), 2000);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  const show2 = () => {
    setVisible2(true);
  };

  const hide2 = () => {
    setLoading(false);
    setVisible2(false);
  };

  let curTime = new Date();

  return (
    <>
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
          <div className={styles.username}>
            {review?.User?.username}

            {review.userId === user.id && (
              <div className={styles.reviewLinks}>
                <div className={styles.editLink}>Edit</div>
                <div onClick={show2} className={styles.removeLink}>
                  Remove
                </div>
              </div>
            )}
          </div>

          {Math.abs(
            Math.round(
              (curTime - new Date(review?.createdAt)) / (1000 * 60 * 60 * 24)
            )
          ) !== 0 && (
            <div className={styles.timeAgo}>
              {Math.abs(
                Math.round(
                  (curTime - new Date(review?.createdAt)) /
                    (1000 * 60 * 60 * 24)
                )
              )}{" "}
              days ago
            </div>
          )}

          {Math.abs(
            Math.round(
              (curTime - new Date(review?.createdAt)) / (1000 * 60 * 60 * 24)
            )
          ) < 1 && <div className={styles.timeAgo}>Today</div>}

          <div className={styles.reviewWithPic}>
            <div className={styles.reviewContent}>{review?.content}</div>

            {review?.imageUrl && (
              <div className={styles.picContainer}>
                <img
                  onClick={show}
                  className={styles.pic}
                  alt={"reviewPic"}
                  src={review.imageUrl}
                />
              </div>
            )}
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

      <Rodal
        width={835}
        height={545}
        enterAnimation={"zoom"}
        leaveAnimation={"fade"}
        visible={visible}
        onClose={hide}
      >
        <div className={styles.reviewImageModal}>
          <img
            className={styles.modalImage}
            src={review?.imageUrl}
            alt="reviewImageModal"
          />
        </div>
      </Rodal>

      <Rodal
        enterAnimation={"zoom"}
        leaveAnimation={"fade"}
        width={500}
        height={370}
        visible={visible2}
        onClose={hide2}
      >
        <div className={styles.deleteReviewConfirmationModal}>
          <div className={styles.firstContainer}>
            <div className={styles.modalTitle}>REMOVE REVIEW?</div>
          </div>

          <div className={styles.onePointFiveContainer}>
            <div className={styles.confirmationText}>
              Are you sure you want to remove the following review?
            </div>
          </div>

          {bool && (
            <div className={styles.secondContainer}>
              <div className={styles.reviewUsername}>
                {review?.User?.username}:
              </div>

              <div className={styles.deleteReviewContent}>
                {review?.content}
              </div>
            </div>
          )}

          {!bool && (
            <div className={styles.secondContainer}>
              <div className={styles.reviewUsername}></div>

              <div className={styles.deleteReviewContent}></div>
            </div>
          )}

          <div className={styles.thirdContainer}>
            <div className={styles.cancelButtonContainer}>
              <button onClick={hide2} className={styles.cancelButton}>
                CANCEL
              </button>
            </div>

            <div className={styles.yesButtonContainer}>
              <button onClick={handleSubmit2} className={styles.yesButton}>
                YES
              </button>
            </div>
          </div>
          {loading && (
            <div className={styles.loader}>
              <ReactLoading
                type={"spin"}
                color={"rgba(0,0,0,.75)"}
                height={"0px"}
                width={"57.5px"}
              />
            </div>
          )}
        </div>
      </Rodal>

      <Rodal
        enterAnimation={"zoom"}
        leaveAnimation={"fade"}
        width={1145}
        height={55}
        visible={visible3}
        onClose={hide3}
      >
        <div className={styles.reviewSubmissionConfirmationContainer}>
          Your review was removed!
        </div>
      </Rodal>
    </>
  );
}
