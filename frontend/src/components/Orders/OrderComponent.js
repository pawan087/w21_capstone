import React from "react";
import { useDispatch } from "react-redux";

import SubOrderComponent from "./SubOrderComponent";
import { deleteOrder } from "../../store/orders";
import styles from "./Orders.module.css";

export default function OrderComponent({ usersOrdersAndItems }) {
  const dispatch = useDispatch();

  const deletePreviousOrder = async (id) => {
    await dispatch(deleteOrder({ id }));
  };

  return (
    <div>
      {usersOrdersAndItems
        ?.map((order, j) => {
          return (
            <div key={j}>
              <h4 className={styles.orderTitle}>Order {j + 1}</h4>

              {order?.items?.map((item, i) => {
                return <SubOrderComponent key={i} item={item} i={i} />;
              })}

              <h4>Shipping Address: </h4>

              <p>
                {order.address1}, {order.address2}
              </p>

              <button onClick={() => deletePreviousOrder(order.id)}>
                Remove
              </button>
            </div>
          );
        })
        .reverse()}
    </div>
  );
}
