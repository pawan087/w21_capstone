import React, { useState } from "react";
// import { editOrder } from "../../store/orders";
import { Redirect, useHistory } from "react-router-dom";
import styles from "./Orders.module.css";
import { useDispatch, useSelector } from "react-redux";
import NewOrderItems from "./NewOrderItems";
import NonEditableNewOrderItems from "./NonEditableNewOrderItems";
import { setOrderItemsToEdit } from "../../store/orderItems";

export default function OrderComponent({ usersOrdersAndItems }) {
  const dispatch = useDispatch();
  const [bool, setBool] = useState(false);
  const history = useHistory();
  let orderItemIds = [];
  usersOrdersAndItems.forEach((orderAndItem) => {
    orderItemIds.push(orderAndItem.id);
  });

  const handleSubmit = async (order, j) => {
    let arr = usersOrdersAndItems;
    await dispatch(setOrderItemsToEdit({ arr }));
    history.push(`/edit/${order.id}/${j + 1}`);
  };

  return (
    <div>
      {usersOrdersAndItems
        .map((order, j) => {
          return (
            <div key={j}>
              <h4 className={styles.orderTitle}>Order {j + 1}</h4>

              {order?.items.map((item, i) => {
                return (
                  <NonEditableNewOrderItems item={item} i={i} order={order} />
                );
              })}

              <h4>Shipping Address: </h4>

              {!bool && (
                <p>
                  {order.address1}, {order.address2}
                </p>
              )}

              <button onClick={() => handleSubmit(order, j)}>Edit Order</button>

              {"     "}

              <button>Cancel Order</button>
            </div>
          );
        })
        .reverse()}
    </div>
  );
}

// {bool && (
//   <div>
//     <div>
//       <input
//         onChange={(e) => setAddress1(e.target.value)}
//         type="text"
//         defaultValue={order.address1}
//       ></input>
//     </div>
//     <div>
//       <input
//         onChange={(e) => setAddress2(e.target.value)}
//         type="text"
//         defaultValue={order.address2}
//       ></input>
//     </div>
//   </div>
// )}
