import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { createReview, setAllReviews } from "../../../store/reviews";
import styles from "./RatingandReviews.module.css";
import StarPicker from "react-star-picker";
import Testing from "../Testing";
import TopReviewsCard from "./TopReviewsCard";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import ReactStars from "react-rating-stars-component";
import { remove, set } from "js-cookie";

export default function RatingsandReviews({ avgRating, reviews }) {
  const dispatch = useDispatch();
  const params = useParams();

  const user = useSelector((state) => state.session.user);

  const [bool, setBool] = useState(false); // <-- set to false after dev
  const [visible, setVisible] = useState(false); // <-- set to true after dev
  const [visible2, setVisible2] = useState(true); // <-- set to false after dev
  const [rating, setRating] = useState();

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [uploadMsg, setUploadMsg] = useState("Upload Picutre");
  const [imageLoading, setImageLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const clear = () => {
    setContent("");
    setRating(0);
    setUploadMsg("Upload Picture");
    setPreview("");
    setSelectedFile();
  };

  const handleSubmit = async () => {
    if (content === "") {
      return;
    }

    setLoading(true);

    if (image) {
      setImageLoading(true);
    }

    await dispatch(
      createReview({
        userId: user.id,
        productId: params.id,
        content,
        rating,
        image,
      })
    );

    await dispatch(setAllReviews());

    setContent("");
    setRating(0);
    setPreview("");
    setRating(0);

    if (image) {
      setImageLoading(false);
    }

    setUploadMsg("Upload Picture");
    setLoading(false);
    setSelectedFile();

    // window.location.reload();
  };

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  const show2 = () => {
    setVisible2(true);
    setVisible(false);
  };

  const hide2 = () => {
    setVisible2(false);
    setVisible(true);
  };

  const addPhoto = () => {
    if (!selectedFile) return;

    setVisible2(false);
    setVisible(true);
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);

    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const updateImage = (e) => {
    const file = e.target.files[0];

    setUploadMsg(file["name"].slice(0, 36));
    setSelectedFile(e.target.files[0]);

    if (file) setImage(file);
  };

  const removePhoto = () => {
    setSelectedFile();
    setUploadMsg("Upload Picture");
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
        enterAnimation={"zoom"}
        leaveAnimation={"fade"}
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
                <input
                  placeholder={"Your email"}
                  className={styles.emailInput}
                  type="email"
                  value={user.email}
                ></input>
              </div>

              <div className={styles.contentInputContainer}>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  type="text"
                  placeholder="Your review"
                  className={styles.reviewInput}
                ></textarea>
                <div className={styles.addPhotoContainer}>
                  {!selectedFile && (
                    <button onClick={show2} className={styles.addPhotoButton}>
                      Add Photo
                    </button>
                  )}

                  {selectedFile && (
                    <div className={styles.selectedReviewImagePreviewContainer}>
                      <img
                        className={styles.selectedReviewImagePreview}
                        alt="selectedReviewImage"
                        src={preview}
                      />
                    </div>
                  )}

                  {selectedFile && (
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
            <button className={styles.writeReviewButton}>POST REVIEW</button>
          </div>
        </div>
      </Rodal>
      <Rodal
        enterAnimation={"zoom"}
        leaveAnimation={"fade"}
        width={685}
        height={505}
        visible={visible2}
        onClose={hide2}
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
              {selectedFile && <div onClick={removePhoto} className={styles.removePhoto}>
                Remove Photo
              </div>}
              {!selectedFile && <div onClick={removePhoto} className={styles.removePhoto2}></div>}
            </div>
          </div>

          <div className={styles.addPhotoLowerContainer}>
            {!selectedFile && (
              <div className={styles.selectFileContainer}>
                <div className="fileinputs">
                  <input
                    className="inputContainer file"
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                  />

                  <div className="inputContainer fakefile">
                    <label className="uploadLabel">{uploadMsg}</label>

                    <div className="uploadPic">
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
    </div>
  );
}
