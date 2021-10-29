import React from "react";
import { useHistory } from "react-router-dom";
import StarPicker from "react-star-picker";

import styles from "./RecentlyViewed.module.css";

export default function IndividualRecentlyViewed({ product }) {
  const history = useHistory();

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
              value={+product.rating}
              halfStars
            />
          </div>
        </div>
      </div>
    </div>
  );
}
