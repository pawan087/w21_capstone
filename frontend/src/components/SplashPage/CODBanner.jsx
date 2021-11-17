import React, { useState } from "react";
import { useHistory } from "react-router";
import ReactPlayer from "react-player";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion } from "framer-motion/dist/framer-motion";

import styles from "./styles.module.css";

export default function CODBanner() {
  const history = useHistory();
  const [arrowUp, setArrowUp] = useState(false);

  const variants = {
    closed: { height: "115px" },
    open: { height: "540px" },
  };

  return (
    <motion.div
      initial={{ height: "0px" }}
      animate={arrowUp ? "open" : "closed"}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 50,
      }}
      variants={variants}
      className={styles.codBanner2}
    >
      <img
        alt="codBanner"
        className={styles.codBannerPic}
        onClick={() => history.push("/p/videogames/cod/0/0")}
        src="https://media.gamestop.com/i/gamestop/COD_Vanguard_GME_HomepageTakeover_DeskTop_1280x100_A_2R1.webp"
      />

      {arrowUp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.openCODBannerContainer}
        >
          <div className={styles.openCODBannerLeftImageContainer}>
            <img
              alt="codBannerImg2"
              className={styles.codLeftImage}
              src="https://media.gamestop.com/i/gamestop/COD_Vanguard_GME_HomepageTakeover_DeskTop_604x340_D_1R1.webp"
            />
          </div>

          <div className={styles.embeddedYoutubeContainer}>
            <ReactPlayer
              width={"660px"}
              height={"375px"}
              url="https://www.youtube.com/watch?v=OQ1CwPhE8KQ"
            />
          </div>
        </motion.div>
      )}

      {!arrowUp && (
        <div
          onClick={() => setArrowUp(!arrowUp)}
          className={styles.arrowDownContainer}
        >
          <FaAngleDown
            style={{
              display: "inline",
              color: "rgb(96,69,68)",
              height: "25px",
              width: "25px",
              cursor: "pointer",
            }}
          />
        </div>
      )}

      {arrowUp && (
        <div
          onClick={() => setArrowUp(!arrowUp)}
          className={styles.arrowDownContainer}
        >
          <FaAngleUp
            style={{
              display: "inline",
              color: "rgb(96,69,68)",
              height: "25px",
              width: "25px",
              cursor: "pointer",
            }}
          />
        </div>
      )}
    </motion.div>
  );
}
