import React, { useEffect, useState } from "react";

import Pagination from "../../ImageZoom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
// import { SubMenu } from "@szhsin/react-menu";

import styles from "./AllReviewsContainer.module.css";
import "@szhsin/react-menu/dist/index.css";

export default function AllReviewsContainer({ reviews }) {
  const [sortBy, setSortBy] = useState("Most Recent");

  const copy = [...reviews];
  const reversed = copy?.reverse();
  const [arr, setArr] = useState(reviews);

  const setRecent = (e) => {
    e.stopPropagation = true;
    setArr([...reversed]);
    setSortBy("Most Recent");
  };

  const setHighestToLowest = (e) => {
    let highestToLowestRating = copy?.sort(function (a, b) {
      return +b.rating - +a.rating;
    });
    e.stopPropagation = true;
    setArr([...highestToLowestRating]);
    setSortBy("Highest to Lowest Rating");
  };

  const setLowestToHighest = (e) => {
    let lowestToHighestRating = copy?.sort(function (a, b) {
      return a.rating - +b.rating;
    });
    e.stopPropagation = true;
    setArr([...lowestToHighestRating]);
    setSortBy("Lowest to Highest Rating");
  };

  const setMostHelpful = (e) => {
    let mostHelpful = copy?.sort(function (a, b) {
      return +b.likeCount - +a.likeCount;
    });
    e.stopPropagation = true;
    setArr([...mostHelpful]);
    setSortBy("Most Helpful");
  };

  useEffect(() => {

  }, [arr, reviews]);

  return (
    <div className={styles.allReviewsContainer}>
      <div className={styles.topContainer}>
        <div className={styles.topTopContainer}>
          <div className={styles.allReviewsTitle}>All Reviews </div>
        </div>

        <div className={styles.topMiddleContainer}>
          <Menu
            arrow={true}
            align={"center"}
            className={styles.menu}
            menuButton={
              <MenuButton className={styles.button}>
                <span>Sort by:</span> {sortBy}
                <div className={styles.downIcon}>
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </MenuButton>
            }
          >
            <MenuItem onClick={(e) => setRecent(e)} className={styles.menuItem}>
              Most Recent
            </MenuItem>
            <MenuItem
              onClick={(e) => setHighestToLowest(e)}
              className={styles.menuItem}
            >
              Highest to Lowest Rating
            </MenuItem>
            <MenuItem
              onClick={(e) => setLowestToHighest(e)}
              className={styles.menuItem}
            >
              Lowest to Highest Rating
            </MenuItem>
            <MenuItem
              onClick={(e) => setMostHelpful(e)}
              className={styles.menuItem}
            >
              Most Helpful
            </MenuItem>
          </Menu>
        </div>
      </div>

      <Pagination arr={reviews} />
    </div>
  );
}

// Filter
/* <div className={styles.topBottomContainer}>
  <div className={styles.filterIcon}>
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
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    </svg>
  </div> */

//   <div className={styles.filterText}>Filter</div>
// </div>
