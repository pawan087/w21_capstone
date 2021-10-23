import React, { useState } from "react";
// import { editOrder } from "../../store/orders";
import { Redirect, useHistory } from "react-router-dom";
import styles from "./Orders.module.css";
import NewOrderItems from "./NewOrderItems";
import NonEditableNewOrderItems from "./NonEditableNewOrderItems";

export default function OrderComponent({ usersOrdersAndItems }) {
  const [bool, setBool] = useState(false);
  const history = useHistory();

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

              <button
                onClick={() => history.push(`/edit/${order.id}/${j + 1}`)}
              >
                Edit Order
              </button>

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
