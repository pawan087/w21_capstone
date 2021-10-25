import React from "react";
import { useSelector } from "react-redux";

import styles from "./ProductsPage.module.css";

export default function Recent({ products }) {
  const recentlyViewed = useSelector((state) => state.recentlyViewed);

  let recentlyViewedProducts = [];

  products?.forEach((product) => {
    if (recentlyViewed.includes(+product.id)) {
      recentlyViewedProducts.push(product);
    }
  });

  console.log(products);

  return (
    <div>
      <h2 className={styles.title}>Recently Viewed</h2>

      <br />

      <div className={styles.pics}>
        {recentlyViewedProducts?.map((product) => {
          return (
            <a href={`products/${product.id}`}>
              <img className={styles.pic} src={product?.images[0]}></img>
            </a>
          );
        })}
      </div>
    </div>
  );
}
