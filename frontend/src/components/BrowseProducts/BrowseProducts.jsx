import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion/dist/framer-motion";
import ReactLoading from "react-loading";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import StarPicker from "react-star-picker";
import ReactPaginate from "react-paginate";

import ProductsRow from "./ProductsRow";
import { setAllRecentlyViewed } from "../../store/recentlyViewed";
import { setAllProducts } from "../../store/products.js";
import { setAllReviews } from "../../store/reviews.js";
import "@szhsin/react-menu/dist/index.css";
import styles from "./styles.module.css";

export default function BrowseProducts() {
  const params = useParams();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const products = useSelector((state) => state.products);

  let videoGameSubCategories = new Set();

  const videoGames = products?.filter((product) => {
    if (product.Category.id === 1) {
      videoGameSubCategories.add(product.Subcategory.name);
    }

    return product.Category.id === 1;
  });

  let videoGameSubcategoriesArr = Array.from(videoGameSubCategories);

  videoGameSubcategoriesArr.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  let videoGamesByFour = [];

  for (let i = 0; i < videoGames.length; i += 4) {
    let arr = [];

    let first = videoGames[i];
    let second = videoGames[i + 1];

    if (second === undefined) {
      break;
    }

    let third = videoGames[i + 2];
    let fourth = videoGames[i + 3];

    arr.push(first);
    arr.push(second);
    arr.push(third);
    arr.push(fourth);

    videoGamesByFour.push(arr);
  }

  const [categoriesArr, setCategoriesArr] = useState([
    "PlayStation 4",
    "Nintendo Switch",
    "Xbox One",
  ]);

  const [load, setLoad] = useState(false);
  const [bool, setBool] = useState(true);
  const [sortBy, setSortBy] = useState("Best Matches");
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  const PER_PAGE = 3;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data
    ?.slice(offset, offset + PER_PAGE)
    ?.map((products, i) => <ProductsRow products={products} key={i} />);

  const pageCount = Math.ceil(data?.length / PER_PAGE);

  // console.log(+params.price === 0);

  const handleSortByBestMatches = () => {
    setSortBy("Best Matches");
  };

  const handleSortByLowToHigh = () => {
    setSortBy("Price Low To High");
  };

  const handleSortByHighToLow = () => {
    setSortBy("Prices High To Low");
  };

  useEffect(() => {
    (async () => {
      if (user) {
        await dispatch(setAllRecentlyViewed(user?.id));
      }

      await dispatch(setAllProducts());
      await dispatch(setAllReviews());

      setLoad(true);
    })();

    setData(videoGamesByFour);
  }, [user?.id, dispatch]);

  if (!load) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.loaderCotnainer}
      >
        <ReactLoading
          type={"spin"}
          color={"rgba(0,0,0,.75)"}
          height={"0px"}
          width={"57.5px"}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.outerContainer}>
        {/* Left Side (sorting) */}
        <div className={styles.leftContainer}>
          <div className={styles.categoryName}>
            <span>Video Games</span>
          </div>

          <div className={styles.categorySelectorContainer}>
            <div className={styles.categorySelectorTitle}>Category</div>

            <div className={styles.mappableCategoriesContainer}>
              {videoGameSubcategoriesArr?.map((category, i) => {
                return (
                  <div className={styles.categoryNames} key={i}>
                    {category}
                  </div>
                );
              })}

              <div className={styles.categorySpacer} />
            </div>
          </div>

          <div className={styles.priceSelectorContainer}>
            <div className={styles.priceSelectorTitle}>Price</div>

            <div className={styles.priceSelectionContainer}>
              <input
                checked={+params.price === 1 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$0 - $10</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                checked={+params.price === 2 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$10 - $25</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                checked={+params.price === 3 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$50 - $75</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                checked={+params.price === 4 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$75 - $100</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                checked={+params.price === 5 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$100 - $200</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                checked={+params.price === 6 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$200 - $300</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                checked={+params.price === 7 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$300+</div>
            </div>

            <div className={styles.priceSpacer} />
          </div>

          <div className={styles.customerRatingSelectorContainer}>
            <div className={styles.customerRatingSelectorTopContainer}>
              <div
                onClick={() => setBool(!bool)}
                className={styles.customerRatingSelectorTitle}
              >
                Customer Rating
              </div>

              {bool && (
                <div onClick={() => setBool(!bool)} className={styles.menuIcon}>
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
                      d="M20 12H4"
                    />
                  </svg>
                </div>
              )}

              {!bool && (
                <div onClick={() => setBool(!bool)} className={styles.menuIcon}>
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
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              )}
            </div>

            {bool && (
              <div className={styles.ratingSelectionOuterContainer}>
                <div className={styles.starRatingSelectionContainer}>
                  <div className={styles.fourStarsSelectionContainer}>
                    <div className={styles.checkBoxContainer}>
                      <div className={styles.checkIconContainer}>
                        {+params.rating === 4 && (
                          <FaCheck
                            style={{
                              display: "inline",
                              color: "black",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        )}
                      </div>
                    </div>

                    <div className={styles.starsContainer}>
                      <div className={styles.stars}>
                        <StarPicker
                          starDimension="10px"
                          disabled={true}
                          value={4}
                          halfStars
                        />
                      </div>
                    </div>

                    <div className={styles.andUpContainer}>& Up</div>
                  </div>
                </div>

                <div className={styles.starRatingSelectionContainer}>
                  <div className={styles.fourStarsSelectionContainer}>
                    <div className={styles.checkBoxContainer}>
                      <div className={styles.checkIconContainer}>
                        {+params.rating === 3 && (
                          <FaCheck
                            style={{
                              display: "inline",
                              color: "black",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        )}
                      </div>
                    </div>

                    <div className={styles.starsContainer}>
                      <div className={styles.stars}>
                        <StarPicker
                          starDimension="10px"
                          disabled={true}
                          value={3}
                          halfStars
                        />
                      </div>
                    </div>

                    <div className={styles.andUpContainer}>& Up</div>
                  </div>
                </div>

                <div className={styles.starRatingSelectionContainer}>
                  <div className={styles.fourStarsSelectionContainer}>
                    <div className={styles.checkBoxContainer}>
                      <div className={styles.checkIconContainer}>
                        {+params.rating === 2 && (
                          <FaCheck
                            style={{
                              display: "inline",
                              color: "black",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        )}
                      </div>
                    </div>

                    <div className={styles.starsContainer}>
                      <div className={styles.stars}>
                        <StarPicker
                          starDimension="10px"
                          disabled={true}
                          value={2}
                          halfStars
                        />
                      </div>
                    </div>

                    <div className={styles.andUpContainer}>& Up</div>
                  </div>
                </div>

                <div className={styles.starRatingSelectionContainer}>
                  <div className={styles.fourStarsSelectionContainer}>
                    <div className={styles.checkBoxContainer}>
                      <div className={styles.checkIconContainer}>
                        {+params.rating === 1 && (
                          <FaCheck
                            style={{
                              display: "inline",
                              color: "black",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        )}
                      </div>
                    </div>

                    <div className={styles.starsContainer}>
                      <div className={styles.stars}>
                        <StarPicker
                          starDimension="10px"
                          disabled={true}
                          value={1}
                          halfStars
                        />
                      </div>
                    </div>

                    <div className={styles.andUpContainer}>& Up</div>
                  </div>
                </div>
              </div>
            )}

            {bool && <div className={styles.customerRatingSpacer} />}
          </div>
        </div>
        {/* End Left Side */}

        {/* Right Side (products) */}
        <div className={styles.rightContainer}>
          <div className={styles.rightTopContainer}>
            <div className={styles.rightSideTitle}>
              {currentPage === 0 ? 1 : ((currentPage * 12) + 1)} - {



                      currentPage === 0 ? 12 : ((currentPage * 12) + 1) + 11






              } of{" "}
              {videoGames.length} Results for <span>"Video Games"</span>
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
                <MenuItem
                  onClick={() => handleSortByBestMatches()}
                  className={styles.menuItem}
                >
                  Best Matches
                </MenuItem>
                <MenuItem
                  onClick={() => handleSortByLowToHigh()}
                  className={styles.menuItem}
                >
                  Price Low To High
                </MenuItem>
                <MenuItem
                  onClick={() => handleSortByHighToLow()}
                  className={styles.menuItem}
                >
                  Price High To Low
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
              nextLinkClassName={styles.next}
              disabledClassName={styles.pagination__linkdisabled}
              activeClassName={styles.pagination__linkactive}
            />
          </div>
        </div>
        {/* End Right Side */}
      </div>

      {/* RECENTLY VIEWED PRODUCTS GO HERE */}
    </motion.div>
  );
}