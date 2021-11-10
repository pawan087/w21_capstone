import React from "react";
// import { motion } from "framer-motion/dist/framer-motion";

import styles from "./styles.module.css";

export default function CellPhonePromo() {
  return (
    <div className={styles.cellPhonePromoContainer}>
      <div className={styles.leftBannerContainer}>
        <img
          alt="phoneBannerLeft"
          src="https://media.gamestop.com/i/gamestop/Certified_Refurb_VerticalBlade_D.webp"
        />
      </div>

      <div className={styles.rightPhoneBannerContainer}>
        <div className={styles.rightTopPhoneBannerContainer}>
          <div className={styles.cellPhoneContainer}>
            <div className={styles.cellPhoneImageContainer}>
              <img
                src="https://media.gamestop.com/i/gamestop/11160384_blue/iPhone-12-Pro-Max-128GB---Unlocked-blue?$pdp$&fmt=webp"
                alt="cellPhoneImage"
              />
            </div>

            <div className={styles.cellPhonePriceContainer}>
              $878.99 <span className={styles.strikeout}>$999.00</span>
            </div>

            <div className={styles.fakeRefurbished}>Certified Refurbished</div>

            <div className={styles.cellPhoneNameContainer}>
              iPhone 12 Pro Max 128GB - Unlocked
            </div>
          </div>

          <div className={styles.cellPhoneContainer}>
            <div className={styles.cellPhoneImageContainer}>
              <img
                src="https://media.gamestop.com/i/gamestop/11114626_silver/iPhone-12-Pro-256GB---Unlocked-silver?$pdp$$&fmt=webp"
                alt="cellPhoneImage"
              />
            </div>

            <div className={styles.cellPhonePriceContainer}>
              $828.99 <span className={styles.strikeout}>$999.00</span>
            </div>

            <div className={styles.fakeRefurbished}>Certified Refurbished</div>

            <div className={styles.cellPhoneNameContainer}>
              iPhone 12 Pro 256GB - Unlocked
            </div>
          </div>

          <div className={styles.cellPhoneContainer}>
            <div className={styles.cellPhoneImageContainer}>
              <img
                src="https://media.gamestop.com/i/gamestop/11114625_silver/iPhone-12-Pro-128GB---Unlocked-silver?$pdp2x$"
                alt="cellPhoneImage"
              />
            </div>

            <div className={styles.cellPhonePriceContainer}>
              $773.99 <span className={styles.strikeout}>$899.00</span>
            </div>

            <div className={styles.fakeRefurbished}>Certified Refurbished</div>

            <div className={styles.cellPhoneNameContainer}>
              iPhone 12 Pro 128GB - Unlocked
            </div>
          </div>
        </div>

        <div className={styles.rightTopPhoneBannerContainer}>
          <div className={styles.cellPhoneContainer}>
            <div className={styles.cellPhoneImageContainer}>
              <img
                src="https://media.gamestop.com/i/gamestop/11160385_blue/iPhone-12-Pro-Max-256GB---Unlocked-blue?$pdp$$&fmt=webp"
                alt="cellPhoneImage"
              />
            </div>

            <div className={styles.cellPhonePriceContainer}>
              $968.99 <span className={styles.strikeout}>$1,099.00</span>
            </div>

            <div className={styles.fakeRefurbished}>Certified Refurbished</div>

            <div className={styles.cellPhoneNameContainer}>
              iPhone 12 Pro Max 256GB - Unlocked
            </div>
          </div>

          <div className={styles.cellPhoneContainer}>
            <div className={styles.cellPhoneImageContainer}>
              <img
                src="https://media.gamestop.com/i/gamestop/11098256_silver/iPhone-11-Pro-Max-256GB---Unlocked-silver?$pdp2x$"
                alt="cellPhoneImage"
              />
            </div>

            <div className={styles.cellPhonePriceContainer}>
              $679.99 <span className={styles.strikeout}>$1,199.00</span>
            </div>

            <div className={styles.fakeRefurbished}>Certified Refurbished</div>

            <div className={styles.cellPhoneNameContainer}>
              iPhone 11 Pro Max 256GB - Unlocked
            </div>
          </div>

          <div className={styles.cellPhoneContainer}>
            <div className={styles.cellPhoneImageContainer}>
              <img
                src="https://media.gamestop.com/i/gamestop/11114637_blue/iPhone-12-Pro-Max-256GB---ATT-blue?$pdp2x$"
                alt="cellPhoneImage"
              />
            </div>

            <div className={styles.cellPhonePriceContainer}>
              $898.99 <span className={styles.strikeout}>$1,099.00</span>
            </div>

            <div className={styles.fakeRefurbished}>Certified Refurbished</div>

            <div className={styles.cellPhoneNameContainer}>
              iPhone 12 Pro Max 256GB - ATT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
