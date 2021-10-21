import React from "react";
import styles from "./ProductPage.module.css";

function ProductDetail({ product }) {
  return (
    <>
      <h2 className={styles.title}>Product Page</h2>

      <li>{product[0]?.name}</li>

      <li>{product[0]?.description}</li>

      <li>${product[0]?.price}</li>

      <img
        className={styles.image}
        alt="productImage"
        src={product[0]?.images[0]}
      ></img>
    </>
  );
}

export default ProductDetail;
