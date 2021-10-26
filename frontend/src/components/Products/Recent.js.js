import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-grid-carousel";

import styles from "./ProductsPage.module.css";

export default function Recent({ products }) {
  const recentlyViewed = useSelector((state) => state.recentlyViewed);

  let recentlyViewedProducts = [];

  products?.forEach((product) => {
    if (recentlyViewed.includes(+product.id)) {
      recentlyViewedProducts.push(product);
    }
  });

  return (
    <div>
      <h2 className={styles.title}>Recently Viewed</h2>

      <br />

      <div className={styles.container}>
        <Carousel shoDots cols={5} rows={1} gap={0} loop>
          {recentlyViewedProducts.map((product, i) => (
            <Carousel.Item className={styles.item} key={i}>
              <a href={`products/${product.id}`}>
                <img alt={product.name} className={styles.center} src={product.images[0]} />
              </a>
            </Carousel.Item>
          ))}

          {recentlyViewedProducts.map((product, i) => (
            <Carousel.Item className={styles.item} key={i}>
              <a href={`products/${product.id}`}>
                <img alt={product.name} className={styles.center} src={product.images[0]} />
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
