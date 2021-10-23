import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Orders.module.css";
import { useHistory } from "react-router-dom";
import { editOrderItem, setAllOrderItems } from "../../store/orderItems";
import { setAllOrders } from "../../store/orders.js";

export default function NewOrderItems({ item, i }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [bool, setBool] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const orderItems = useSelector((state) => state.orderItems);

  return (
    <div key={i}>
      <h4>{item?.product?.name}</h4>

      <img
        alt="productImage"
        className={styles.image}
        src={item?.product?.images[0]}
      ></img>

      <h5>Order Status: Processing</h5>

      <h5>Quantity: {!bool && item.quantity}</h5>
    </div>
  );
}
