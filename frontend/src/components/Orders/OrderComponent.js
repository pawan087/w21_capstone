import React from "react";
import styles from "./Orders.module.css";

export default function OrderComponent({ usersOrdersAndItems }) {
  // console.log(usersOrdersAndItems)
  return (
    <div>
      {usersOrdersAndItems
        .map((order, j) => {
          return (
            <div key={j}>
              <h4 className={styles.orderTitle}>Order {j + 1}</h4>

              {order?.items.map((item, i) => {
                return (
                  <div key={i}>
                    <h4>{item?.product?.name}</h4>

                    <img
                      alt="productImage"
                      className={styles.image}
                      src={item?.product?.images[0]}
                    ></img>

                    <h5>Quantity: {item.quantity}</h5>
                  </div>
                );
              })}

              <h4>Shipping Address: </h4>

              <p>
                {order.address1}, {order.address2}
              </p>
            </div>
          );
        })
        .reverse()}
    </div>
  );
}
