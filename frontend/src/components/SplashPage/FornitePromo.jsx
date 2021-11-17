import React from "react";
import { useHistory } from "react-router";

import styles from "./styles.module.css";

export default function FornitePromo() {
  const history = useHistory();

  return (
    <div className={styles.fortnitePromoContainer}>
      <img
        alt="fortnitePromo"
        src="https://media.gamestop.com/i/gamestop/Fortnite_ElDurrCode_TandG_1280x200_FullBlade_D_1.webp"
        onClick={() => history.push("/p/videogames/fortnite/0/0")}
      />
    </div>
  );
}
