import React from "react";

export default function NewOrderItems() {
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

      {bool && <button onClick={(e) => handleSubmit3(e, order)}>Submit</button>}

      {"     "}

      {bool && <button onClick={handleSubmit2}>Cancel</button>}
    </div>
  );
}
