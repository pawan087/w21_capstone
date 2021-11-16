import React from "react";
import { useHistory } from "react-router";

import styles from "./styles.module.css";

export default function TopBrands() {
  const history = useHistory();

  return (
    <div className={styles.topBrandsContainer}>
      <div className={styles.topBrandsTitle}>Top Brands</div>

      <div className={styles.topBrandsMainContainer}>
        {/* Top */}
        <div className={styles.topBrandsRowContainer}>
          <div className={styles.topBrandTile}>
            <img
              className={styles.topBrandTileImg}
              src="https://media.gamestop.com/i/gamestop/Xbox-Logo-224x126@2x.webp"
              alt="topBrandTile"
              onClick={() => history.push("/p/videogames/xbox/0/0")}
            />
          </div>

          <div className={styles.topBrandTile}>
            <img
              className={styles.topBrandTileImg}
              src="https://media.gamestop.com/i/gamestop/Nintendo-Logo-224x126@2x_2.webp"
              alt="topBrandTile"
              onClick={() => history.push("/p/videogames/switch/0/0")}
            />
          </div>

          <div className={styles.topBrandTile}>
            <img
              className={styles.topBrandTileImg}
              src="https://media.gamestop.com/i/gamestop/PlayStation-Logo-224x126@2x.webp"
              alt="topBrandTile"
              onClick={() => history.push("/p/videogames/playstation/0/0")}
            />
          </div>

          <div className={styles.topBrandTile}>
            <img
              className={styles.topBrandTileImg}
              src="https://media.gamestop.com/i/gamestop/Funko-Logo-224x126@2x.webp"
              alt="topBrandTile"
            />
          </div>

          <div className={styles.topBrandTile}>
            <img
              className={styles.topBrandTileImg}
              src="https://media.gamestop.com/i/gamestop/Oculus-Logo-224x126@2x.webp"
              alt="topBrandTile"
              onClick={() => history.push("/products/7")}
            />
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.topBrandsRowContainer}>
          <div className={styles.topBrandTile}>
            <img
              className={styles.topBrandTileImg}
              src="https://media.gamestop.com/i/gamestop/Hasbro-Logo-224x126@2x.webp"
              alt="topBrandTile"
              onClick={() => history.push("/p/toysgames/hasbro/0/0")}
            />
          </div>

          <div className={styles.topBrandTile}>
            <img
              className={styles.topBrandTileImg}
              src="https://media.gamestop.com/i/gamestop/224x126_Pokemon_Logo.webp"
              alt="topBrandTile"
              onClick={() => history.push("/p/toysgames/pokemon/0/0")}
            />
          </div>

          <div className={styles.topBrandTile}>
            <img
              className={styles.topBrandTileImg}
              src="https://media.gamestop.com/i/gamestop/Razer-Logo-224x126@2x.webp"
              alt="topBrandTile"
              onClick={() => history.push("/p/consoles/razer/0/0")}
            />
          </div>

          <div className={styles.topBrandTile}>
            <img
              className={styles.topBrandTileImg}
              src="https://media.gamestop.com/i/gamestop/Logitech-Logo-224x126@2x.webp"
              alt="topBrandTile"
              onClick={() => history.push("/products/30")}
            />
          </div>

          <div className={styles.topBrandTile}>
            <img
              className={styles.topBrandTileImg}
              src="https://media.gamestop.com/i/gamestop/apple_logo_224x126_D.webp"
              alt="topBrandTile"
              onClick={() => history.push("/p/electronics/iphone/0/0")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
