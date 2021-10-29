import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import IndividualAllReview from "../../Product/RatingsandReviews/IndividualAllReview";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
// import { SubMenu } from "@szhsin/react-menu";

import styles from "./AllReviewsContainer.module.css";
import "@szhsin/react-menu/dist/index.css";

export default function AllReviewsContainer({ reviews }) {
  const [sortBy, setSortBy] = useState("Most Recent");
  const [currentPage, setCurrentPage] = useState(0);

  let copy = [...reviews];
  const reversed = copy?.reverse();

  const [data, setData] = useState([]);

  const PER_PAGE = 3;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    window.scrollTo({
      top: 1250,
      left: 0,
      behavior: "smooth",
    });
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data
    ?.slice(offset, offset + PER_PAGE)
    ?.map((review, i) => <IndividualAllReview key={i} review={review} />);

  const pageCount = Math.ceil(data?.length / PER_PAGE);

  const setRecent = (e) => {
    e.stopPropagation = true;
    setData([...reversed]);
    setSortBy("Most Recent");
  };

  const setHighestToLowest = (e) => {
    let highestToLowestRating = copy?.sort(function (a, b) {
      return +b.rating - +a.rating;
    });

    e.stopPropagation = true;
    setData([...highestToLowestRating]);
    setSortBy("Highest to Lowest Rating");
  };

  const setLowestToHighest = (e) => {
    let lowestToHighestRating = copy?.sort(function (a, b) {
      return a.rating - +b.rating;
    });
    e.stopPropagation = true;
    // setArr([...lowestToHighestRating]);
    setData([...lowestToHighestRating]);
    setSortBy("Lowest to Highest Rating");
  };

  const setMostHelpful = (e) => {
    let mostHelpful = copy?.sort(function (a, b) {
      return +b.likeCount - +a.likeCount;
    });

    e.stopPropagation = true;
    setData([...mostHelpful]);

    setSortBy("Most Helpful");
  };

  useEffect(() => {
    setData(reversed);
    setSortBy("Most Recent");
  }, [reviews]);

  // useEffect(() => {

  // }, [reversed]);

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

      <div>
        <div className={styles.holder}>{currentPageData}</div>
        <ReactPaginate
          previousLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          }
          nextLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          }
          marginPagesDisplayed={500}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          previousLinkClassName={styles.pagination__link}
          nextLinkClassName={styles.pagination__link}
          disabledClassName={styles.pagination__linkdisabled}
          activeClassName={styles.pagination__linkactive}
        />
      </div>
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
