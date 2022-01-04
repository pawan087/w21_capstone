import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";
import ReactStars from "react-rating-stars-component";
import StarPicker from "react-star-picker";
import Rodal from "rodal";

import {
  setAllReviews,
  editReview,
  deleteReview,
  deleteImage,
} from "../../../store/reviews";

import {
  createLike,
  setAllReviewLikes,
  deleteLike,
  deleteTheOpposingAndCreateLike,
} from "../../../store/reviewLikes";

import styles from "./IndividualAllReviews.module.css";
import "rodal/lib/rodal.css";

export default function IndividualTopReview({ review }) {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const reviewLikes = useSelector((state) => state.reviewLikes);
  const products = useSelector((state) => state.products);

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [contentRequired, setContentRequired] = useState(false);
  const [showEditReview, setShowEditReview] = useState(false);
  const [editConfirmation, setEditConfirmation] = useState(false);
  const [showAddPic, setShowAddPic] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bool, setBool] = useState(true);
  const [rating, setRating] = useState(review?.rating);
  const [thisReview, setThisReview] = useState({ ...review });
  const [content, setContent] = useState(thisReview?.content);
  const [preview, setPreview] = useState(review.imageUrl);
  const [selectedFile, setSelectedFile] = useState(false);
  const [uploadMsg, setUploadMsg] = useState("Upload Picture");

  const closeEditConfirmation = () => {
    setEditConfirmation(false);
  };

  const thisPagesProduct = products?.filter((product) => {
    return product.id === +params.id;
  });

  const showShowEditReview = () => {
    setShowEditReview(true);

    if (rating.imageUrl) {
      setPreview(rating.imageUrl);
    }
  };

  const showShowAddPic = () => {
    setShowEditReview(false);

    setShowAddPic(true);

    if (rating.imageUrl) {
      setPreview(rating.imageUrl);
    }
  };

  const closeEditReview = () => {
    setShowEditReview(false);

    setPreview(null);

    setImage("");

    setSelectedFile();

    setUploadMsg("Upload Picture");

    if (review.imageUrl) {
      setPreview(review.imageUrl);
    }
  };

  const closeAddPic = () => {
    setShowAddPic(false);

    setShowEditReview(true);
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const contentSetter = (e) => {
    setContent(e.target.value);

    setContentRequired(false);
  };

  const removePhoto = () => {
    setPreview(null);

    setImage("");

    setSelectedFile();

    setUploadMsg("Upload Picture");
  };

  const hide3 = () => {
    setVisible3(false);
  };

  const handleSubmit2 = async () => {
    // if (rating === review?.rating && content === review?.content) {
    //   return;
    // }

    setVisible2(false);

    setLoading(true);
    setBool(false);
    let arr = [];

    reviewLikes?.forEach((reviewLike) => {
      if (reviewLike.reviewId === review.id) {
        arr.push(reviewLike.id);
      }
    });

    await dispatch(deleteReview({ id: review.id, arr }));
    setThisReview({ ...review });

    setDidMount(false);

    setDidMount(true);

    await dispatch(setAllReviews());

    setLoading(false);

    setBool(true);

    setVisible3(true);

    setTimeout(() => setVisible3(false), 2000);
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (content === "") {
      setContentRequired(true);
      return;
    }

    if (!image && !preview) {
      if (review.imageUrl) {
        await dispatch(deleteImage(review.id));
      } else {
        await dispatch(editReview({ id: review.id, rating: rating, content }));
      }
    }

    if (!image && preview) {
      await dispatch(editReview({ id: review.id, rating: rating, content }));
    }

    if (image) {
      if (review.imageUrl) {
        await dispatch(
          editReview({ id: review.id, content, rating: rating, image })
        );
      } else {
        await dispatch(
          editReview({ id: review.id, content, rating: rating, image })
        );
      }
    }

    await dispatch(setAllReviews());

    setShowEditReview(false);

    setLoading(false);

    setImage("");

    setSelectedFile();

    setUploadMsg("Upload Picture");

    setEditConfirmation(true);

    setTimeout(() => setEditConfirmation(false), 2000);
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    if (!selectedFile) {
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);

    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);
  if (!didMount) return null;

  const updateImage = (e) => {
    const file = e.target.files[0];

    setUploadMsg(file["name"].slice(0, 36));
    setSelectedFile(e.target.files[0]);

    if (file) setImage(file);
  };

  const addPhoto = () => {
    if (!selectedFile) return;

    setShowAddPic(false);
    setShowEditReview(true);
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

  const handleLike = async () => {
    if (!user) {
      history.push("/signin");

      return;
    }

    let alreadyLiked = false;
    let alreadyDisliked = false;
    let id;
    let id2;

    reviewLikes?.forEach((reviewLike) => {
      if (
        reviewLike.userId === user.id &&
        reviewLike.reviewId === review.id &&
        reviewLike.like
      ) {
        alreadyLiked = true;
        alreadyDisliked = false;
        id = reviewLike.id;
        // console.log("ALREADY LIKED = ", alreadyLiked);
        return;
      }

      if (
        reviewLike.userId === user.id &&
        reviewLike.reviewId === review.id &&
        !reviewLike.like
      ) {
        alreadyDisliked = true;
        alreadyLiked = false;
        id2 = reviewLike.id;
        // console.log("ALREADY DISLIKED = ", alreadyDisliked);
        return;
      }
    });

    if (alreadyLiked) {
      await dispatch(deleteLike(id));

      await dispatch(setAllReviewLikes());
    } else {
      if (alreadyDisliked) {
        await dispatch(
          deleteTheOpposingAndCreateLike({
            userId: user.id,
            reviewId: review.id,
            like: true,
            idToDelete: id2,
          })
        );
      } else {
        await dispatch(
          createLike({ userId: user.id, reviewId: review.id, like: true })
        );
      }

      await dispatch(setAllReviewLikes());
    }
  };

  const handleDislike = async () => {
    if (!user) {
      history.push("/signin");

      return;
    }

    let alreadyDisliked = false;
    let alreadyLiked = false;

    let id;
    let id2;

    reviewLikes?.forEach((reviewLike) => {
      if (
        reviewLike.userId === user.id &&
        reviewLike.reviewId === review.id &&
        reviewLike.like === false
      ) {
        alreadyDisliked = true;
        alreadyLiked = false;
        id = reviewLike.id;
        return;
      }

      if (
        reviewLike.userId === user.id &&
        reviewLike.reviewId === review.id &&
        reviewLike.like === true
      ) {
        alreadyLiked = true;
        alreadyDisliked = false;
        id2 = reviewLike.id;
        return;
      }
    });

    if (alreadyDisliked === true) {
      await dispatch(deleteLike(id));

      await dispatch(setAllReviewLikes());

      return;
    } else {
      if (alreadyLiked === true) {
        await dispatch(
          deleteTheOpposingAndCreateLike({
            userId: user.id,
            reviewId: review.id,
            like: false,
            idToDelete: id2,
          })
        );
      } else {
        await dispatch(
          createLike({ userId: user.id, reviewId: review.id, like: false })
        );
      }

      await dispatch(setAllReviewLikes());
    }
  };

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

            {review.userId === user?.id && (
              <div className={styles.reviewLinks}>
                <div onClick={showShowEditReview} className={styles.editLink}>
                  Edit
                </div>
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
            <button onClick={handleLike} className={styles.likeButton}>
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
            <button onClick={handleDislike} className={styles.dislikeButton}>
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
        closeOnEsc={true}
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
        closeOnEsc={true}
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
                type={"bubbles"}
                color={"rgb(231,35,13)"}
                height={"0px"}
                width={"57.5px"}
              />
            </div>
          )}
        </div>
      </Rodal>

      <Rodal
        closeOnEsc={true}
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

      <Rodal
        closeOnEsc={true}
        enterAnimation={"zoom"}
        leaveAnimation={"fade"}
        width={1145}
        height={55}
        visible={editConfirmation}
        onClose={closeEditConfirmation}
      >
        <div className={styles.reviewSubmissionConfirmationContainer}>
          Changes submitted!
        </div>
      </Rodal>

      {/* EDIT REVIEW */}

      <Rodal
        closeOnEsc={true}
        width={1265}
        height={790}
        enterAnimation={"zoom"}
        leaveAnimation={"fade"}
        visible={showEditReview}
        onClose={closeEditReview}
      >
        <div className={styles.writeReviewOuterContainer}>
          <div className={styles.writeReviewTopContainer}>
            <div className={styles.writeReviewTitle}>Edit Review</div>

            <div className={styles.writeReviewSubtitle}>
              <div className={styles.productImageContainer}>
                <img
                  className={styles.writeReviewProductPic}
                  alt={"picOfProductInReviewModal"}
                  src={thisPagesProduct[0]?.images[0]}
                ></img>
              </div>

              <div className={styles.productNameContainer}>
                {thisPagesProduct[0]?.name}
              </div>
            </div>
          </div>

          <div className={styles.writeReviewMiddleContainer}>
            <div className={styles.ratingContainer}>
              {true && <div className={styles.ratingTitle}>Overall Rating</div>}

              <div className={styles.writeReviewStarsContainer}>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  value={+rating}
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
                <input
                  placeholder={"Your email"}
                  className={styles.emailInput}
                  type="email"
                  value={user?.email}
                  readOnly
                ></input>
              </div>

              <div className={styles.contentInputContainer}>
                <textarea
                  value={content}
                  onChange={(e) => contentSetter(e)}
                  type="text"
                  placeholder="Your review"
                  className={styles.reviewInput}
                ></textarea>

                {contentRequired && (
                  <div className={styles.required}>Required</div>
                )}

                <div className={styles.addPhotoContainer}>
                  {!preview && (
                    <button
                      onClick={showShowAddPic}
                      className={styles.addPhotoButton}
                    >
                      Add Photo
                    </button>
                  )}

                  {preview && (
                    <div className={styles.selectedReviewImagePreviewContainer}>
                      <img
                        className={styles.selectedReviewImagePreview}
                        alt="selectedReviewImage"
                        src={preview}
                      />
                    </div>
                  )}

                  {preview && (
                    <div
                      onClick={removePhoto}
                      className={styles.removeImageIconContainer}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.writeReviewBottomContainer}>
            <button onClick={handleSubmit} className={styles.writeReviewButton}>
              SUBMIT
            </button>
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
        closeOnEsc={true}
        enterAnimation={"zoom"}
        leaveAnimation={"fade"}
        width={685}
        height={505}
        visible={showAddPic}
        onClose={closeAddPic}
      >
        <div className={styles.addPhotoOuterContainer}>
          <div className={styles.addPhotoTopContainer}>
            <div className={styles.addPhotoTitle}>Add Photo</div>
          </div>

          <div className={styles.addPhotoMiddleContainer}>
            {!selectedFile && (
              <div className={styles.addPhotoEmptyPreviewContainer}>
                <div className={styles.cameraIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}

            {selectedFile && (
              <div className={styles.addPhotoPreviewContainer}>
                <img
                  className={styles.photoPreview}
                  src={preview}
                  alt={"previewOfImage"}
                ></img>
              </div>
            )}

            <div className={styles.removePhotoContainer}>
              {selectedFile && (
                <div onClick={removePhoto} className={styles.removePhoto}>
                  Remove Photo
                </div>
              )}

              {!selectedFile && (
                <div
                  onClick={removePhoto}
                  className={styles.removePhoto2}
                ></div>
              )}
            </div>
          </div>

          <div className={styles.addPhotoLowerContainer}>
            {!selectedFile && (
              <div className={styles.selectFileContainer}>
                <div className={styles.fileinputs}>
                  <input
                    className={styles.inputContainer}
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                  />

                  <div className={styles.inputContainer2}>
                    <label className={styles.uploadLabel}>{uploadMsg}</label>

                    <div className={styles.uploadPic}>
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
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedFile && (
              <div className={styles.addPhotoButtonContainer}>
                <button onClick={addPhoto} className={styles.addPhotoButton2}>
                  ADD PHOTO
                </button>
              </div>
            )}
          </div>
        </div>
      </Rodal>
    </>
  );
}
