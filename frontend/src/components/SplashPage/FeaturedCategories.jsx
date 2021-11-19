import React from "react";
import { useHistory } from "react-router";
import Carousel from "react-grid-carousel";

import styles from "./styles.module.css";

export default function FeaturedCategories() {
  const history = useHistory();

  let topSellers = [
    {
      name: "Video Games",
      img: "https://media.gamestop.com/i/gamestop/Video-Games-Category-Image-Desktop@2x.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s35.webp" */
    },
    {
      name: "Controllers",
      img: "https://media.gamestop.com/i/gamestop/Controllers-Category-Image-Desktop@2x.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s36.webp" */
    },
    {
      name: "PC Gaming",
      img: "https://media.gamestop.com/i/gamestop/PC-Gaming-Category-Image-Desktop@2x.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s37.webp" */
    },
    {
      name: "Electronics",
      img: "https://media.gamestop.com/i/gamestop/Electronics-Category-Image-Desktop-2-2x.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s38.webp" */
    },
    {
      name: "Keyboards",
      img: "https://media.gamestop.com/i/gamestop/Keyboards-Category-Image-Desktop@2x.webp",
      /* https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s39.webp */
    },
    {
      name: "Headsets",
      img: "https://media.gamestop.com/i/gamestop/Headsets-Category-Image-Desktop@2x.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s40.webp" */
    },
    {
      name: "Toys",
      img: "https://media.gamestop.com/i/gamestop/Toys-Category-Image-Desktop@2x.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s41.webp" */
    },
    {
      name: "Games",
      img: "https://media.gamestop.com/i/gamestop/Games-Puzzles-Category-Image-Desktop@2x.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s42.webp" */
    },
    {
      name: "Clothing",
      img: "https://media.gamestop.com/i/gamestop/Apparel-Category-Image-Desktop@2x.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s43.webp" */
    },
    {
      name: "Lifestyle",
      img: "https://media.gamestop.com/i/gamestop/Lifestyle-Category-Image-Desktop@2x.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s44.webp" */
    },
  ];

  const handleClick = (x, i) => {
    if (i === 0) {
      history.push("/p/videogames/0/0/0");
    }

    if (i === 1) {
      history.push("/p/accessories/controllers/0/0");
    }

    if (i === 2) {
      history.push("/p/consoles/pc/0/0");
    }

    if (i === 3) {
      history.push("/p/electronics/0/0/0");
    }

    if (i === 4) {
      history.push("/p/consoles/keyboard/0/0");
    }

    if (i === 5) {
      history.push("/p/electronics/headsets/0/0");
    }

    if (i === 6) {
      history.push("/p/toysgames/toys/0/0");
    }

    if (i === 7) {
      history.push("/p/toysgames/boardgames/0/0");
    }

    if (i === 8) {
      history.push("/p/clothing/0/0/0");
    }

    if (i === 9) {
      history.push("/products/165");
    }

    return;
  };

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
                        onClick={() => handleClick(x, i)}
                      />
                    </div>
                    <div
                      onClick={() => handleClick(x, i)}
                      className={styles.itemName}
                    >
                      {x.name}
                    </div>
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
