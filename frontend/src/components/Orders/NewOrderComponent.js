import { useHistory } from "react-router-dom";

import NonEditableNewOrderItems from "./NonEditableNewOrderItems";
// import { setOrderItemsToEdit } from "../../store/orderItems";
import styles from "./Orders.module.css";

export default function OrderComponent({ usersOrdersAndItems }) {
  const history = useHistory();

  let orderItemIds = [];
  usersOrdersAndItems.forEach((orderAndItem) => {
    orderItemIds.push(orderAndItem.id);
  });

  const handleSubmit = async (order, j) => {
    let arr = usersOrdersAndItems;

    let str = "";

    arr[j]?.allItemsArr.forEach((x) => {
      str += `${x.id}_`;
    });

    history.push(
      `/edit/${order.id}/${j + 1}/${str}/${order.address1}/${order.address2}`
    );
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
                  <NonEditableNewOrderItems
                    key={i}
                    item={item}
                    i={i}
                    order={order}
                  />
                );
              })}

              <h4>Shipping Address: </h4>

              <p>
                {order.address1}, {order.address2}
              </p>

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
