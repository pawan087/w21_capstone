import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

import styles from "./styles.module.css";
import Footer from "../Footer/index";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.outerContainer}
    >
      <div className={styles.pageContainer}>
        <div className={styles.firstContainer}>
          Sorry we could not find the page you were looking for.
        </div>

        <div className={styles.secondContainer}>
          Looking for the latest games? Or maybe even hard-to-find games for{" "}
          <span>Xbox One</span>, <span>PS4</span>, <span>Nintendo Switch</span>,
          or <span>PC</span>? We have them available online and in-store.
        </div>

        <div className={styles.thirdContainer}>
          <div className={styles.third1stContainer}>
            <div className={styles.third1stTopContainer}>
              <img
                alt="picOfCategories"
                src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw8c223603/images/svg-icons/original-box.svg"
              />
            </div>
            <div className={styles.third1stBottomContainer}>Video Games</div>
          </div>

          <div className={styles.third2ndContainer}>
            <div className={styles.third1stTopContainer}>
              <img
                alt="picOfCategories"
                src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw91e822c9/images/svg-icons/drones.svg"
              />
            </div>
            <div className={styles.third1stBottomContainer}>
              Toys & Collectibles
            </div>
          </div>

          <div className={styles.third3rdContainer}>
            <div className={styles.third1stTopContainer}>
              <img
                alt="picOfCategories"
                src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw0460680f/images/svg-icons/smartwatches.svg"
              />
            </div>
            <div className={styles.third1stBottomContainer}>Clothing</div>
          </div>

          <div className={styles.third4thContainer}>
            {" "}
            <div className={styles.third1stTopContainer}>
              <img
                alt="picOfCategories"
                src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw518ef149/images/svg-icons/smartphones.svg"
              />
            </div>
            <div className={styles.third1stBottomContainer}>Electronics</div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </motion.div>
  );
}
