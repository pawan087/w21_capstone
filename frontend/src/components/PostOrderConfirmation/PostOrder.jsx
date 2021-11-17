import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import { FaAngleRight } from "react-icons/fa";
import ReactLoading from "react-loading";

import Footer from "../Footer";
import { setAllProducts } from "../../store/products";
import { setAllOrderItems } from "../../store/orderItems";
import { setAllOrders } from "../../store/orders.js";
import { setAllCartItems } from "../../store/cartItems.js";
import styles from "./PostOrder.module.css";

export default function PostOrder() {
  const dispatch = useDispatch();
  const history = useHistory();

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const user = useSelector((state) => state.session.user);
  const justOrdered = useSelector((state) => state.postOrderReducer);
  const orders = useSelector((state) => state.orders);

  let subtotal = 0;
  justOrdered?.shoppingCart?.forEach((x) => {
    subtotal += x.quantity * x.product.price;
    return;
  });

  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(setAllProducts());
      await dispatch(setAllOrderItems());
      await dispatch(setAllOrders());
      await dispatch(setAllCartItems());
      setLoad(true);
    })();
  }, [dispatch]);

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

  if (justOrdered?.length === 0) {
    return <Redirect to="/orders" />;
  }

  if (!user) return <Redirect to="/" />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.backContainer}
    >
      <div className={styles.topContainer}>
        <div className={styles.topLeftContainer}>
          <div className={styles.confirmationHeading}>
            THANK YOU FOR YOUR ORDER!
          </div>

          <div className={styles.confirmationSubheading}>
            We've sent you a confirmation email.
          </div>

          <div className={styles.orderDetailsAndButton}>
            <div className={styles.orderDetails}>
              <div className={styles.fakeOrderNumber}>
                Order Number:{" "}
                <span className={styles.lighter}>
                  11000000377356{orders[orders.length - 1]?.id}
                </span>
              </div>

              <div className={styles.fakeOrderNumber}>
                Order Date:{" "}
                <span className={styles.lighter}>
                  {String(new Date(orders[orders.length - 1]?.updatedAt)).slice(
                    4,
                    15
                  )}
                </span>
              </div>
            </div>

            <div
              onClick={() => history.push("/orders")}
              className={styles.accountDashboardButton}
            >
              ACCOUNT DASHBOARD
            </div>
          </div>

          <div className={styles.shippingNowHeader}>SHIPPING NOW</div>

          <div className={styles.tableHeaders}>
            <div className={styles.productsHeader}>PRODUCTS</div>
            <div className={styles.shippingDetailsHeader}>SHIPPING DETAILS</div>
          </div>

          {justOrdered?.shoppingCart?.map((cartItem, i) => {
            return (
              <div key={i}>
                <div className={styles.mappableContainer}>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.productPicture}
                      src={cartItem?.product?.images[0]}
                      alt="orderConfirmationProductImage"
                    />
                  </div>

                  <div className={styles.productDetailCard}>
                    <div className={styles.productName}>
                      {cartItem?.product?.name}
                    </div>

                    <div className={styles.productBrandName}>
                      {cartItem?.product?.Brand?.name}
                    </div>

                    <div className={styles.priceCard}>
                      <div className={styles.priceLabel}>Price</div>

                      <div className={styles.priceTag}>
                        ${cartItem?.product?.price}
                      </div>
                    </div>

                    <div className={styles.quantityCard}>
                      <div className={styles.quantityLabel}>Quantity</div>

                      <div className={styles.quantityTag}>
                        {cartItem?.quantity}
                      </div>
                    </div>

                    <div className={styles.leftTotalCard}>
                      <div className={styles.leftTotalLabel}>Total</div>

                      <div className={styles.leftTotalValue}>
                        $
                        {formatter.format(
                          cartItem?.quantity * cartItem?.product?.price
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={styles.shippingCard}>
                    <div className={styles.shippingTitle}>Shipping Method</div>

                    <div className={styles.fakeFree}>FREE</div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className={styles.moneyCard}>
            <div className={styles.moneyContainer}>
              <div className={styles.subtotalCard}>
                <div className={styles.subtotalLabel}>Subtotal</div>
                <div className={styles.subtotalValue}>
                  ${formatter.format(subtotal)}
                </div>
              </div>

              <div className={styles.shippingCard2}>
                <div className={styles.shippingLabel2}>Shipping & Handling</div>
                <div className={styles.freeShippingValue2}>FREE</div>
              </div>

              <div className={styles.taxCard}>
                <div className={styles.taxLabel}>Estimated Tax</div>
                <div className={styles.taxValue}>
                  ${formatter.format(subtotal * 0.0825)}
                </div>
              </div>

              <div className={styles.totalCard}>
                <div className={styles.totalLabel}>Total</div>
                <div className={styles.totalValue}>
                  ${formatter.format(subtotal + subtotal * 0.0825)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.topRightContainer}>
          <div className={styles.topRightTopContainer}>
            <div className={styles.shippingHeader}>SHIPPING</div>

            <div className={styles.addressLabel}>Shipping Address</div>

            <div className={styles.usersName}>
              {justOrdered?.firstName} {justOrdered?.lastName}
            </div>

            <div className={styles.address1}>{justOrdered?.address1}</div>

            <div className={styles.address2}>{justOrdered?.address2}</div>

            <div className={styles.phoneNumber}>{justOrdered?.phone}</div>
          </div>

          <div className={styles.topRightBottomContainer}>
            <div className={styles.shippingHeader}>PAYMENT</div>

            <div className={styles.addressLabel}>Billing Address</div>

            <div className={styles.usersName}>
              {justOrdered?.firstName} {justOrdered?.lastName}
            </div>

            <div className={styles.address1}>{justOrdered?.address1}</div>

            <div className={styles.address2}>{justOrdered?.address2}</div>

            <div className={styles.email}>{user?.email}</div>

            <div className={styles.paymentLabel}>Payment Method</div>

            <div className={styles.email}>Credit Card</div>

            {justOrdered?.cc?.slice(justOrdered?.cc?.length - 4) === "9509" && (
              <div className={styles.usersName}>Pawan Chahal</div>
            )}

            {justOrdered?.cc?.slice(justOrdered?.cc?.length - 4) !== "9509" && (
              <div className={styles.usersName}>
                {justOrdered?.firstName} {justOrdered?.lastName}
              </div>
            )}

            <div className={styles.email}>
              ************{justOrdered?.cc?.slice(justOrdered?.cc?.length - 4)}
            </div>

            <div className={styles.email}>{justOrdered?.exp}</div>

            <div className={styles.totalChargedAmount}>
              Amount: ${formatter.format(subtotal + subtotal * 0.0825)}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div onClick={() => history.push("/")} className={styles.returnLink}>
          <span className={styles.toRed}>{"RETURN TO SHOPPING "}</span>
          <FaAngleRight
            style={{
              cursor: "pointer",
              marginLeft: "2.5px",
              display: "inline",
              height: "20px",
              width: "20px",
              color: "rgb(238,42,40)",
            }}
          />
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
