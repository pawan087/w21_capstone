import React, { useState } from "react";
// import { editOrder } from "../../store/orders";
import styles from "./Orders.module.css";

export default function OrderComponent({ usersOrdersAndItems }) {
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

  const func = (order) => {
    let orderDate = order.updatedAt;
    let orderDate2 = new Date(orderDate).getTime();
    // console.log(orderDate2 < curTime)
  };

  return (
    <div>
      {usersOrdersAndItems
        .map((order, j) => {
          return (
            <div key={j}>
              {func(order)}
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

                    <h5>Order Status: Processing</h5>
      
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

              {bool && (
                <div>
                  <div>
                    <input
                      onChange={(e) => setAddress1(e.target.value)}
                      type="text"
                      defaultValue={order.address1}
                    ></input>
                  </div>
                  <div>
                    <input
                      onChange={(e) => setAddress2(e.target.value)}
                      type="text"
                      defaultValue={order.address2}
                    ></input>
                  </div>
                </div>
              )}

              <br />
              {!bool && <button onClick={handleSubmit}>Edit</button>}

              {bool && (
                <button onClick={(e) => handleSubmit3(e, order)}>Submit</button>
              )}

              {"     "}

              {bool && <button onClick={handleSubmit2}>Cancel</button>}
            </div>
          );
        })
        .reverse()}
    </div>
  );
}
