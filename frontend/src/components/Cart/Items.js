import React from "react";
import styles from "./Cart.module.css";
export default function Items({ shoppingCartItems }) {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      {shoppingCartItems?.map((item, i) => {
        return (
          <div key={item.id}>
            <h4>Item {i + 1}</h4>

            <a href={`/products/${item.product.id}`}>{item.product.name}</a>

            <li>{item.product.Brand.name}</li>

            <li>Quantity: {item.quantity}</li>

            <li>
              Total: ${formatter.format(+item.product.price * item.quantity)}
            </li>

            <br />

            <img
              className={styles.image}
              alt="productImage"
              src={item.product.images[0]}
            ></img>

            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}
