import React from "react";
import Carousel from "react-grid-carousel";

import styles from "./styles.module.css";

export default function PreOrderVideoGames() {
  let topSellers = [
    {
      name: "11.12.21",
      img: "https://media.gamestop.com/i/gamestop/ShinMegamiTenseiV_224x224_D5Up_1.webp",
    },
    {
      name: "11.16.21",
      img: "https://media.gamestop.com/i/gamestop/StarWars_JKCollection_224x224_5Up_D.webp",
    },
    {
      name: "11.16.21",
      img: "https://media.gamestop.com/i/gamestop/StarWars_RacerComCombo_224x224_5Up_D.webp",
    },
    {
      name: "11.16.21",
      img: "https://media.gamestop.com/i/gamestop/SmurfsMissionVileaf_224x224_D5Up.webp",
    },
    {
      name: "11.19.21",
      img: "https://media.gamestop.com/i/gamestop/Battlefield2042_224x224_KeyArtSquare_5Up_D.webp",
    },
    {
      name: "11.19.21",
      img: "https://media.gamestop.com/i/gamestop/PokemonBrilliantShining_PO_224x224_.webp",
    },
    {
      name: "11.19.21",
      img: "https://media.gamestop.com/i/gamestop/Kena_GIMP_224x224_5Up_D.webp",
    },
    {
      name: "11.22.21",
      img: "https://media.gamestop.com/i/gamestop/FarmingSimulator22_224x224_D5Up.webp",
    },
    {
      name: "11.23.21",
      img: "https://media.gamestop.com/i/gamestop/DisneyClassicCollection_224x224_D5Up.webp",
    },
    {
      name: "12.08.21",
      img: "https://media.gamestop.com/i/gamestop/224x224_Halo.webp",
    },
  ];

  return (
    <div className={styles.topSellersContainer}>
      <div className={styles.topSellersTitle}>Pre-Order Video Games</div>

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
  );
}
