import React from "react";
import styles from "./PostOrder.module.css";
import { motion } from "framer-motion/dist/framer-motion";
import { FaAngleRight } from "react-icons/fa";

export default function PostOrder() {
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
                <span className={styles.lighter}>110000037735647</span>
              </div>

              <div className={styles.fakeOrderNumber}>
                Order Date: <span className={styles.lighter}>11/03/2021</span>
              </div>
            </div>

            <div className={styles.accountDashboardButton}>
              ACCOUNT DASHBOARD
            </div>
          </div>

          <div className={styles.shippingNowHeader}>SHIPPING NOW</div>

          <div className={styles.tableHeaders}>
            <div className={styles.productsHeader}>PRODUCTS</div>
            <div className={styles.shippingDetailsHeader}>SHIPPING DETAILS</div>
          </div>

          <div className={styles.mappableContainer}>
            <div className={styles.imageContainer}>
              <img
                className={styles.productPicture}
                src="https://media.gamestop.com/i/gamestop/10138875/Microsoft-Xbox-One-S-1TB-Console-White?$pdp$$&fmt=webp"
                alt="orderConfirmationProductImage"
              />
            </div>

            <div className={styles.productDetailCard}>
              <div className={styles.productName}>
                Original Slinky Classic 75th Anniversary Edition
              </div>

              <div className={styles.productBrandName}>Platform Toys</div>

              <div className={styles.priceCard}>
                <div className={styles.priceLabel}>Price</div>

                <div className={styles.priceTag}>$4.99</div>
              </div>

              <div className={styles.quantityCard}>
                <div className={styles.quantityLabel}>Quantity</div>

                <div className={styles.quantityTag}>1</div>
              </div>

              <div className={styles.leftTotalCard}>
                <div className={styles.leftTotalLabel}>Total</div>

                <div className={styles.leftTotalValue}>$3.49</div>
              </div>
            </div>

            <div className={styles.shippingCard}>
              <div className={styles.shippingTitle}>Shipping Method</div>

              <div className={styles.fakeFree}>FREE</div>
            </div>
          </div>

          <div className={styles.moneyCard}>
            <div className={styles.moneyContainer}>
              <div className={styles.subtotalCard}>
                <div className={styles.subtotalLabel}>Subtotal</div>
                <div className={styles.subtotalValue}>$3.49</div>
              </div>

              <div className={styles.shippingCard2}>
                <div className={styles.shippingLabel2}>Shipping & Handling</div>
                <div className={styles.freeShippingValue2}>FREE</div>
              </div>

              <div className={styles.taxCard}>
                <div className={styles.taxLabel}>Estimated Tax</div>
                <div className={styles.taxValue}>$0.83</div>
              </div>

              <div className={styles.totalCard}>
                <div className={styles.totalLabel}>Total</div>
                <div className={styles.totalValue}>$10.31</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.topRightContainer}>
          <div className={styles.topRightTopContainer}>
            <div className={styles.shippingHeader}>SHIPPING</div>

            <div className={styles.addressLabel}>Shipping Address</div>

            <div className={styles.usersName}>Pawan Chahal</div>

            <div className={styles.address1}>303 Daybreak Court</div>

            <div className={styles.address2}>San Ramon, CA 94583</div>

            <div className={styles.phoneNumber}>4088361037</div>
          </div>

          <div className={styles.topRightBottomContainer}>
            <div className={styles.paymentHeader}>PAYMENT</div>

            <div className={styles.addressLabel}>Billing Address</div>

            <div className={styles.usersName}>Pawan Chahal</div>

            <div className={styles.address1}>303 Daybreak Court</div>

            <div className={styles.address2}>San Ramon, CA 94583</div>

            <div className={styles.email}>chahal.pawanpreet@gmail.com</div>

            <div className={styles.paymentLabel}>Payment Method</div>

            <div className={styles.ccLabel}>Credit Card</div>

            <div className={styles.usersName}>Pawan Chahal</div>

            <div className={styles.ccNumber}>**** **** **** 2656</div>

            <div className={styles.expDate}>Expiration 01/23</div>

            <div className={styles.totalChargedAmount}>Amount: $10.31</div>
          </div>

          <div className={styles.topRightBottomContainer}>BOTTOM</div>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div>{"RETURN TO SHIPPING >"}</div>
      </div>
    </motion.div>
  );
}
