import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import styles from "./styles.module.css";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const products = useSelector((state) => state.products);
  const [data, setData] = useState(products);

  const PER_PAGE = 2;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map((product) => <img src={product?.images[0]} />);

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className={styles.App}>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        previousLinkClassName={styles.pagination__link}
        nextLinkClassName={styles.pagination__link}
        disabledClassName={styles.pagination__linkdisabled}
        activeClassName={styles.pagination__linkactive}
      />
      {currentPageData}
    </div>
  );
}
