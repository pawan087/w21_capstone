import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Cart.module.css";
import EditQuantity from "./EditQuantity";
import { deleteCartItem } from "../../store/cartItems";

export default function Items({ shoppingCartItems }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState();
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleSubmit = (e, idToDelete) => {
    e.preventDefault();

    setLoading(true);

    dispatch(deleteCartItem({ idToDelete }));

    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div>
      {shoppingCartItems?.map((item, i) => {
        return (
          <div key={i}>
            <h4>Item {i + 1}</h4>

            <a href={`/products/${item.product.id}`}>{item.product.name}</a>

            <EditQuantity item={item} />

            <br />

            <img
              className={styles.image}
              alt="productImage"
              src={item.product.images[0]}
            ></img>

            <br />
            <br />

            <button onClick={(e) => handleSubmit(e, item.id)}>
              Remove from Cart
            </button>

            {loading && <p>Cart Updating...</p>}

            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}
