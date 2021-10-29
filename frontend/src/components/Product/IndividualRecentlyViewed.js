import React from "react";
import StarPicker from "react-star-picker";

import styles from "./RecentlyViewed.module.css";

export default function IndividualRecentlyViewed() {
  return (
    <div className={styles.reviewCard1}>
      <div className={styles.reviewCardTopContainer}>
        <div className={styles.productImageContainer}>
          <img
            alt={"productImage"}
            src={
              "https://media.gamestop.com/i/gamestop/11108954/Microsoft-Xbox-Series-X-Wireless-Controller-Carbon-Black?$pdp$$&fmt=webp"
            }
            className={styles.productImage}
          ></img>
        </div>
      </div>

      <div className={styles.reviewCardBottomContainer}>
        <div className={styles.productPriceTag}>$144.99</div>

        <div className={styles.productDetail}>
          <div className={styles.productName}>
            Xbox One Series 2 Elite Wireless Controller
          </div>

          <div className={styles.productBrand}>Xbox One</div>
        </div>
        <div className={styles.starsContainer}>
          <div className={styles.stars}>
            <StarPicker
              starDimension="10px"
              disabled={true}
              value={5}
              halfStars
            />
          </div>
        </div>
      </div>
    </div>
  );
}
