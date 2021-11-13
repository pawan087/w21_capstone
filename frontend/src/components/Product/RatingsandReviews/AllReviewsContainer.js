import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion/dist/framer-motion";

import IndividualAllReview from "../../Product/RatingsandReviews/IndividualAllReview";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

import styles from "./AllReviewsContainer.module.css";
import "@szhsin/react-menu/dist/index.css";

export default function AllReviewsContainer({ reviews }) {
  const [sortBy, setSortBy] = useState("Most Recent");
  const [currentPage, setCurrentPage] = useState(0);

  let highestToLowestRating = [...reviews];
  let lowestToHighestRating = [...reviews];
  let mostHelpful = [...reviews];
  let recent = [...reviews];

  recent.sort(function (a, b) {
    return b.id - a.id;
  });

  highestToLowestRating.sort(function (a, b) {
    return +b.rating - +a.rating;
  });

  lowestToHighestRating.sort(function (a, b) {
    return +a.rating - +b.rating;
  });

  mostHelpful?.sort(function (a, b) {
    return +b.likeCount - +a.likeCount;
  });

  const PER_PAGE = 3;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    window.scrollTo({
      top: 1050,
      left: 0,
      behavior: "smooth",
    });
  }
  const offset = currentPage * PER_PAGE;

  const currentPageData = recent
    ?.slice(offset, offset + PER_PAGE)
    ?.map((review, i) => <IndividualAllReview key={i} review={review} />);

  const currentPageData2 = highestToLowestRating
    ?.slice(offset, offset + PER_PAGE)
    ?.map((review, i) => <IndividualAllReview key={i} review={review} />);

  const currentPageData3 = lowestToHighestRating
    ?.slice(offset, offset + PER_PAGE)
    ?.map((review, i) => <IndividualAllReview key={i} review={review} />);

  const currentPageData4 = mostHelpful
    ?.slice(offset, offset + PER_PAGE)
    ?.map((review, i) => <IndividualAllReview key={i} review={review} />);

  const pageCount = Math.ceil(recent?.length / PER_PAGE);
  const pageCount2 = Math.ceil(highestToLowestRating?.length / PER_PAGE);
  const pageCount3 = Math.ceil(lowestToHighestRating?.length / PER_PAGE);
  const pageCount4 = Math.ceil(mostHelpful?.length / PER_PAGE);

  const setRecent = (e) => {
    e.stopPropagation = true;
    setSortBy("Most Recent");
    setCurrentPage(0);
  };

  const setHighestToLowest = (e) => {
    e.stopPropagation = true;
    setSortBy("Highest to Lowest Rating");
    setCurrentPage(0);
  };

  const setLowestToHighest = (e) => {
    e.stopPropagation = true;
    setSortBy("Lowest to Highest Rating");
    setCurrentPage(0);
  };

  const setMostHelpful = (e) => {
    e.stopPropagation = true;
    setSortBy("Most Helpful");
    setCurrentPage(0);
  };

  useEffect(() => {
    setSortBy("Most Recent");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.allReviewsContainer}
    >
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

      {
        /* MOST RECENT */
        sortBy === "Most Recent" && (
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
        )
      }

      {
        /* HIGHEST TO LOWEST RATING */
        sortBy === "Highest to Lowest Rating" && (
          <div>
            <div className={styles.holder}>{currentPageData2}</div>
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
              pageCount={pageCount2}
              onPageChange={handlePageClick}
              containerClassName={styles.pagination}
              previousLinkClassName={styles.pagination__link}
              nextLinkClassName={styles.pagination__link}
              disabledClassName={styles.pagination__linkdisabled}
              activeClassName={styles.pagination__linkactive}
            />
          </div>
        )
      }

      {
        /* LOWEST TO HIGHEST RATING */
        sortBy === "Lowest to Highest Rating" && (
          <div>
            <div className={styles.holder}>{currentPageData3}</div>
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
              pageCount={pageCount3}
              onPageChange={handlePageClick}
              containerClassName={styles.pagination}
              previousLinkClassName={styles.pagination__link}
              nextLinkClassName={styles.pagination__link}
              disabledClassName={styles.pagination__linkdisabled}
              activeClassName={styles.pagination__linkactive}
            />
          </div>
        )
      }

      {
        /* MOST HELPFUL */
        sortBy === "Most Helpful" && (
          <div>
            <div className={styles.holder}>{currentPageData4}</div>
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
              pageCount={pageCount4}
              onPageChange={handlePageClick}
              containerClassName={styles.pagination}
              previousLinkClassName={styles.pagination__link}
              nextLinkClassName={styles.pagination__link}
              disabledClassName={styles.pagination__linkdisabled}
              activeClassName={styles.pagination__linkactive}
            />
          </div>
        )
      }
    </motion.div>
  );
}
