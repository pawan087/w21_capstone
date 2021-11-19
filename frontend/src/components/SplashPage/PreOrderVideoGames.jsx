import React from "react";
import { useHistory } from "react-router";
import Carousel from "react-grid-carousel";

import styles from "./styles.module.css";

export default function PreOrderVideoGames() {
  const history = useHistory();

  let topSellers = [
    {
      name: "11.12.21",
      img: "https://media.gamestop.com/i/gamestop/ShinMegamiTenseiV_224x224_D5Up_1.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s22.webp" */
      id: 84,
    },
    {
      name: "11.16.21",
      img: "https://media.gamestop.com/i/gamestop/StarWars_JKCollection_224x224_5Up_D.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s23.webp" */
    },
    {
      name: "11.16.21",
      img: "https://media.gamestop.com/i/gamestop/StarWars_RacerComCombo_224x224_5Up_D.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s24.webp" */
    },
    {
      name: "11.16.21",
      img: "https://media.gamestop.com/i/gamestop/SmurfsMissionVileaf_224x224_D5Up.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s25.webp" */
    },
    {
      name: "11.19.21",
      img: "https://media.gamestop.com/i/gamestop/Battlefield2042_224x224_KeyArtSquare_5Up_D.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s26.webp" */
    },
    {
      name: "11.19.21",
      img: "https://media.gamestop.com/i/gamestop/PokemonBrilliantShining_PO_224x224_.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s27.webp" */
      id: 0,
    },
    {
      name: "11.19.21",
      img: "https://media.gamestop.com/i/gamestop/Kena_GIMP_224x224_5Up_D.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s28.webp" */
      id: 0,
    },
    {
      name: "11.22.21",
      img: "https://media.gamestop.com/i/gamestop/FarmingSimulator22_224x224_D5Up.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s29.webp" */
      id: 0,
    },
    {
      name: "11.23.21",
      img: "https://media.gamestop.com/i/gamestop/DisneyClassicCollection_224x224_D5Up.webp",
      /* "https://s3.console.aws.amazon.com/s3/object/gamestopclonebucket?region=us-west-1&prefix=s30.webp" */
      id: 0,
    },
    {
      name: "12.08.21",
      img: "https://media.gamestop.com/i/gamestop/224x224_Halo.webp",
      /* "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/s31.webp" */
      id: 0,
    },
  ];

  const handleClick = (x, i) => {
    if (i === 0) {
      history.push(`/products/${x.id}`);
    }

    if (i === 1) {
      history.push(`/p/videogames/starwars/0/0`);
    }

    if (i === 2) {
      history.push(`/p/videogames/starwars2/0/0`);
    }

    if (i === 3) {
      history.push(`/p/videogames/smurfs/0/0`);
    }

    if (i === 4) {
      history.push("/p/videogames/battlefield/0/0");
    }

    if (i === 5) {
      history.push("/products/123");
    }

    if (i === 6) {
      history.push("/p/videogames/kena/0/0");
    }

    if (i === 7) {
      history.push("/products/98");
    }

    if (i === 8) {
      history.push("/p/videogames/disney/0/0");
    }

    if (i === 9) {
      history.push("/products/141");
    }

    return;
  };

  return (
    <div className={styles.topSellersContainer}>
      <div className={styles.topSellersTitle}>Pre-Order Video Games</div>

      <div className={styles.topReviewsMiddleContainer}>
        <div className={styles.carnival}>
          <Carousel shoDots cols={5} rows={1} gap={0} loop>
            {topSellers?.map((x, i) => {
              return (
                <Carousel.Item className={styles.item} key={i}>
                  <div className={styles.topSellerPicContainer}>
                    <img
                      className={styles.topSellerPic}
                      alt="topSellerPic"
                      src={x.img}
                      onClick={() => handleClick(x, i)}
                    />
                  </div>
                  <div
                    onClick={() => handleClick(x, i)}
                    className={styles.itemName}
                  >
                    {x.name}
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
