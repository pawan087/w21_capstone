import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  editOrderItem,
  setAllOrderItems,
  deleteOrderItem,
} from "../../store/orderItems";
import styles from "./Orders.module.css";


export default function NewOrderItems({ orderItemId, orderId, item }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const orderItems = useSelector((state) => state.orderItems);

  const [bool, setBool] = useState(false);
  const [quantity, setQuantity] = useState(0);
  // const [address1, setAddress1] = useState("");
  // const [address2, setAddress2] = useState("");

  const handleSubmit = () => {
    setBool(true);
  };

  const handleSubmit2 = () => {
    setBool(false);
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();

    setQuantity(quantity);

    if (+quantity === 0 || +quantity === item.quantity) {
      return;
    }

    await dispatch(editOrderItem({ orderItemId: orderItemId, quantity }));
    await dispatch(setAllOrderItems());
    history.push("/orders");
  };

  const handleSubmit4 = () => {
    let orderItemId;

    orderItems?.forEach((orderItem) => {
      if (
        orderItem?.productId === item?.product?.id &&
        orderItem?.quantity === item?.quantity
      ) {
        orderItemId = orderItem?.id;
      }
    });

    dispatch(deleteOrderItem({ orderItemId: orderItemId, orderId: orderId }));

    history.push("/orders");
  };

  return (
    <div>
      <h4>{item?.product?.name}</h4>

      <img
        alt="productImage"
        className={styles.image}
        src={item?.product?.images[0]}
      ></img>

      <h5>Quantity: {!bool && item.quantity}</h5>

      {bool && (
        <input
          onChange={(e) => setQuantity(e.target.value)}
          defaultValue={item.quantity}
          min={0}
          type="number"
        />
      )}

      <br />
      {!bool && <button onClick={handleSubmit}>Edit</button>}

      <br />

      {bool && <button onClick={(e) => handleSubmit3(e)}>Submit</button>}

      {"     "}

      {bool && <button onClick={handleSubmit4}>Delete</button>}

      {"     "}

      {bool && <button onClick={handleSubmit2}>Cancel</button>}
    </div>
  );
}
