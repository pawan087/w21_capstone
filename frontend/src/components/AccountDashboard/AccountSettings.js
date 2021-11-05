import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion/dist/framer-motion";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import {
  FaPowerOff,
  FaPhoneAlt,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import ReactPaginate from "react-paginate";
import ReactLoading from "react-loading";

import Footer from "../../components/Footer";
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
  const [load, setLoad] = useState(false);

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

  const [detailArr, setDetailArr] = useState([]);
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  let copy = [...usersOrdersAndItems];
  const reversed = copy?.reverse();

  useEffect(() => {
    setData(reversed);
  }, [orders]);
  useEffect(() => {
    (async () => {
      await dispatch(setAllProducts());
      await dispatch(setAllOrderItems());
      await dispatch(setAllOrders());
      setLoad(true);
    })();
  }, [dispatch]);

  if (!load) {
    return (
      <div className={styles.loaderCotnainer}>
        <ReactLoading
          type={"spin"}
          color={"rgba(0,0,0,.75)"}
          height={"0px"}
          width={"57.5px"}
        />
      </div>
    );
  }

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

  const showOrderDetail = (x) => {
    setOrderHistory(false);
    setOrderDetail(true);
    setDetailArr(x);

    if (new Date(x.updatedAt) > pastTime) {
      setStatus("Order Processing:");
    }

    if (new Date(x.updatedAt) < pastTime && new Date(x.updatedAt) > pastTime2) {
      setStatus("Preparing for Shipment");
    }

    if (new Date(x.updatedAt) < pastTime && new Date(x.updatedAt) < pastTime2) {
      setStatus("Shipped:");
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    return;
  };

  const clearAndShowOrderHistory = () => {
    // Clean up
    setOrderDetail(false);
    setCurrentPage(0);
    setAllTheOrders();

    // Show
    setOrderHistory(true);
  };

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
    ?.map((x, i) => {
      return (
        <div key={i}>
          <div className={styles.mappableOrdersContainer}>
            <div className={styles.right2ndContainer}>
              <div className={styles.right2nd1stContainer}>
                <div className={styles.orderDate}>
                  Online | {String(new Date(x?.updatedAt)).slice(4, 15)}
                </div>
              </div>

              <div className={styles.right2nd2ndContainer}>
                Order # 11000000377356{x?.id} | $
                {formatter.format(x.orderTotal + x.orderTotal * 0.0825)}
                <div className={styles.mappableOrderItemPicturesContainer}>
                  {x?.items?.map((y, i) => {
                    return (
                      <div key={i} className={styles.productImageContainer}>
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
                  onClick={() => showOrderDetail(x)}
                  className={styles.orderDetailsLink}
                >
                  ORDER DETAILS
                </div>

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
                <div className={styles.fakeShipmentNumber}>Shipment 1 of 1</div>
                {new Date(x.updatedAt) > pastTime && (
                  <span className={styles.notGreen2}>Order Processing: </span>
                )}

                {new Date(x.updatedAt) < pastTime &&
                  new Date(x.updatedAt) > pastTime2 && (
                    <span className={styles.notGreen}>
                      Preparing for Shipment:{" "}
                    </span>
                  )}

                {new Date(x.updatedAt) < pastTime &&
                  new Date(x.updatedAt) < pastTime2 && (
                    <span className={styles.notGreen}>Shipped: </span>
                  )}
                {String(new Date(x?.updatedAt)).slice(4, 15)}
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
    });

  const pageCount = Math.ceil(data?.length / PER_PAGE);

  const setAllTheOrders = () => {
    setData([...reversed]);
    setSortBy("All Orders");
  };

  const setLast30 = () => {
    setData([...currentOrders]);
    setSortBy("Last 30 Seconds");
  };

  const setLast60 = () => {
    setData([...currentOrders, ...currentOrders2]);
    setSortBy("Last 1 Minute");
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

      <div className={styles.mainContainer2}>
        <div className={styles.widthContainer2}>
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

              <div className={styles.mainLeftBottomContainer2}>
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

          {orderDetail && (
            <OrderDetail user={user} status={status} order={detailArr} />
          )}

          {orderDetail && (
            <div className={styles.goBack}>
              <div className={styles.leftTop1stContainer2}>
                <div
                  onClick={() => clearAndShowOrderHistory()}
                  className={styles.leftChevronIconContainer}
                >
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
                  onClick={() => clearAndShowOrderHistory()}
                  className={styles.backLinkLabel}
                >
                  BACK TO MY ORDERS
                </span>
              </div>
            </div>
          )}

          {
            /* RIGHT - ACCOUNT SETTINGS SECTION */
            <div className={styles.personalDataContainer}>
              <div className={styles.pd1stContainer}>Personal Data</div>
              <div className={styles.pd2ndContainer}>
                <div className={styles.pd2nd1stContainer}>
                  <div className={styles.pd2nd1st1stContainer}>NAME</div>
                  <div className={styles.pd2nd1st2ndContainer}>
                    Pawanpreet Chahal
                  </div>
                </div>
                <div className={styles.pd2nd2ndContainer}>Edit</div>
              </div>
              <div className={styles.pd3rdContainer}>
                <div className={styles.pd2nd1stContainer}>
                  <div className={styles.pd2nd1st1stContainer}>EMAIL</div>
                  <div className={styles.pd2nd1st2ndContainer}>
                    chahal.pawanpreet@gmail.com
                  </div>
                </div>
                <div className={styles.pd2nd2ndContainer}>Edit</div>
              </div>
            </div>
            /* End Right Order History */
          }
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
