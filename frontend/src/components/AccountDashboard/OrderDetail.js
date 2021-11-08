import React from "react";
import { useHistory } from "react-router-dom";
import { FaAngleLeft, FaBoxOpen } from "react-icons/fa";

import styles from "./styles.module.css";

export default function OrderDetail({ order, status, user }) {
  const history = useHistory();

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let numItems = 0;
  order.items.forEach((x) => {
    numItems += x.quantity;
  });

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
            ORDER: 11000000377356{order?.id}
          </div>
          <div className={styles.leftTop3rdContainer}>
            <span>Ordered Date:</span>{" "}
            {String(new Date(order?.updatedAt)).slice(4, 15)}
          </div>
          <div className={styles.leftTop4thContainer}>
            <span>Order Status:</span> {status}
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
              {order.address1.toUpperCase()}, {order.address2.toUpperCase()}
            </span>
          </div>
        </div>

        {order.items.map((x, i) => {
          return (
            <div key={i}>
              <div className={styles.mappableOrderDetailLeftBottomContainer}>
                <div className={styles.leftBottom1stContainer}>
                  <div className={styles.bottom1stLeftContainer}>
                    <div className={styles.bottom1stLeftTopContainer}>
                      Status:{" "}
                      <span className={styles.greenLabel}>{status}</span>
                    </div>

                    <div className={styles.bottom1stLeftBottomContainer}>
                      Tracking:{" "}
                      <span>
                        #54599350{Math.floor(Math.random() * 10)}
                        {Math.floor(Math.random() * 10)}
                        {Math.floor(Math.random() * 10)}
                      </span>
                    </div>
                  </div>

                  {true && (
                    <div className={styles.bottom1stRightContainer}>
                      TRACK ORDER
                    </div>
                  )}
                </div>

                <div className={styles.leftBottom2ndContainer}>
                  <div className={styles.bottom2ndLeftContainer}>
                    <img
                      onClick={() => history.push(`/products/${x.product.id}`)}
                      className={styles.orderProductImage}
                      alt="productImage"
                      src={x.product.images[0]}
                    />
                  </div>

                  <div className={styles.bottom2ndRightContainer}>
                    <div className={styles.secondRight1stContainer}>
                      {x.product.name}
                    </div>

                    <div className={styles.secondRight2ndContainer}>
                      {x.product.Brand.name}
                    </div>

                    <div className={styles.secondRight3rdContainer}>
                      Qty: {x.quantity}
                    </div>
                  </div>
                </div>

                <div className={styles.leftBottom3rdContainer}>
                  <div className={styles.productPrice}>
                    ${formatter.format(x.quantity * x.product.price)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.orderDetailRightContainer}>
        <div className={styles.rightTopContainer}>
          <div className={styles.rightTop1stContainer}>ORDER SUMMARY</div>

          <div className={styles.rightTop2ndContainer}>
            <div className={styles.top2nd1stContainer}>
              <div className={styles.subtotalLabel}>
                Subtotal ({numItems} {numItems === 1 ? "item" : "items"})
              </div>
              <div className={styles.subtotalValue}>
                ${formatter.format(order.orderTotal)}
              </div>
            </div>

            <div className={styles.top2nd2ndContainer}>
              <div className={styles.shippingLabel}>Shipping & Handling</div>
              <div className={styles.fakeFreeShipping}>FREE</div>
            </div>

            <div className={styles.top2nd3rdContainer}>
              <div className={styles.taxLabel}>Tax</div>
              <div className={styles.taxValue}>
                ${formatter.format(order.orderTotal * 0.0825)}
              </div>
            </div>
          </div>

          <div className={styles.rightTop3rdContainer}>
            <div className={styles.totalLabel}>Total</div>

            <div className={styles.totalValue}>
              ${formatter.format(order.orderTotal + order.orderTotal * 0.0825)}
            </div>
          </div>
        </div>

        <div className={styles.rightBottomContainer}>
          <div className={styles.rightTop1stContainer2}>BILLING ADDRESS</div>

          <div className={styles.userInfoContainer}>
            <div className={styles.userFullName}>

              {order?.firstName} {order?.lastName}
            </div>
            <div className={styles.address1Container}>{order.address1}</div>
            <div className={styles.address2Container}>{order.address2}</div>
          </div>

          <div className={styles.rightBottomTitleLabel}>PAYMENT METHOD</div>

          <div className={styles.ccInfoContainer}>
            <div className={styles.userFullName}>Credit Card</div>
            <div className={styles.address1Container}>
              Visa ************
              {order.creditCard.slice(order.creditCard.length - 4)} Ex.{" "}
              {order.expirationDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
