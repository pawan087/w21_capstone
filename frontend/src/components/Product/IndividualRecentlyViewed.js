import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import StarPicker from "react-star-picker";
import {
  motion,
  Frame,
  useTransform,
  useMotionValue,
} from "framer-motion/dist/framer-motion";

import styles from "./RecentlyViewed.module.css";

export default function IndividualRecentlyViewed({ product }) {
  const history = useHistory();

  const reviews = useSelector((state) => state.reviews);

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
    x.set(event.pageX);
    y.set(event.pageY);
  }

  let productReviews = [];

  reviews?.forEach((review) => {
    if (review.productId === product.id) {
      productReviews.push({
        ...review,
      });
    }
  });

  let sum = 0;

  productReviews?.forEach((review) => {
    sum += +review.rating;
  });

  const avgRating = sum / productReviews?.length;

  const movePage = (id) => {
    history.push(`/products/${id}`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={() => movePage(product.id)} className={styles.reviewCard1}>
      <div className={styles.reviewCardTopContainer}>
        <div className={styles.productImageContainer}>
          <img
            alt={"productImage"}
            src={product?.images[0]}
            className={styles.productImage}
          ></img>
        </div>
      </div>

      <div className={styles.reviewCardBottomContainer}>
        <div className={styles.productPriceTag}>${product.price}</div>

        <div className={styles.productDetail}>
          <div className={styles.productName}>{product.name}</div>

          <div className={styles.productBrand}>{product.Brand.name}</div>
        </div>
        <div className={styles.starsContainer}>
          <div className={styles.stars}>
            <StarPicker
              starDimension="10px"
              disabled={true}
              value={avgRating}
              halfStars
            />
          </div>
        </div>
      </div>
    </div>
  );
}
