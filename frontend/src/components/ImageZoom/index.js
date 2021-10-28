import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import styles from "./styles.module.css";
import IndividualAllReview from "../Product/RatingsandReviews/IndividualAllReview";

export default function Pagination({ arr }) {
  const [currentPage, setCurrentPage] = useState(0);
  const products = useSelector((state) => state.products);
  const [data, setData] = useState(arr);

  const PER_PAGE = 3;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data
    ?.slice(offset, offset + PER_PAGE)
    ?.map((review) => <IndividualAllReview review={review} />);

  console.log(data);

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <>
      <div className={styles.holder}>{currentPageData}</div>
      <ReactPaginate
        previousLabel={"←"}
        nextLabel={"→"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        previousLinkClassName={styles.pagination__link}
        nextLinkClassName={styles.pagination__link}
        disabledClassName={styles.pagination__linkdisabled}
        activeClassName={styles.pagination__linkactive}
      />
    </>
  );
}
