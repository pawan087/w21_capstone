import React from "react";
import { useHistory } from "react-router";

import styles from "./styles.module.css";

export default function SubBanner() {
  const history = useHistory();

  return (
    <div className={styles.subBannerContainer}>
      <div className={styles.newReleasesContainer}>
        <img
          alt="newRelPic"
          className={styles.subBannerPic}
          onClick={() => history.push("/p/videogames/0/0/0")}
          src="https://media.gamestop.com/i/gamestop/NewReleases_596x400_D2ColumnFeature_4.webp"
          /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s03.webp" */
        />
        <div
          onClick={() => history.push("/p/videogames/0/0/0")}
          className={styles.subBannerPicCaptions}
        >
          <div>New Releases</div>
          <div className={styles.subBannerPicSubtitle}>Shop Now</div>
        </div>
      </div>
      <div className={styles.codSubBannerContainer}>
        {" "}
        <img
          className={styles.subBannerPic}
          alt="newRelPic"
          onClick={() => history.push("/p/videogames/cod/0/0")}
          src="https://media.gamestop.com/i/gamestop/CODVanguard_596x400_D2ColumnFeature_1.webp"
          /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s04.webp" */
        />
        <div
          onClick={() => history.push("/p/videogames/cod/0/0")}
          className={styles.subBannerPicCaptions}
        >
          <div>Call of Duty: Vanguard</div>
          <div className={styles.subBannerPicSubtitle}>Shop Now</div>
        </div>
      </div>
    </div>
  );
}
