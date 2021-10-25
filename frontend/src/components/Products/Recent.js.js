import React from "react";

import styles from "./ProductsPage.module.css";

export default function Recent({ products, user }) {
  console.log("PRODUCTS:", products);
  console.log("USER:", user);

  return (
    <div>
      <h2 className={styles.title}>Recently Viewed</h2>
    </div>
  );
}
