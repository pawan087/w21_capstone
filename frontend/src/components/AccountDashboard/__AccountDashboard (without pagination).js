import React, { useEffect, useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { FaPowerOff, FaPhoneAlt, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import OrderDetail from "./OrderDetail";
import { setAllOrderItems } from "../../store/orderItems.js";

import { setAllProducts } from "../../store/products.js";
import { setAllOrders } from "../../store/orders.js";
import styles from "./styles.module.css";
import "@szhsin/react-menu/dist/index.css";

export default function AccountDashboard() {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("All Orders");
  const [orderHistory, setOrderHistory] = useState(true);
  const [orderDetail, setOrderDetail] = useState(false);

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let bool = false;

  const user = useSelector((state) => state.session.user);
  const orders = useSelector((state) => state.orders);
  const orderItems = useSelector((state) => state.orderItems);
  const products = useSelector((state) => state.products);

  function AddMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }

  let curTime = new Date();

  // -0.5 is half a second
  let pastTime = AddMinutesToDate(curTime, -0.5);
  let pastTime2 = AddMinutesToDate(curTime, -1); // <-- Change to appropriate time deemed for 'order processing' (ie. 1 minute)

  const usersOrders = orders?.filter((order) => {
    return order?.userId === +user?.id;
  });

  let usersOrdersAndItems = [];

  usersOrders?.forEach((order) => {
    const orderItemsArr = [];
    let orderTotal = 0;

    orderItems?.forEach((item) => {
      if (order.items.includes(item.id)) {
        orderItemsArr.push(item);
      }
    });

    let obj = {
      ...order,
      allItemsArr: [...orderItemsArr],
    };

    delete obj.userId;

    let itemsAndProducts = [];

    obj?.allItemsArr?.forEach((item) => {
      delete item.userId;

      let id1 = item.productId;

      products?.forEach((product) => {
        let id2 = product.id;

        if (+id1 === +id2) {
          orderTotal += product.price * item.quantity;
          itemsAndProducts.push({
            product: product,
            quantity: item.quantity,
            price: formatter.format(product.price * item.quantity),
          });
        }
      });

      obj.itemsArr = itemsAndProducts;

      obj.items = obj.itemsArr;
      delete obj.itemsArr;
    });

    usersOrdersAndItems.push({ ...obj, orderTotal });
  });

  const previousOrders = [];
  const currentOrders = []; // 30 seconds ago
  const currentOrders2 = []; // 1 minute ago

  usersOrdersAndItems?.forEach((obj) => {
    let updatedTime = new Date(obj.updatedAt);

    if (updatedTime < pastTime) {
      // previousOrders.push(obj);
    } else {
      currentOrders.push(obj);
      return;
    }

    if (updatedTime < pastTime2) {
      previousOrders.push(obj);
    } else {
      currentOrders2.push(obj);
    }
  });

  useEffect(() => {
    dispatch(setAllProducts());
    dispatch(setAllOrderItems());
    dispatch(setAllOrders());
  }, [dispatch]);

  if (sortBy === "All Orders" && usersOrdersAndItems.length === 0) {
    bool = true;
  }

  if (sortBy === "Last 30 Seconds" && currentOrders.length === 0) {
    bool = true;
  }

  if (
    sortBy === "Last 1 Minute" &&
    currentOrders2.length === 0 &&
    currentOrders.length === 0
  ) {
    bool = true;
  }

  const [detailArr, setDetailArr] = useState([]);
  const [status, setStatus] = useState("");

  const showOrderDetail = (order, shippingStatus) => {
    setOrderHistory(false);
    setOrderDetail(true);
    setDetailArr(order);
    setStatus(shippingStatus);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    return;
  };

  const showOrderHistory = () => {
    setOrderDetail(false);
    setOrderHistory(true);
  };

  const clearAndShowOrderHistory = () => {
    // Clean up
    setOrderDetail(false);

    // Show
    setOrderHistory(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.preHeader}></div>

      <div className={styles.dashboardHeaderContainer}>
        <div className={styles.dashboardHeader}>
          <div className={styles.headerWelcome}>Welcome, {user?.firstName}</div>
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

                <div
                  onClick={() => clearAndShowOrderHistory()}
                  className={styles.sixthContainer}
                >
                  Order History
                </div>

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

          {orderDetail && <OrderDetail status={status} order={detailArr} />}

          {orderDetail && (
            <div className={styles.goBack}>
              <div className={styles.leftTop1stContainer2}>
                <div className={styles.leftChevronIconContainer}>
                  <FaAngleLeft
                    style={{
                      height: "20px",
                      width: "20px",
                      display: "inline",
                      color: "rgb(238,42,40)",
                    }}
                  />
                </div>
                <span
                  onClick={() => showOrderHistory()}
                  className={styles.backLinkLabel}
                >
                  BACK TO MY ORDERS
                </span>
              </div>
            </div>
          )}

          {
            orderHistory && (
              /* RIGHT - ORDER HISTORY */
              <div className={styles.mainRightContainer}>
                <div className={styles.right1stContainer}>
                  <div className={styles.right1stLeftContainer}>
                    <div className={styles.right1stLeftTopContainer}>
                      Order History
                    </div>
                    <div className={styles.right1stLeftBottomContainer}>
                      {sortBy === "All Orders" && (
                        <>{usersOrdersAndItems.length} Orders</>
                      )}
                      {sortBy === "Last 30 Seconds" && (
                        <>{currentOrders.length} Orders</>
                      )}
                      {sortBy === "Last 1 Minute" && (
                        <>{currentOrders2.length} Orders</>
                      )}
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
                          onClick={() => setSortBy("All Orders")}
                          className={styles.menuItem}
                        >
                          All Orders
                        </MenuItem>
                        <MenuItem
                          onClick={() => setSortBy("Last 30 Seconds")}
                          className={styles.menuItem}
                        >
                          Last 30 Seconds
                        </MenuItem>
                        <MenuItem
                          onClick={() => setSortBy("Last 1 Minute")}
                          className={styles.menuItem}
                        >
                          Last 1 Minute
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                </div>

                {
                  sortBy === "All Orders" && (
                    <>
                      {
                        /* Last 30 Seconds */
                        currentOrders?.map((x, i) => {
                          return (
                            <div key={i}>
                              <div className={styles.mappableOrdersContainer}>
                                <div className={styles.right2ndContainer}>
                                  <div className={styles.right2nd1stContainer}>
                                    <div className={styles.orderDate}>
                                      Online |{" "}
                                      {String(new Date(x?.updatedAt)).slice(
                                        4,
                                        15
                                      )}
                                    </div>
                                  </div>

                                  <div className={styles.right2nd2ndContainer}>
                                    Order # 11000000377356{x?.id} | $
                                    {formatter.format(
                                      x.orderTotal + x.orderTotal * 0.0825
                                    )}
                                    <div
                                      className={
                                        styles.mappableOrderItemPicturesContainer
                                      }
                                    >
                                      {x?.items?.map((y, i) => {
                                        return (
                                          <div
                                            key={i}
                                            className={
                                              styles.productImageContainer
                                            }
                                          >
                                            <img
                                              alt={"productImage"}
                                              className={styles.orderImages}
                                              src={y?.product?.images[0]}
                                            />
                                          </div>
                                        );
                                      })}

                                      {x?.items?.length > 5 && (
                                        <div className={styles.plusTag}>
                                          +{x?.items?.length - 5}
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  <div className={styles.right2nd3rdContainer}>
                                    <div
                                      onClick={() =>
                                        showOrderDetail(x, "Order Processing")
                                      }
                                      className={styles.orderDetailsLink}
                                    >
                                      ORDER DETAILS
                                    </div>

                                    <div
                                      className={styles.rightArrowIconContainer}
                                    >
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
                                    Order Processing
                                  </div>

                                  <div className={styles.orderStatusLabel2}>
                                    Preparing for shipment
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                        /* End Last 30 Sec */
                      }

                      {
                        /* Last 60 Seconds */
                        currentOrders2?.map((x, i) => {
                          return (
                            <div key={i}>
                              <div className={styles.mappableOrdersContainer}>
                                <div className={styles.right2ndContainer}>
                                  <div className={styles.right2nd1stContainer}>
                                    <div className={styles.orderDate}>
                                      Online |{" "}
                                      {String(new Date(x?.updatedAt)).slice(
                                        4,
                                        15
                                      )}
                                    </div>
                                  </div>

                                  <div className={styles.right2nd2ndContainer}>
                                    Order # 11000000377356{x?.id} | $
                                    {formatter.format(
                                      x.orderTotal + x.orderTotal * 0.0825
                                    )}
                                    <div
                                      className={
                                        styles.mappableOrderItemPicturesContainer
                                      }
                                    >
                                      {x?.items?.map((y, i) => {
                                        return (
                                          <div
                                            key={i}
                                            className={
                                              styles.productImageContainer
                                            }
                                          >
                                            <img
                                              alt={"productImage"}
                                              className={styles.orderImages}
                                              src={y?.product?.images[0]}
                                            />
                                          </div>
                                        );
                                      })}
                                      {x?.items?.length > 5 && (
                                        <div className={styles.plusTag}>
                                          +{x?.items?.length - 5}
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  <div className={styles.right2nd3rdContainer}>
                                    <div
                                      onClick={() =>
                                        showOrderDetail(x, "Preparing for shipment")
                                      }
                                      className={styles.orderDetailsLink}
                                    >
                                      ORDER DETAILS
                                    </div>

                                    <div
                                      className={styles.rightArrowIconContainer}
                                    >
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

                                  <div className={styles.orderStatusLabel2}>
                                    Preparing for shipment
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                        /* End Last 60 Sec */
                      }

                      {
                        /* Past */
                        previousOrders?.map((x, i) => {
                          return (
                            <div key={i}>
                              <div className={styles.mappableOrdersContainer}>
                                <div className={styles.right2ndContainer}>
                                  <div className={styles.right2nd1stContainer}>
                                    <div className={styles.orderDate}>
                                      Online |{" "}
                                      {String(new Date(x?.updatedAt)).slice(
                                        4,
                                        15
                                      )}
                                    </div>
                                  </div>

                                  <div className={styles.right2nd2ndContainer}>
                                    Order # 11000000377356{x?.id} | $
                                    {formatter.format(
                                      x.orderTotal + x.orderTotal * 0.0825
                                    )}
                                    <div
                                      className={
                                        styles.mappableOrderItemPicturesContainer
                                      }
                                    >
                                      {x?.items?.map((y, i) => {
                                        return (
                                          <div
                                            key={i}
                                            className={
                                              styles.productImageContainer
                                            }
                                          >
                                            <img
                                              alt={"productImage"}
                                              className={styles.orderImages}
                                              src={y?.product?.images[0]}
                                            />
                                          </div>
                                        );
                                      })}

                                      {x?.items?.length > 5 && (
                                        <div className={styles.plusTag}>
                                          +{x?.items?.length - 5}
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  <div className={styles.right2nd3rdContainer}>
                                    <div
                                      onClick={() =>
                                        showOrderDetail(x, "Shipped")
                                      }
                                      className={styles.orderDetailsLink}
                                    >
                                      ORDER DETAILS
                                    </div>

                                    <div
                                      className={styles.rightArrowIconContainer}
                                    >
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
                                    <div className={styles.fakeShipmentNumber}>
                                      Shipment 1 of 1
                                    </div>
                                    <span className={styles.notGreen}>
                                      Shipped:
                                    </span>{" "}
                                    {String(new Date(x?.updatedAt)).slice(
                                      4,
                                      15
                                    )}
                                    <div className={styles.fakeTrackingNumber}>
                                      54599350{Math.floor(Math.random() * 10)}
                                      {Math.floor(Math.random() * 10)}
                                      {Math.floor(Math.random() * 10)}
                                    </div>
                                  </div>

                                  <div className={styles.orderStatusLabel2}>
                                    Preparing for shipment
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                        /* End Past */
                      }
                    </>
                  )
                  /* End All */
                }

                {
                  sortBy === "Last 30 Seconds" && (
                    <>
                      {
                        /* Last 30 Seconds */
                        currentOrders?.map((x, i) => {
                          return (
                            <div key={i}>
                              <div className={styles.mappableOrdersContainer}>
                                <div className={styles.right2ndContainer}>
                                  <div className={styles.right2nd1stContainer}>
                                    <div className={styles.orderDate}>
                                      Online |{" "}
                                      {String(new Date(x?.updatedAt)).slice(
                                        4,
                                        15
                                      )}
                                    </div>
                                  </div>

                                  <div className={styles.right2nd2ndContainer}>
                                    Order # 11000000377356{x?.id} | $
                                    {formatter.format(
                                      x.orderTotal + x.orderTotal * 0.0825
                                    )}
                                    <div
                                      className={
                                        styles.mappableOrderItemPicturesContainer
                                      }
                                    >
                                      {x?.items?.map((y, i) => {
                                        return (
                                          <div
                                            key={i}
                                            className={
                                              styles.productImageContainer
                                            }
                                          >
                                            <img
                                              alt={"productImage"}
                                              className={styles.orderImages}
                                              src={y?.product?.images[0]}
                                            />
                                          </div>
                                        );
                                      })}

                                      {x?.items?.length > 5 && (
                                        <div className={styles.plusTag}>
                                          +{x?.items?.length - 5}
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  <div className={styles.right2nd3rdContainer}>
                                    <div
                                      onClick={() =>
                                        showOrderDetail(x, "Order Processing")
                                      }
                                      className={styles.orderDetailsLink}
                                    >
                                      ORDER DETAILS
                                    </div>

                                    <div
                                      className={styles.rightArrowIconContainer}
                                    >
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
                                    Order Processing
                                  </div>

                                  <div className={styles.orderStatusLabel2}>
                                    Preparing for shipment
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                        /* End Last 30 Sec */
                      }
                    </>
                  )
                  /* End All */
                }

                {
                  sortBy === "Last 1 Minute" && (
                    <>
                      {
                        /* Last 30 Seconds */
                        currentOrders?.map((x, i) => {
                          return (
                            <div key={i}>
                              <div className={styles.mappableOrdersContainer}>
                                <div className={styles.right2ndContainer}>
                                  <div className={styles.right2nd1stContainer}>
                                    <div className={styles.orderDate}>
                                      Online |{" "}
                                      {String(new Date(x?.updatedAt)).slice(
                                        4,
                                        15
                                      )}
                                    </div>
                                  </div>

                                  <div className={styles.right2nd2ndContainer}>
                                    Order # 11000000377356{x?.id} | $
                                    {formatter.format(
                                      x.orderTotal + x.orderTotal * 0.0825
                                    )}
                                    <div
                                      className={
                                        styles.mappableOrderItemPicturesContainer
                                      }
                                    >
                                      {x?.items?.map((y, i) => {
                                        return (
                                          <div
                                            key={i}
                                            className={
                                              styles.productImageContainer
                                            }
                                          >
                                            <img
                                              alt={"productImage"}
                                              className={styles.orderImages}
                                              src={y?.product?.images[0]}
                                            />
                                          </div>
                                        );
                                      })}

                                      {x?.items?.length > 5 && (
                                        <div className={styles.plusTag}>
                                          +{x?.items?.length - 5}
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  <div className={styles.right2nd3rdContainer}>
                                    <div
                                      onClick={() =>
                                        showOrderDetail(x, "Order Processing")
                                      }
                                      className={styles.orderDetailsLink}
                                    >
                                      ORDER DETAILS
                                    </div>

                                    <div
                                      className={styles.rightArrowIconContainer}
                                    >
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
                                  Order Processing
                                  </div>

                                  <div className={styles.orderStatusLabel2}>
                                    Preparing for shipment
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                        /* End Last 60 Sec */
                      }

                      {
                        /* Last 60 Seconds */
                        currentOrders2?.map((x, i) => {
                          return (
                            <div key={i}>
                              <div className={styles.mappableOrdersContainer}>
                                <div className={styles.right2ndContainer}>
                                  <div className={styles.right2nd1stContainer}>
                                    <div className={styles.orderDate}>
                                      Online |{" "}
                                      {String(new Date(x?.updatedAt)).slice(
                                        4,
                                        15
                                      )}
                                    </div>
                                  </div>

                                  <div className={styles.right2nd2ndContainer}>
                                    Order # 11000000377356{x?.id} | $
                                    {formatter.format(
                                      x.orderTotal + x.orderTotal * 0.0825
                                    )}
                                    <div
                                      className={
                                        styles.mappableOrderItemPicturesContainer
                                      }
                                    >
                                      {x?.items?.map((y, i) => {
                                        return (
                                          <div
                                            key={i}
                                            className={
                                              styles.productImageContainer
                                            }
                                          >
                                            <img
                                              alt={"productImage"}
                                              className={styles.orderImages}
                                              src={y?.product?.images[0]}
                                            />
                                          </div>
                                        );
                                      })}

                                      {x?.items?.length > 5 && (
                                        <div className={styles.plusTag}>
                                          +{x?.items?.length - 5}
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  <div className={styles.right2nd3rdContainer}>
                                    <div
                                      onClick={() =>
                                        showOrderDetail(x, "Preparing for shipment")
                                      }
                                      className={styles.orderDetailsLink}
                                    >
                                      ORDER DETAILS
                                    </div>

                                    <div
                                      className={styles.rightArrowIconContainer}
                                    >
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

                                  <div className={styles.orderStatusLabel2}>
                                    Preparing for shipment
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                        /* End Last 60 Sec */
                      }
                    </>
                  )
                  /* End All */
                }

                {bool && (
                  /* NO ORDERS */
                  <div className={styles.noOrdersContainer}>
                    <img
                      className={styles.noneFoundPic}
                      src={
                        "https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw929621c1/images/svg-icons/empty.svg"
                      }
                      alt={"noneFound"}
                    ></img>
                    No orders found for selected period.{" "}
                    <div
                      onClick={() => setSortBy("All Orders")}
                      className={styles.viewAllButton}
                    >
                      VIEW ALL ORDERS
                    </div>
                  </div>
                )}
              </div>
            )
            /* End Right Order History */
          }
        </div>
      </div>
    </motion.div>
  );
}
