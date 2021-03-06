import React from "react";
import { useHistory } from "react-router";
import { motion } from "framer-motion/dist/framer-motion";

import styles from "./styles.module.css";

export default function ConsolesCard() {
  const history = useHistory();

  return (
    <>
      <div className={styles.spacer} />

      <div className={styles.cellPhonePromoContainer}>
        <div className={styles.rightPhoneBannerContainer}>
          <div className={styles.rightTopPhoneBannerContainer}>
            <div
              onClick={() => history.push("/products/99")}
              className={styles.cellPhoneContainer}
            >
              <div className={styles.consoleImageContainer}>
                <img
                  src="https://media.gamestop.com/i/gamestop/11095775/Nintendo-Switch-Lite-Console-Turquoise?$pdp$$&fmt=webp"
                  alt="cellPhoneImage"
                />
              </div>

              <div className={styles.clothingPriceContainer}>
                $184.99 <span className={styles.fakeNew}>Pre-Owned</span>
              </div>

              <div className={styles.consoleNameContainer}>
                Nintendo Switch Lite Console Turquoise
              </div>
            </div>

            <div
              onClick={() => history.push("/products/100")}
              className={styles.cellPhoneContainer}
            >
              <div className={styles.consoleImageContainer}>
                <img
                  src="https://media.gamestop.com/i/gamestop/11095821/Nintendo-Switch-Console-Gray-Joy-Con?$pdp$$&fmt=webp"
                  alt="cellPhoneImage"
                />
              </div>

              <div className={styles.clothingPriceContainer}>
                $279.99 <span className={styles.fakeNew}>Pre-Owned</span>
              </div>

              <div className={styles.consoleNameContainer}>
                Nintendo Switch Console Gray Joy-Con
              </div>
            </div>

            <div
              onClick={() => history.push("/products/101")}
              className={styles.cellPhoneContainer}
            >
              <div className={styles.consoleImageContainer}>
                <img
                  src="https://media.gamestop.com/i/gamestop/10138875/Microsoft-Xbox-One-S-1TB-Console-White?$pdp2x$"
                  alt="cellPhoneImage"
                />
              </div>

              <div className={styles.clothingPriceContainer}>
                $289.99 <span className={styles.fakeNew}>Pre-Owned</span>
              </div>

              <div className={styles.consoleNameContainer}>
                Microsoft Xbox One S 1TB
              </div>
            </div>
          </div>

          <div className={styles.rightTopPhoneBannerContainer}>
            <div
              onClick={() => history.push("/products/102")}
              className={styles.cellPhoneContainer}
            >
              <div className={styles.consoleImageContainer}>
                <img
                  src="https://media.gamestop.com/i/gamestop/10134659/Sony-PlayStation-4-Pro-1TB-Console-Black?$pdp2x$"
                  alt="cellPhoneImage"
                />
              </div>

              <div className={styles.clothingPriceContainer}>
                $389.99 <span className={styles.fakeNew}>Pre-Owned</span>
              </div>

              <div className={styles.consoleNameContainer}>
                Sony PlayStation 4 Pro 1TB
              </div>
            </div>

            <div
              onClick={() => history.push("/products/104")}
              className={styles.cellPhoneContainer}
            >
              <div className={styles.consoleImageContainer}>
                <img
                  src="https://media.gamestop.com/i/gamestop/10115705/Microsoft-Xbox-One-500GB-Console-Black-with-Original-Controller?$pdp$$&fmt=webp"
                  alt="cellPhoneImage"
                />
              </div>

              <div className={styles.clothingPriceContainer}>
                $239.99 <span className={styles.fakeNew}>Pre-Owned</span>
              </div>

              <div className={styles.consoleNameContainer}>
                Microsoft Xbox One 500GB
              </div>
            </div>

            <div
              onClick={() => history.push("/products/103")}
              className={styles.cellPhoneContainer}
            >
              <motion.div
                /* whileHover={{ filter: `invert()` }} */
                className={styles.consoleImageContainer}
              >
                <img
                  src="https://media.gamestop.com/i/gamestop/10174659/Microsoft-Xbox-One-X-1TB-Console-Black?$pdp$$&fmt=webp"
                  alt="cellPhoneImage"
                />
              </motion.div>

              <div className={styles.clothingPriceContainer}>
                $389.99 <span className={styles.fakeNew}>Pre-Owned</span>
              </div>

              <div className={styles.consoleNameContainer}>
                Microsoft Xbox One X 1TB
              </div>
            </div>
          </div>
        </div>

        <div className={styles.leftBannerContainer}>
          <img
            alt="phoneBannerLeft"
            src="https://media.gamestop.com/i/gamestop/Pre_Owned_Consoles_VerticalBlade_D.webp"
            /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s34.webp" */
            onClick={() => history.push("/p/consoles/0/0/0")}
          />
        </div>
      </div>
    </>
  );
}
