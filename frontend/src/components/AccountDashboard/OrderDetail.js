import React from "react";
import styles from "./styles.module.css";

export default function OrderDetail() {
  return (
    <div className={styles.orderDetailContainer}>
      <div className={styles.orderDetailLeftContainer}>
        <div className={styles.orderDetailLeftTopContainer}>
          <div className={styles.leftTop1stContainer}>
            <div className={styles.leftChevronIconContainer}>
              {"LEFT CHEVRON ICON"}
            </div>
            <span className={styles.backLinkLabel}>BACK TO MY ORDERS</span>
          </div>
          <div className={styles.leftTop2ndContainer}>
            ORDER: 1100000037735647
          </div>
          <div className={styles.leftTop3rdContainer}>
            Ordered Date: 2 Nov 2021
          </div>
          <div className={styles.leftTop4thContainer}>
            Order Status: Shipped
          </div>
        </div>

        <div className={styles.orderDetailLeftMiddleContainer}>
          <div className={styles.leftMiddle1stContainer}>
            <div className={styles.shippingBoxIconContainer}>
              {"SHIPPING BOX ICON"}
            </div>

            <div className={styles.shipLabel}>SHIP TO HOME</div>
          </div>

          <div className={styles.leftMiddle2ndContainer}>
            Ship to:{" "}
            <span className={styles.boldAddress}>
              303 DAYBREAK CT, SAN RAMON, CA, 94583
            </span>
          </div>
        </div>

        <div className={styles.mappableOrderDetailLeftBottomContainer}>
          <div className={styles.leftBottom1stContainer}>
            <div className={styles.bottom1stLeftContainer}>
              <div className={styles.bottom1stLeftTopContainer}>
                Status: <span className={styles.greenLabel}>Shipped</span>
              </div>

              <div className={styles.bottom1stLeftBottomContainer}>
                Tracking: #545993504283
              </div>
            </div>

            <div className={styles.bottom1stRightContainer}>TRACK ORDER</div>
          </div>

          <div className={styles.leftBottom2ndContainer}>
            <div className={styles.bottom2ndLeftContainer}>
              <img alt="productImage" src="" />
            </div>

            <div className={styles.bottom2ndRightContainer}>
              <div className={styles.secondRight1stContainer}>
                Original Slinky Classic 75th Anniversary Edition
              </div>

              <div className={styles.secondRight2ndContainer}>
                Brand Name Here
              </div>

              <div className={styles.secondRight3rdContainer}>Qty: 1</div>
            </div>
          </div>

          <div className={styles.leftBottom3rdContainer}>
            <div className={styles.productPrice}>$3.49</div>
          </div>
        </div>
      </div>

      <div className={styles.orderDetailRightContainer}>RIGHT</div>
    </div>
  );
}
