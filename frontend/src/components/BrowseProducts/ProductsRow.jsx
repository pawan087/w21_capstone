import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import StarPicker from "react-star-picker";

import styles from "./styles.module.css";

export default function ProductsRow({ products }) {
  const history = useHistory();

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const reviews = useSelector((state) => state.reviews);

  let productReviews = [];

  products?.forEach((obj) => {
    obj["reviewsArr"] = [];
    reviews?.forEach((review) => {
      if (review.productId === obj.id) {
        productReviews.push({
          ...review,
        });

        obj["reviewsArr"].push({ ...review });
      }
    });
  });

  return (
    <div className={styles.productsRowOfFourContainer}>
      {products?.map((product) => {
        let sum = 0;

        product.reviewsArr.forEach((review) => {
          sum += +review.rating;
        });

        const avgRating = sum / product.reviewsArr.length;

        return (
          <div className={styles.productContainer}>
            <div className={styles.productDetailContainer1}>
              <img
                className={styles.productImage}
                src={product.images[0]}
                alt="resultsProductImage"
              />
            </div>

            <div className={styles.productDetailContainer2}>
              ${product.price}
            </div>

            <div className={styles.productDetailContainer3}>
              <div className={styles.productName}>{product.name}</div>

              <div className={styles.productSubcategory}>
                {product.Subcategory.name}
              </div>

              <div className={styles.starsRatingContainer}>
                <div className={styles.starsContainer}>
                  <div className={styles.stars2}>
                    <StarPicker
                      starDimension="15px"
                      disabled={true}
                      value={formatter.format(avgRating)}
                      halfStars
                    />
                  </div>
                </div>

                <div className={styles.productReviewCount}>({product.reviewsArr.length})</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
