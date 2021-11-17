import React from "react";
import { useHistory } from "react-router";
import { motion } from "framer-motion/dist/framer-motion";

import styles from "./styles.module.css";

export default function ClothingPromo() {
  const history = useHistory();

  return (
    <>
      <div className={styles.spacer} />

      <div className={styles.cellPhonePromoContainer}>
        <div className={styles.leftBannerContainer}>
          <img
            alt="phoneBannerLeft"
            src="https://media.gamestop.com/i/gamestop/Apparel_VerticalBlade_386x680.webp"
            onClick={() => history.push("/p/clothing/0/0/0")}
          />
        </div>

        <div className={styles.rightPhoneBannerContainer}>
          <div className={styles.rightTopPhoneBannerContainer}>
            <div className={styles.cellPhoneContainer}>
              <div className={styles.cellPhoneImageContainer2}>
                <img
                  src="https://media.gamestop.com/i/gamestop/11166189/GameStop-Logo-Unisex-Joggers?$pdp2x$"
                  alt="cellPhoneImage"
                  onClick={() => history.push("/products/111")}
                />
              </div>

              <div className={styles.clothingPriceContainer}>
                $49.99 <span className={styles.fakeNew}>New</span>
              </div>

              <div
                onClick={() => history.push("/products/111")}
                className={styles.clothingNameContainer}
              >
                GameStop Logo Unisex Joggers
              </div>
            </div>

            <div className={styles.cellPhoneContainer}>
              <div className={styles.cellPhoneImageContainer2}>
                <img
                  src="https://media.gamestop.com/i/gamestop/11151222_black/GameStop-Premium-Logo-Unisex-T-Shirt-black?$pdp$$&fmt=webp"
                  alt="cellPhoneImage"
                  onClick={() => history.push("/products/113")}
                />
              </div>

              <div className={styles.clothingPriceContainer}>
                $29.99 <span className={styles.fakeNew}>New</span>
              </div>

              <div
                onClick={() => history.push("/products/113")}
                className={styles.clothingNameContainer}
              >
                GameStop Premium Logo Unisex T-Shirt
              </div>
            </div>

            <div className={styles.cellPhoneContainer}>
              <div className={styles.cellPhoneImageContainer2}>
                <img
                  src="https://media.gamestop.com/i/gamestop/11166187/GameStop-Rocket-Unisex-Button-Up-Short-Sleeve-Shirt?$pdp2x$"
                  alt="cellPhoneImage"
                  onClick={() => history.push("/products/116")}
                />
              </div>

              <div className={styles.clothingPriceContainer}>
                $69.99 <span className={styles.fakeNew}>New</span>
              </div>

              <div
                onClick={() => history.push("/products/116")}
                className={styles.clothingNameContainer}
              >
                GameStop Rocket Unisex Button Up Short Sleeve Shirt
              </div>
            </div>
          </div>

          <div className={styles.rightTopPhoneBannerContainer}>
            <div className={styles.cellPhoneContainer}>
              <div className={styles.cellPhoneImageContainer2}>
                <img
                  src="https://media.gamestop.com/i/gamestop/11166186/GameStop-Logo-Unisex-Hooded-Sweatshirt?$pdp$$&fmt=webp"
                  alt="cellPhoneImage"
                  onClick={() => history.push("/products/115")}
                />
              </div>

              <div className={styles.clothingPriceContainer}>
                $52.99 <span className={styles.fakeNew}>New</span>
              </div>

              <div
                onClick={() => history.push("/products/115")}
                className={styles.clothingNameContainer}
              >
                GameStop Logo Unisex Hooded Sweatshirt
              </div>
            </div>

            <div className={styles.cellPhoneContainer}>
              <div className={styles.cellPhoneImageContainer2}>
                <img
                  src="https://media.gamestop.com/i/gamestop/11166665/GameStop-Power-To-The-Players-Unisex-T-Shirt?$pdp$$&fmt=webp"
                  alt="cellPhoneImage"
                  onClick={() => history.push("/products/118")}
                />
              </div>

              <div className={styles.clothingPriceContainer}>
                $29.99 <span className={styles.fakeNew}>New</span>
              </div>

              <div
                onClick={() => history.push("/products/118")}
                className={styles.clothingNameContainer}
              >
                GameStop Power To The Players Unisex T-Shirt
              </div>
            </div>

            <div className={styles.cellPhoneContainer}>
              <motion.div
                /* whileHover={{ filter: `invert()` }} */
                className={styles.cellPhoneImageContainer2}
              >
                <img
                  src="https://media.gamestop.com/i/gamestop/11166184/GameStop-Logo-Unisex-Beanie?$pdp$$&fmt=webp"
                  alt="cellPhoneImage"
                  onClick={() => history.push("/products/121")}
                />
              </motion.div>

              <div className={styles.clothingPriceContainer}>
                $14.99 <span className={styles.fakeNew}>New</span>
              </div>

              <div
                onClick={() => history.push("/products/121")}
                className={styles.clothingNameContainer}
              >
                GameStop Logo Unisex Beanie
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
