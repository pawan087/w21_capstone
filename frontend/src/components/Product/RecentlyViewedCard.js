import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { motion } from "framer-motion/dist/framer-motion";
import Carousel from "react-grid-carousel";

import IndividualRecentlyViewed from "./IndividualRecentlyViewed";
import styles from "./RecentlyViewed.module.css";

export default function RecentlyViewedCard() {
  const params = useParams();

  const [bool, setBool] = useState(true); // <-- set to false after dev

  const products = useSelector((state) => state.products);
  const recentlyViewed = useSelector((state) => state.recentlyViewed);

  const variants = {
    closed: { height: "0px" },
    open: { height: "385px" },
  };

  let recentlyViewedProducts = [];
  let count = 0;

  products?.forEach((product, i) => {
    if (
      params.id !== undefined &&
      recentlyViewed.includes(+product.id) &&
      product.id !== +params.id
    ) {
      recentlyViewedProducts.push(product);
    }

    if (params.id === undefined && recentlyViewed.includes(+product.id)) {
      if (count < 12) {
        recentlyViewedProducts.push(product);
        count++;
      }
    }
  });

  return (
    <div className={styles.topReviewsContainer}>
      <div className={styles.topReviewsTopContainer}>
        <div onClick={() => setBool(!bool)} className={styles.topReviewTitle}>
          Recently Viewed
        </div>

        {bool && (
          <div onClick={() => setBool(!bool)} className={styles.menuIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </div>
        )}

        <div>
          {!bool && (
            <div onClick={() => setBool(!bool)} className={styles.menuIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      {bool && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.topReviewsMiddleContainer}
        >
          <div className={styles.carnival}>
            <Carousel shoDots cols={6} rows={1} gap={0} loop>
              {recentlyViewedProducts?.map((product, i) => {
                return (
                  <Carousel.Item className={styles.item} key={i}>
                    <IndividualRecentlyViewed product={product} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </motion.div>
      )}
    </div>
  );
}
