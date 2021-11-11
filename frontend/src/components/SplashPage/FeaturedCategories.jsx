import React from "react";
import Carousel from "react-grid-carousel";

import styles from "./styles.module.css";

export default function FeaturedCategories() {
  let topSellers = [
    {
      name: "Video Games",
      img: "https://media.gamestop.com/i/gamestop/Video-Games-Category-Image-Desktop@2x.webp",
    },
    {
      name: "Controllers",
      img: "https://media.gamestop.com/i/gamestop/Controllers-Category-Image-Desktop@2x.webp",
    },
    {
      name: "PC Gaming",
      img: "https://media.gamestop.com/i/gamestop/PC-Gaming-Category-Image-Desktop@2x.webp",
    },
    {
      name: "Electronics",
      img: "https://media.gamestop.com/i/gamestop/Electronics-Category-Image-Desktop-2-2x.webp",
    },
    {
      name: "Keyboards",
      img: "https://media.gamestop.com/i/gamestop/Keyboards-Category-Image-Desktop@2x.webp",
    },
    {
      name: "Headsets",
      img: "https://media.gamestop.com/i/gamestop/Headsets-Category-Image-Desktop@2x.webp",
    },
    {
      name: "Toys",
      img: "https://media.gamestop.com/i/gamestop/Toys-Category-Image-Desktop@2x.webp",
    },
    {
      name: "Games",
      img: "https://media.gamestop.com/i/gamestop/Games-Puzzles-Category-Image-Desktop@2x.webp",
    },
    {
      name: "Clothing",
      img: "https://media.gamestop.com/i/gamestop/Apparel-Category-Image-Desktop@2x.webp",
    },
    {
      name: "Lifestyle",
      img: "https://media.gamestop.com/i/gamestop/Lifestyle-Category-Image-Desktop@2x.webp",
    },
  ];

  return (
    <>
      <div className={styles.divisor2} />

      <div className={styles.topSellersContainer}>
        <div className={styles.topSellersTitle}>Featured Categories</div>

        <div className={styles.topReviewsMiddleContainer}>
          <div className={styles.carnival}>
            <Carousel shoDots cols={5} rows={1} gap={0} loop>
              {topSellers?.map((x, i) => {
                return (
                  <Carousel.Item className={styles.item} key={i}>
                    <div className={styles.topSellerPicContainer}>
                      <img
                        className={styles.topSellerPic}
                        alt="topSellerPic"
                        src={x.img}
                      />
                    </div>
                    <div className={styles.itemName}>{x.name}</div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
