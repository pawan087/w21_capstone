import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import StarPicker from "react-star-picker";
import ShowMoreText from "react-show-more-text";
import Rodal from "rodal";
import ReactLoading from "react-loading";
import { FaCheck } from "react-icons/fa";
import ReactImageMagnify from "react-image-magnify";

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
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const cartItems = useSelector((state) => state.cartItems);

  const [loader, setLoader] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false); // set to false, true for testing
  const [limitQuantityModal, setLimitQuantityModal] = useState(false);

  const showLimitQuantityModal = () => {
    setLimitQuantityModal(true);
  };

  const hideLimitQuantityModal = () => {
    setLimitQuantityModal(false);
  };

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

    if (!user) {
      history.push("/signin");

      hideLoader();

      return;
    }

    if (usersCartItems.length > 0) {
      if (usersCartItems[0].quantity === 5) {
        setLoader(false);
        showLimitQuantityModal();
        return;
      }
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

  let rating = formatter.format(avgRating);

  useEffect(() => {
    const ayeSink = async () => {
      await dispatch(setAllCartItems());
    };

    ayeSink();

    return () => setLoader(false);
  }, [dispatch]);

  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);
  if (!didMount) return null;

  const handleClickCategoryName = () => {
    if (product[0]?.Category?.name === "Video Games") {
      history.push("/p/videogames/0/0/0");
    }

    if (product[0]?.Category?.name === "Consoles & Hardware") {
      history.push("/p/consoles/0/0/0");
    }

    if (product[0]?.Category?.name === "Gaming Accessories") {
      history.push("/p/accessories/0/0/0");
    }

    if (product[0]?.Category?.name === "Electronics") {
      history.push("/p/electronics/0/0/0");
    }

    if (product[0]?.Category?.name === "Toys & Games") {
      history.push("/p/toysgames/0/0/0");
    }

    if (product[0]?.Category?.name === "Clothing") {
      history.push("/p/clothing/0/0/0");
    }

    return;
  };

  const handleClickSubcategoryName = () => {
    if (
      product[0]?.Subcategory?.name === "PlayStation 4" &&
      product[0]?.Category?.name === "Video Games"
    ) {
      history.push("/p/videogames/ps4/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Nintendo Switch" &&
      product[0]?.Category?.name === "Video Games"
    ) {
      history.push("/p/videogames/switch/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "PlayStation 5" &&
      product[0]?.Category?.name === "Video Games"
    ) {
      history.push("/p/videogames/ps5/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Xbox One" &&
      product[0]?.Category?.name === "Video Games"
    ) {
      history.push("/p/videogames/xbox1/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Xbox Series X" &&
      product[0]?.Category?.name === "Video Games"
    ) {
      history.push("/p/videogames/xboxx/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Nintendo Switch" &&
      product[0]?.Category?.name === "Consoles & Hardware"
    ) {
      history.push("/p/consoles/switch/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "PC Gaming" &&
      product[0]?.Category?.name === "Consoles & Hardware"
    ) {
      history.push("/p/consoles/pc/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "PlayStation 4" &&
      product[0]?.Category?.name === "Consoles & Hardware"
    ) {
      history.push("/p/consoles/ps4/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Virtual Reality" &&
      product[0]?.Category?.name === "Consoles & Hardware"
    ) {
      history.push("/p/consoles/vr/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Xbox One" &&
      product[0]?.Category?.name === "Consoles & Hardware"
    ) {
      history.push("/p/consoles/xbox1/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Controllers" &&
      product[0]?.Category?.name === "Gaming Accessories"
    ) {
      history.push("/p/accessories/controllers/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Memory" &&
      product[0]?.Category?.name === "Gaming Accessories"
    ) {
      history.push("/p/accessories/memory/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Mounts" &&
      product[0]?.Category?.name === "Gaming Accessories"
    ) {
      history.push("/p/accessories/mounts/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "PC Gaming" &&
      product[0]?.Category?.name === "Gaming Accessories"
    ) {
      history.push("/p/accessories/pc/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Xbox One" &&
      product[0]?.Category?.name === "Gaming Accessories"
    ) {
      history.push("/p/accessories/xbox1/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Audio" &&
      product[0]?.Category?.name === "Electronics"
    ) {
      history.push("/p/electronics/audio/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Cameras" &&
      product[0]?.Category?.name === "Electronics"
    ) {
      history.push("/p/electronics/cameras/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Cell Phones" &&
      product[0]?.Category?.name === "Electronics"
    ) {
      history.push("/p/electronics/phones/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Cell Phones" &&
      product[0]?.Category?.name === "Electronics"
    ) {
      history.push("/p/electronics/phones/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Drone" &&
      product[0]?.Category?.name === "Electronics"
    ) {
      history.push("/p/electronics/drone/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Drone" &&
      product[0]?.Category?.name === "Electronics"
    ) {
      history.push("/p/electronics/drone/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Smart Home Automation" &&
      product[0]?.Category?.name === "Electronics"
    ) {
      history.push("/p/electronics/home/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "TV & Home Theater" &&
      product[0]?.Category?.name === "Electronics"
    ) {
      history.push("/p/electronics/theater/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Arts & Crafts Toys" &&
      product[0]?.Category?.name === "Toys & Games"
    ) {
      history.push("/p/toysgames/art/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Board Games" &&
      product[0]?.Category?.name === "Toys & Games"
    ) {
      history.push("/p/toysgames/boardgames/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Building & Construction Sets" &&
      product[0]?.Category?.name === "Toys & Games"
    ) {
      history.push("/p/toysgames/construction/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Dolls & Dollhouses" &&
      product[0]?.Category?.name === "Toys & Games"
    ) {
      history.push("/p/toysgames/dolls/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "NERF" &&
      product[0]?.Category?.name === "Toys & Games"
    ) {
      history.push("/p/toysgames/nerf/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Play Vehicles" &&
      product[0]?.Category?.name === "Toys & Games"
    ) {
      history.push("/p/toysgames/vehicles/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Puzzles" &&
      product[0]?.Category?.name === "Toys & Games"
    ) {
      history.push("/p/toysgames/puzzles/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Scooters & Ride Ons" &&
      product[0]?.Category?.name === "Toys & Games"
    ) {
      history.push("/p/toysgames/scooters/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Stuffed Animals & Plush" &&
      product[0]?.Category?.name === "Toys & Games"
    ) {
      history.push("/p/toysgames/plush/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Stuffed Animals & Plush" &&
      product[0]?.Category?.name === "Toys & Games"
    ) {
      history.push("/p/toysgames/plush/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Trading Cards" &&
      product[0]?.Category?.name === "Toys & Games"
    ) {
      history.push("/p/toysgames/cards/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Accessories" &&
      product[0]?.Category?.name === "Clothing"
    ) {
      history.push("/p/clothing/accessories/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Appliances" &&
      product[0]?.Category?.name === "Electronics"
    ) {
      history.push("/p/electronics/appliances/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Bags" &&
      product[0]?.Category?.name === "Clothing"
    ) {
      history.push("/p/clothing/bags/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Footwear" &&
      product[0]?.Category?.name === "Clothing"
    ) {
      history.push("/p/clothing/footwear/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Jackets & Outerwear" &&
      product[0]?.Category?.name === "Clothing"
    ) {
      history.push("/p/clothing/jackets/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Pants & Shorts" &&
      product[0]?.Category?.name === "Clothing"
    ) {
      history.push("/p/clothing/pants/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "T-Shirts" &&
      product[0]?.Category?.name === "Clothing"
    ) {
      history.push("/p/clothing/shirts/0/0");
    }

    if (
      product[0]?.Subcategory?.name === "Watches" &&
      product[0]?.Category?.name === "Clothing"
    ) {
      history.push("/p/clothing/watches/0/0");
    }

    return;
  };

  return (
    <>
      <div className={styles.categoryContainer}>
        <div
          onClick={() => handleClickCategoryName()}
          className={styles.category}
        >
          {product[0]?.Category?.name}
        </div>

        <div className={styles.lighter}>/</div>

        <div
          onClick={() => handleClickSubcategoryName()}
          className={styles.category}
        >
          {product[0]?.Subcategory?.name}
        </div>

        {false && (
          <div className={styles.furtherSubcategory}>
            {product[0]?.FurtherSubcategory?.name}
          </div>
        )}
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.leftContainer}>
          {true && (
            <div className={styles.thirdImageZoom}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "productImage",
                    width: 920,
                    height: 515,
                    src: product[0]?.images[0],
                  },
                  largeImage: {
                    src: product[0]?.images[0],
                    width: 1840,
                    height: 1030,
                  },
                  enlargedImagePosition: "over",
                  imageClassName: `${styles.smallImage}`,
                  enlargedImageClassName: `${styles.largeImage}`,
                }}
              />
            </div>
          )}

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

              {
                <div className={styles.textRating}>
                  <span className={styles.bold}>
                    {!!avgRating && formatter.format(avgRating)}
                  </span>{" "}
                  ({num}) {num === 1 ? "Rating" : "Ratings"}
                </div>
              }
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

      {user && <RecentlyViewedCard />}

      {loader && (
        <div className={styles.loader}>
          <ReactLoading
            type={"bubbles"}
            color={"rgb(231,35,13)"}
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
            <button
              onClick={() => history.push("/cart")}
              className={styles.viewCartButton}
            >
              VIEW CART
            </button>
          </div>

          <div
            onClick={() => hideConfirmationModal()}
            className={styles.keepShoppingCancelLink}
          >
            Keep Shopping
          </div>
        </div>
      </Rodal>

      <Rodal
        closeOnEsc={true}
        enterAnimation={"zoom"}
        leaveAnimation={"fade"}
        width={1145}
        height={55}
        visible={limitQuantityModal}
        onClose={hideLimitQuantityModal}
      >
        <div className={styles.reviewSubmissionConfirmationContainer}>
          <span className={styles.errorMessageTextContainer}>
            {product[0]?.name.slice(0, 70)}
            {product[0]?.name.length >= 70 ? "... " : null}
            {
              "cannot be added to the cart. You can only purchase 5 of this item per transaction."
            }
          </span>
        </div>
      </Rodal>
    </>
  );
}

export default ProductDetail;
