import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactImageZoom from "react-image-zoom";
import StarPicker from "react-star-picker";
import ShowMoreText from "react-show-more-text";
import Rodal from "rodal";
import ReactLoading from "react-loading";
import { FaCheck } from "react-icons/fa";

import {
  createCartItem,
  setAllCartItems,
  editCartItem,
} from "../../store/cartItems.js";
import RecentlyViewedCard from "./RecentlyViewedCard";
import RatingsandReviews from "./RatingsandReviews/RatingsandReviews";
import styles from "./ProductPage.module.css";
import "rodal/lib/rodal.css";

function ProductDetail({ num, product, avgRating, reviews }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const cartItems = useSelector((state) => state.cartItems);

  const [loader, setLoader] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false); // set to false, true for testing

  const usersCartItems = cartItems?.filter((cartItem) => {
    return (
      cartItem?.userId === user?.id && cartItem?.productId === product[0]?.id
    );
  });

  const quantity = 1;

  const showConfirmationModal = () => {
    setConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setConfirmationModal(false);
  };

  const showLoader = () => {
    setLoader(true);
  };

  const hideLoader = () => {
    setLoader(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    showLoader();

    if (usersCartItems.length > 0) {
      dispatch(
        editCartItem({
          id: +usersCartItems[0]?.id,
          quantity: +usersCartItems[0]?.quantity + quantity,
        })
      );
    } else {
      await dispatch(
        createCartItem({ userId: user.id, productId: product[0].id, quantity })
      );
    }

    await dispatch(setAllCartItems());

    hideLoader();
    showConfirmationModal();
  };

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const props = {
    width: 470,
    zoomWidth: 900,
    zoomPosition: "original",
    img: `${product[0]?.images[0]}`,
  };

  let rating = formatter.format(avgRating);

  useEffect(() => {
    const ayeSink = async () => {
      await dispatch(setAllCartItems());
    };

    ayeSink();

    return () => setLoader(false);
  }, [dispatch]);

  return (
    <>
      <div className={styles.categoryContainer}>
        <div className={styles.category}>{product[0]?.Category?.name}</div>

        <div className={styles.lighter}>/</div>

        <div className={styles.subcategory}>
          {product[0]?.Subcategory?.name}
        </div>

        {product[0]?.FurtherSubcategory && (
          <div className={styles.lighter}>/</div>
        )}

        <div className={styles.furtherSubcategory}>
          {product[0]?.FurtherSubcategory?.name}
        </div>
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.imageContainer}>
            <ReactImageZoom className={styles.pic} {...props} />
          </div>

          <div className={styles.descriptionContainer}>
            <div className={styles.descriptionLabel}>Product Description</div>

            <div className={styles.descriptionText}></div>
            <ShowMoreText
              lines={3}
              more="View more"
              less="View less"
              className={styles.description}
              expanded={false}
              truncatedEndingComponent={" ... "}
            >
              {" "}
              {product[0]?.description}
            </ShowMoreText>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.productDetailContainer}>
            <div className={styles.productNameContainer}>
              {product[0]?.name}
            </div>

            <div className={styles.productBrandContainer}>
              {product[0]?.Brand?.name}
            </div>

            <div className={styles.ratingContainer}>
              <div className={styles.starsContainer}>
                <div className={styles.starRating}>
                  <StarPicker
                    starDimension="10px"
                    disabled={true}
                    value={rating}
                    halfStars
                  />
                </div>
              </div>

              {!!avgRating && (
                <div className={styles.textRating}>
                  <span className={styles.bold}>
                    {formatter.format(avgRating)}
                  </span>{" "}
                  ({num}) {num === 1 ? "Rating" : "Ratings"}
                </div>
              )}
            </div>

            <div className={styles.priceContainer}>
              <div className={styles.price}>${product[0]?.price}</div>
            </div>

            <div className={styles.buttonContainer}>
              <div className={styles.addToCartButtonContainer}>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className={styles.addToCartButton}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RatingsandReviews avgRating={avgRating} reviews={reviews} />

      <RecentlyViewedCard />

      {loader && (
        <div className={styles.loader}>
          <ReactLoading
            type={"bubbles"}
            color={"rgba(0,0,0,.75)"}
            /*           color={"rgb(231,35,13)"} */
            height={"0px"}
            width={"120px"}
          />
        </div>
      )}

      <Rodal
        closeOnEsc={true}
        enterAnimation={"slideDown"}
        leaveAnimation={"slideDown"}
        width={400}
        height={315}
        visible={confirmationModal}
        onClose={hideConfirmationModal}
      >
        <div className={styles.addToCartConfirmationOuterContainer}>
          <div className={styles.confirmation1stContainer}>
            <div className={styles.checkMarkIcon}>
              {" "}
              <FaCheck style={{ display: "inline" }} />
            </div>
            <div className={styles.confirmationTitle}>Added to Cart</div>
          </div>

          <div className={styles.confirmation2ndContainer}>
            <div className={styles.confirmationProductImage}>
              <img
                className={styles.confirmPic}
                alt="confirmationPic"
                src={product[0]?.images[0]}
              />
            </div>
            <div className={styles.confirmationProductName}>
              {product[0]?.name}
            </div>
          </div>

          <div className={styles.viewCartButtonContainer}>
            <button className={styles.viewCartButton}>VIEW CART</button>
          </div>

          <div
            onClick={() => hideConfirmationModal()}
            className={styles.keepShoppingCancelLink}
          >
            Keep Shopping
          </div>
        </div>
      </Rodal>
    </>
  );
}

export default ProductDetail;
