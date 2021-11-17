import React from "react";

import styles from "./styles.module.css";

export default function FakeTopDeals() {
  return (
    <div className={styles.fakeDealsContainer}>
      <img
        src="https://media.gamestop.com/i/gamestop/Deals-Blade-1280x200_2x.webp"
        alt="fakeDealsBanner"
      />
    </div>
  );
}
