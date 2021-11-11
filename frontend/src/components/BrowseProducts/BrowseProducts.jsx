import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion/dist/framer-motion";
import ReactLoading from "react-loading";
import StarPicker from "react-star-picker";

import { setAllRecentlyViewed } from "../../store/recentlyViewed";
import { setAllProducts } from "../../store/products.js";
import { setAllReviews } from "../../store/reviews.js";
import styles from "./styles.module.css";

export default function BrowseProducts() {
  const params = useParams();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const [load, setLoad] = useState(false);
  const [bool, setBool] = useState(true);
  const [categoriesArr, setCategoriesArr] = useState([
    "PlayStation 4",
    "Nintendo Switch",
    "Xbox One",
  ]);
  const [defaultOption, setDefaultOption] = useState(false);

  useEffect(() => {
    (async () => {
      if (user) {
        await dispatch(setAllRecentlyViewed(user?.id));
      }

      await dispatch(setAllProducts());
      await dispatch(setAllReviews());

      setLoad(true);
    })();
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
    <>
      <div className={styles.outerContainer}>
        {/* Left Side (sorting) */}
        <div className={styles.leftContainer}>
          <div className={styles.categoryName}>Video Games</div>

          <div className={styles.categorySelectorContainer}>
            <div className={styles.categorySelectorTitle}>Category</div>

            <div className={styles.mappableCategoriesContainer}>
              {categoriesArr?.map((category, i) => {
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
              <input checked={true} className={styles.fakeRadio} type="radio" />

              <div className={styles.priceSelection}>$0 - $10</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                checked={false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$10 - $25</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                checked={false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$50 - $75</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                checked={false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$75 - $100</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                checked={false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$100 - $200</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                checked={false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$200 - $300</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                checked={false}
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
                    {true && (
                      <div className={styles.fifthContainer}>
                        <div className={styles.fifthLeftContainer}>
                          <div
                            className={
                              defaultOption
                                ? styles.checkBoxContainer
                                : styles.checkBoxContainer2
                            }
                          >
                            <div
                              onClick={() => setDefaultOption(!defaultOption)}
                              className={
                                !defaultOption
                                  ? styles.checkIconContainer
                                  : styles.checkIconContainer2
                              }
                            >
                              {defaultOption && (
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

                            <div
                              onClick={() => setDefaultOption(!defaultOption)}
                              className={styles.hiddenButton}
                            />
                          </div>
                        </div>
                      </div>
                    )}

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
                    {true && (
                      <div className={styles.fifthContainer}>
                        <div className={styles.fifthLeftContainer}>
                          <div
                            className={
                              defaultOption
                                ? styles.checkBoxContainer
                                : styles.checkBoxContainer2
                            }
                          >
                            <div
                              onClick={() => setDefaultOption(!defaultOption)}
                              className={
                                !defaultOption
                                  ? styles.checkIconContainer
                                  : styles.checkIconContainer2
                              }
                            >
                              {defaultOption && (
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
                        </div>
                      </div>
                    )}
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
                    {true && (
                      <div className={styles.fifthContainer}>
                        <div className={styles.fifthLeftContainer}>
                          <div
                            className={
                              defaultOption
                                ? styles.checkBoxContainer
                                : styles.checkBoxContainer2
                            }
                          >
                            <div
                              onClick={() => setDefaultOption(!defaultOption)}
                              className={
                                !defaultOption
                                  ? styles.checkIconContainer
                                  : styles.checkIconContainer2
                              }
                            >
                              {defaultOption && (
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
                        </div>
                      </div>
                    )}

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

                {
                  <div className={styles.starRatingSelectionContainer}>
                    <div className={styles.fourStarsSelectionContainer}>
                      <div
                        className={
                          defaultOption
                            ? styles.checkBoxContainer
                            : styles.checkBoxContainer2
                        }
                      >
                        <div
                          onClick={() => setDefaultOption(!defaultOption)}
                          className={
                            !defaultOption
                              ? styles.checkIconContainer
                              : styles.checkIconContainer2
                          }
                        >
                          {defaultOption && (
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
                }
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
              1 - 24 of 6,535 Results for "<span>Conses & Hardware</span>"
            </div>

            <div className={styles.rightSideMenuContainer}>
              SORT BY MENU GOES HERE
            </div>
          </div>

          <div className={styles.rightBottomContainer}>PAGINATION HERE</div>
        </div>
        {/* End Right Side */}
      </div>

      {/* RECENTLY VIEWED PRODUCTS GO HERE */}
    </>
  );
}
