import React from "react";
import Carousel from "react-grid-carousel";

import styles from "./styles.module.css";

export default function TopSellers() {
  let topSellers = [
    {
      name: "Oculus Quest 2",
      img: "https://media.gamestop.com/i/gamestop/Oculus_389x389_.webp",
    },
    {
      name: "Nintendo Switch Console",
      img: "https://media.gamestop.com/i/gamestop/Nintendo-Switch-390x390@2x.webp",
    },
    {
      name: "Xbox Elite Series 2 Controller",
      img: "https://media.gamestop.com/i/gamestop/Xbox-Elite-2-390x390@2x.webp",
    },
    {
      name: "Xbox Series X Wireless Stereo Headset",
      img: "https://media.gamestop.com/i/gamestop/MicrosoftXboxSeriesXWirelessStereoGamingHeadset_390x390_D3Up.webp",
    },
    {
      name: "Sony DualSense Wireless Controller",
      img: "https://media.gamestop.com/i/gamestop/DUALSENSE_390x390_D3Up.webp",
    },
    {
      name: "Star Wars Millennium Falcon Wireless Charger",
      img: "https://media.gamestop.com/i/gamestop/MillenniumFalconWirelessChargerBack_390x390_D3Up.webp",
    },
    {
      name: "Nintendo Switch Lite Console Blue",
      img: "https://media.gamestop.com/i/gamestop/NintendoSwitch_LiteConsole_Blue_390x390_D3Up.webp",
    },
    {
      name: "Dungeons and Dragons Dice & Tray",
      img: "https://media.gamestop.com/i/gamestop/Top_Sellers_Dungeons_And_Dragons_Dice_264x264.webp",
    },
    {
      name: "Monopoly: Animal Crossing New Horizons Edition",
      img: "https://media.gamestop.com/i/gamestop/Top_Sellers_Animal_Crossing_Monopoly_264x264.webp",
    },
    {
      name: "Star Wars: The Mandalorian Helmet",
      img: "https://media.gamestop.com/i/gamestop/Top_Sellers_Mandalorian_Helmet_264x264.webp",
    },
  ];

  return (
    <div className={styles.topSellersContainer}>
      <div className={styles.topSellersTitle}>Top Sellers</div>

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
