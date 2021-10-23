import React from "react";
import styles from "./Orders.module.css";

export default function SubOrderComponent({ item, i }) {
  return (
    <div key={i}>
      <h4>{item?.product?.name}</h4>

      <img
        alt="productImage"
        className={styles.image}
        src={item?.product?.images[0]}
      ></img>

      <h5>
        Order Status: Shipped{" "}
        <a href={`/products/${item?.product?.id}`}>(Leave a review)</a>
      </h5>

      <h5>Quantity: {item.quantity}</h5>
    </div>
  );
}
