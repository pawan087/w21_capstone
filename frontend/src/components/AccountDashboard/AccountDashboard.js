import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { FaPowerOff, FaPhoneAlt, FaAngleRight } from "react-icons/fa";

import styles from "./styles.module.css";
import "@szhsin/react-menu/dist/index.css";

export default function AccountDashboard() {
  const [sortBy, setSortBy] = useState("All Orders");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.preHeader}></div>

      <div className={styles.dashboardHeaderContainer}>
        <div className={styles.dashboardHeader}>
          <div className={styles.headerWelcome}>Welcome, Pawanpreet</div>
          <div className={styles.logoutLink}>LOG OUT</div>
        </div>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.widthContainer}>
          {
            /* LEFT MENU */
            <div className={styles.mainLeftContainer}>
              <div className={styles.mainLeftTopContainer}>
                <div className={styles.firstContainer}>
                  <div className={styles.powerIcon}>
                    <FaPowerOff
                      style={{
                        height: "20px",
                        width: "20px",
                        display: "inline",
                        color: "rgb(223,79,70)",
                      }}
                    />
                  </div>

                  <div className={styles.accountHeader}>MY ACCOUNT</div>
                </div>

                <div className={styles.secondContainer}>ACCOUNT SETTINGS</div>

                <div className={styles.thirdContainer}>Personal Data</div>

                <div className={styles.fourthContainer}>Password</div>

                <div className={styles.fifthContainer}>Address Book</div>

                <div className={styles.secondContainer}>MY ORDERS</div>

                <div className={styles.sixthContainer}>Order History</div>

                <div className={styles.fifthContainer}></div>
              </div>

              <div className={styles.mainLeftBottomContainer}>
                <div className={styles.bottom1stContainer}>CUSTOMER CARE</div>

                <div className={styles.bottom2ndContainer}>
                  MON-SAT: 8 AM - 10 PM CT
                </div>

                <div className={styles.bottom3rdContainer}>
                  SUN: 8 AM - 8PM CT
                </div>

                <div className={styles.bottom4thContainer}>
                  <div className={styles.phoneIcon}>
                    <FaPhoneAlt
                      style={{
                        height: "20px",
                        width: "20px",
                        display: "inline",
                        color: "rgba(0,0,0,.5)",
                      }}
                    />
                  </div>

                  <div className={styles.phoneNumber}>Call 1-800-883-8895</div>
                </div>
              </div>
            </div>
          }

          {
            /* RIGHT - ORDER HISTORY */
            <div className={styles.mainRightContainer}>
              <div className={styles.right1stContainer}>
                <div className={styles.right1stLeftContainer}>
                  <div className={styles.right1stLeftTopContainer}>
                    Order History
                  </div>
                  <div className={styles.right1stLeftBottomContainer}>
                    2 Orders
                  </div>
                </div>

                <div className={styles.right1stRightContainer}>
                  <div className={styles.orderSortingMenuContainer}>
                    <Menu
                      arrow={true}
                      align={"center"}
                      className={styles.menu}
                      menuButton={
                        <MenuButton className={styles.button}>
                          <span>{sortBy}</span>
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
                        /*  onClick={(e) => setRecent(e)} */
                        className={styles.menuItem}
                      >
                        All Orders
                      </MenuItem>
                      <MenuItem
                        /*          onClick={(e) => setHighestToLowest(e)} */
                        className={styles.menuItem}
                      >
                        Last 30 Seconds
                      </MenuItem>
                      <MenuItem
                        /*               onClick={(e) => setLowestToHighest(e)} */
                        className={styles.menuItem}
                      >
                        Last 1 Minute
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
              </div>

              <div className={styles.mappableOrdersContainer}>
                <div className={styles.right2ndContainer}>
                  <div className={styles.right2nd1stContainer}>
                    <div className={styles.orderDate}>
                      Online | November 2, 2021
                    </div>
                  </div>

                  <div className={styles.right2nd2ndContainer}>
                    Order # 1100000037735647 | $10.31
                  </div>

                  <div className={styles.right2nd3rdContainer}>
                    <div className={styles.orderDetailsLink}>ORDER DETAILS</div>

                    <div className={styles.rightArrowIconContainer}>
                      <FaAngleRight
                        style={{
                          height: "20px",
                          width: "20px",
                          display: "inline",
                          color: "rgb(238,42,40)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.right3rdContainer}>
                  <div className={styles.orderStatusLabel}>
                    Preparing for shipment
                  </div>

                  <div className={styles.mappableOrderItemPicturesContainer}>
                    {true && (
                      <div className={styles.productImageContainer}>
                        <img
                          alt={"productImage"}
                          className={styles.orderImages}
                          src={
                            "https://media.gamestop.com/i/gamestop/11114265/Original-Slinky-Classic-75th-Anniversary-Edition?$thumb$&fmt=webp"
                          }
                        />
                      </div>
                    )}
                    {false && <div className={styles.plusTag}>+{5}</div>}
                  </div>

                  <div className={styles.orderStatusLabel2}>
                    Preparing for shipment
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </motion.div>
  );
}
