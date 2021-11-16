import React from "react";
import { useHistory } from "react-router";
import Carousel from "react-grid-carousel";

import styles from "./styles.module.css";

export default function TopSellers() {
  const history = useHistory();

  let topSellers = [
    {
      name: "Oculus Quest 2",
      img: "https://media.gamestop.com/i/gamestop/Oculus_389x389_.webp",
      id: 7,
    },
    {
      name: "Nintendo Switch Console",
      img: "https://media.gamestop.com/i/gamestop/Nintendo-Switch-390x390@2x.webp",
      id: 8,
    },
    {
      name: "Xbox Elite Series 2 Controller",
      img: "https://media.gamestop.com/i/gamestop/Xbox-Elite-2-390x390@2x.webp",
      id: 9,
    },
    {
      name: "Xbox Series X Wireless Stereo Headset",
      img: "https://media.gamestop.com/i/gamestop/MicrosoftXboxSeriesXWirelessStereoGamingHeadset_390x390_D3Up.webp",
      id: 3,
    },
    {
      name: "Sony DualSense Wireless Controller",
      img: "https://media.gamestop.com/i/gamestop/DUALSENSE_390x390_D3Up.webp",
      id: 160,
    },
    {
      name: "Star Wars Millennium Falcon Wireless Charger",
      img: "https://media.gamestop.com/i/gamestop/MillenniumFalconWirelessChargerBack_390x390_D3Up.webp",
      id: 10,
    },
    {
      name: "Nintendo Switch Lite Console Blue",
      img: "https://media.gamestop.com/i/gamestop/NintendoSwitch_LiteConsole_Blue_390x390_D3Up.webp",
      id: 11,
    },
    {
      name: "Dungeons and Dragons Dice & Tray",
      img: "https://media.gamestop.com/i/gamestop/Top_Sellers_Dungeons_And_Dragons_Dice_264x264.webp",
      id: 12,
    },
    {
      name: "Monopoly: Animal Crossing New Horizons Edition",
      img: "https://media.gamestop.com/i/gamestop/Top_Sellers_Animal_Crossing_Monopoly_264x264.webp",
      id: 13,
    },
    {
      name: "Star Wars: The Mandalorian Helmet",
      img: "https://media.gamestop.com/i/gamestop/Top_Sellers_Mandalorian_Helmet_264x264.webp",
      id: 142,
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
                      onClick={() => history.push(`/products/${x.id}`)}
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
