import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Orders.module.css";
import { useHistory } from "react-router-dom";
import { editOrderItem, setAllOrderItems } from "../../store/orderItems";
import { setAllOrders } from "../../store/orders.js";

export default function NewOrderItems({ order, item, i }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [bool, setBool] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const orderItems = useSelector((state) => state.orderItems);

  const handleSubmit = () => {
    setBool(true);
  };

  const handleSubmit2 = () => {
    setBool(false);
  };

  const handleSubmit3 = (e) => {
    e.preventDefault();

    setQuantity(quantity);
    if (quantity === item.quantity) {
      return;
    }
    setAddress1(address1);
    setAddress2(address2);

    orderItems?.forEach((orderItem) => {
      if (
        orderItem.productId === item.product.id &&
        orderItem.quantity === item.quantity
      ) {
        dispatch(editOrderItem({ orderItemId: orderItem.id, quantity }));
        history.push("/orders");
      }
    });
  };

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
