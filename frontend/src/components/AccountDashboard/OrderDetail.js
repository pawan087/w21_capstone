import React from "react";
import { FaAngleLeft, FaBoxOpen } from "react-icons/fa";
import styles from "./styles.module.css";

export default function OrderDetail() {
  return (
    <div className={styles.orderDetailContainer}>
      <div className={styles.orderDetailLeftContainer}>
        <div className={styles.orderDetailLeftTopContainer}>
          <div className={styles.leftTop1stContainer}>
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
            <span className={styles.backLinkLabel}>BACK TO MY ORDERS</span>
          </div>
          <div className={styles.leftTop2ndContainer}>
            ORDER: 1100000037735647
          </div>
          <div className={styles.leftTop3rdContainer}>
            <span>Ordered Date:</span> 2 Nov 2021
          </div>
          <div className={styles.leftTop4thContainer}>
            <span>Order Status:</span> Shipped
          </div>
        </div>

        <div className={styles.orderDetailLeftMiddleContainer}>
          <div className={styles.leftMiddle1stContainer}>
            <div className={styles.shippingBoxIconContainer}>
              <FaBoxOpen
                style={{
                  height: "22.5px",
                  width: "22.5px",
                  display: "inline",
                  color: "white",
                }}
              />
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
                Tracking: <span>#545993504283</span>
              </div>
            </div>

            <div className={styles.bottom1stRightContainer}>TRACK ORDER</div>
          </div>

          <div className={styles.leftBottom2ndContainer}>
            <div className={styles.bottom2ndLeftContainer}>
              <img
              className={styles.orderProductImage}
                alt="productImage"
                src="https://media.gamestop.com/i/gamestop/11114265/Original-Slinky-Classic-75th-Anniversary-Edition?$thumb$"
              />
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

      <div className={styles.orderDetailRightContainer}>
        <div className={styles.rightTopContainer}>
          <div className={styles.rightTop1stContainer}>ORDER SUMMARY</div>

          <div className={styles.rightTop2ndContainer}>
            <div className={styles.top2nd1stContainer}>
              <div className={styles.subtotalLabel}>Subtotal (1 item)</div>
              <div className={styles.subtotalValue}>$3.49</div>
            </div>

            <div className={styles.top2nd2ndContainer}>
              <div className={styles.shippingLabel}>Shipping & Handling</div>
              <div className={styles.fakeFreeShipping}>FREE</div>
            </div>

            <div className={styles.top2nd3rdContainer}>
              <div className={styles.taxLabel}>Tax</div>
              <div className={styles.taxValue}>$0.83</div>
            </div>
          </div>

          <div className={styles.rightTop3rdContainer}>
            <div className={styles.totalLabel}>Total</div>

            <div className={styles.totalValue}>$10.31</div>
          </div>
        </div>

        <div className={styles.rightBottomContainer}>
          <div className={styles.rightTop1stContainer2}>BILLING ADDRESS</div>

          <div className={styles.userInfoContainer}>
            <div className={styles.userFullName}>Pawanpreet Chahal</div>
            <div className={styles.address1Container}>619 Davenport Drive</div>
            <div className={styles.address2Container}>San Jose, CA 95127</div>
          </div>

          <div className={styles.rightBottomTitleLabel}>PAYMENT METHOD</div>

          <div className={styles.ccInfoContainer}>
            <div className={styles.userFullName}>Credit Card</div>
            <div className={styles.address1Container}>
              Visa ************2656 Ex. 01/25
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
