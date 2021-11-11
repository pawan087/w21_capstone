import React from "react";

import styles from "./styles.module.css";

export default function UpcomingVideoGamePromo() {
  return (
    <div className={styles.subBannerContainer2}>
      <div className={styles.newReleasesContainer}>
        <img
          alt="newRelPic"
          className={styles.subBannerPic}
          src="https://media.gamestop.com/i/gamestop/PokemonGWP_596x400_D2ColumnFeature_1.webp"
        />
        <div className={styles.subBannerPicCaptions}>
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
        />
        <div className={styles.subBannerPicCaptions}>
          <div>Shin Megami Tensei V</div>
          <div className={styles.subBannerPicSubtitle}>Pre-Order Now</div>
        </div>
      </div>
    </div>
  );
}
