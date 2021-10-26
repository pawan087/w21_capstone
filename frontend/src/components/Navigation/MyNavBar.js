import React from "react";
import styles from "./Navigation.module.css";
import SearchComponent from "../Search";

export default function MyNavBar() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftSection}>
        <div className={styles.leftMenuButtonContainer}>
          <div className={styles.leftMenuButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <div className={styles.leftMenuLabel}>Shop</div>
        </div>

        <div className={styles.navLogoContainer}>
          <div className={styles.navLogo}>
            <img
              src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw27bacb5e/images/svg-icons/logo-gs-2.svg"
              alt="logo"
            ></img>
          </div>
        </div>
      </div>

      <div className={styles.middleSection}>
        <div className={styles.searchBarContainer}>
          <SearchComponent />
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.rightMenuButtonContainer}>
          <div className={styles.userInitials}>PC</div>

          <div className={styles.accountLabel}>Account</div>
        </div>

        <div className={styles.cartButtonContainer}>
          <div className={styles.carButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>

          <div className={styles.numOfCartItems}>1</div>
        </div>
      </div>
    </div>
  );
}
