import React from "react";
import { useHistory } from "react-router";

import styles from "./styles.module.css";

export default function CODApparelPromo() {
  const history = useHistory();

  return (
    <div className={styles.codClothingPromoContainer}>
      <img
        alt="codClothingPromoPic"
        src="https://media.gamestop.com/i/gamestop/COD_Aprl_1280x200_FullBlade_D.webp"
        onClick={() => history.push("/p/videogames/cod/0/0")}
      />
    </div>
  );
}
