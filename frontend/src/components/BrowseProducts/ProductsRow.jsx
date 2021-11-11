import React from "react";

import styles from "./styles.module.css";

export default function ProductsRow({ products }) {
  return (
    <div className={styles.productsRowOfFourContainer}>
      {products?.map((product) => {
        return (
          <div className={styles.productContainer}>{product.name}</div>
        );
      })}
    </div>
  );
}
