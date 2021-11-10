import React from "react";

import styles from "./styles.module.css";

export default function SubBanner() {
  return (
    <div className={styles.subBannerContainer}>
      <div className={styles.newReleasesContainer}>
        <img
          alt="newRelPic"
          className={styles.subBannerPic}
          src="https://media.gamestop.com/i/gamestop/NewReleases_596x400_D2ColumnFeature_4.webp"
        />
        <div className={styles.subBannerPicCaptions}>
          <div>New Releases</div>
          <div className={styles.subBannerPicSubtitle}>Shop Now</div>
        </div>
      </div>
      <div className={styles.codSubBannerContainer}>
        {" "}
        <img
          className={styles.subBannerPic}
          alt="newRelPic"
          src="https://media.gamestop.com/i/gamestop/CODVanguard_596x400_D2ColumnFeature_1.webp"
        />
        <div className={styles.subBannerPicCaptions}>
          <div>Call of Duty: Vanguard</div>
          <div className={styles.subBannerPicSubtitle}>Shop Now</div>
        </div>
      </div>
    </div>
  );
}
