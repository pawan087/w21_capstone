import React, { useState } from "react";
import { editOrder, deleteOrder } from "../../store/orders";
import styles from "./Orders.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function OrderComponent({ usersOrdersAndItems }) {
  const dispatch = useDispatch();
  const [bool, setBool] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  function AddMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }

  function DateFormat(date) {
    var days = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime =
      days + "/" + month + "/" + year + "/ " + hours + ":" + minutes;
    return strTime;
  }

  let curTime = new Date();
  let laterTime = AddMinutesToDate(curTime, 60);

  const handleSubmit = () => {
    setBool(true);
  };

  const handleSubmit2 = () => {
    setBool(false);
  };

  const handleSubmit3 = (e, order) => {
    e.preventDefault();

    console.log(order);

    // dispatch edit order
  };

  const deletePreviousOrder = async (id) => {
    await dispatch(deleteOrder({ id }));
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
                  <div key={i}>
                    <h4>{item?.product?.name}</h4>

                    <img
                      alt="productImage"
                      className={styles.image}
                      src={item?.product?.images[0]}
                    ></img>

                    <h5>
                      Order Status: Shipped{" "}
                      <a href={`/products/${item.product.id}`}>
                        (Leave a review)
                      </a>
                    </h5>

                    <h5>Quantity: {!bool && item.quantity}</h5>

                    {bool && (
                      <input
                        onChange={(e) => setQuantity(e.target.value)}
                        defaultValue={item.quantity}
                        min={0}
                        type="number"
                      />
                    )}
                  </div>
                );
              })}

              <h4>Shipping Address: </h4>

              {!bool && (
                <p>
                  {order.address1}, {order.address2}
                </p>
              )}

              {
                <button onClick={() => deletePreviousOrder(order.id)}>
                  Remove
                </button>
              }
            </div>
          );
        })
        .reverse()}
    </div>
  );
}
