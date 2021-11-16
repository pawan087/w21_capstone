import React from "react";
// import { useHistory } from "react-router";

import styles from "./styles.module.css";

export default function PromotionalCard1() {
  // const history = useHistory();

  // onClick={() => history.push("/p/electronics/iphone/0/0")}

  return (
    <div className={styles.promoCard1Container}>
      <div className={styles.leftPromoCard}>
        <img
          alt="promoCard"
          className={styles.promoCardPic}
          src="https://media.gamestop.com/i/gamestop/Trade_Apple_Half_Blade_628x200.webp?w=1280"
        />
      </div>

      <div className={styles.rightPromoCard}>
        <img
          alt="promoCard"
          className={styles.promoCardPic}
          src="https://media.gamestop.com/i/gamestop/GiftHub_628x200_Header_M_v2.webp?w=1280"
        />
      </div>
    </div>
  );
}
