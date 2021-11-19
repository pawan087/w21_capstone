import React from "react";
import { useHistory } from "react-router";

import styles from "./styles.module.css";

export default function UpcomingVideoGamePromo() {
  const history = useHistory();

  return (
    <div className={styles.subBannerContainer2}>
      <div className={styles.newReleasesContainer}>
        <img
          alt="newRelPic"
          className={styles.subBannerPic}
          src="https://media.gamestop.com/i/gamestop/PokemonGWP_596x400_D2ColumnFeature_1.webp"
          /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s20.webp" */
          onClick={() => history.push("/products/123")}
        />

        <div
          onClick={() => history.push("/products/123")}
          className={styles.subBannerPicCaptions}
        >
          <div>Pokémon Brilliant Diamond & Shinning Pearl Double Pack</div>

          <div className={styles.subBannerPicSubtitle}>Pre-Order Now</div>
        </div>
      </div>

      <div className={styles.codSubBannerContainer}>
        {" "}
        <img
          className={styles.subBannerPic}
          alt="newRelPic"
          src="https://media.gamestop.com/i/gamestop/ShinMegamiTenseiV_596x400_D2ColumnFeature.webp"
          /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s21.webp" */
          onClick={() => history.push("/products/84")}
        />

        <div
          onClick={() => history.push("/products/84")}
          className={styles.subBannerPicCaptions}
        >
          <div>Shin Megami Tensei V</div>
          
          <div className={styles.subBannerPicSubtitle}>Pre-Order Now</div>
        </div>
      </div>
    </div>
  );
}
