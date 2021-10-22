import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styles from "./OrderConfirmation.module.css";
import { setAllOrderItems } from "../../store/orderItems.js";
import { createOrder } from "../../store/orders";

export default function OrderConfirmation() {
  const dispatch = useDispatch();
  const params = useParams();

  const orderItems = useSelector((state) => state.orderItems);
  const user = useSelector((state) => state.session.user);

  const handleSubmit = async () => {
    let arr = [];

    for (let i = 0; i < params.id; i++) {
      let item = orderItems[orderItems.length - i - 1];
      arr.push(item.id);
    }

    await dispatch(
      createOrder({
        userId: user.id,
        items: arr,
        address1: user.address1,
        address2: user.address2,
      })
    );

    return;
  };

  useEffect(() => {
    dispatch(setAllOrderItems());
  }, [dispatch]);

  return (
    <div>
      <h4 className={styles.cartTitle}>Are you sure?</h4>

      <button onClick={handleSubmit}>Confirm</button>

      {"     "}

      <button>Cancel</button>
    </div>
  );
}
