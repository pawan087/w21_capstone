import React from "react";
import { deleteOrder } from "../../store/orders";
import styles from "./Orders.module.css";
import { useDispatch } from "react-redux";

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

              {order?.items.map((item, i) => {
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
                      <a href={`/products/${item?.product.id}`}>
                        (Leave a review)
                      </a>
                    </h5>

                    <h5>Quantity: {item.quantity}</h5>
                  </div>
                );
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
