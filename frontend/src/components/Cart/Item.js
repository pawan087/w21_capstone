import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Cart.module.css";
import { deleteCartItem, editCartItem } from "../../store/cartItems";

export default function ItemComponent({ item, i }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity);
  const [editBool, setEditBool] = useState(false);

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleSubmit = (e, idToDelete) => {
    e.preventDefault();

    setLoading2(true);

    dispatch(deleteCartItem({ idToDelete }));

    setTimeout(() => setLoading2(false), 1000);
  };

  const handleSubmit3 = (e, idToDelete) => {
    e.preventDefault();

    setEditBool(false);

    setLoading2(true);

    dispatch(deleteCartItem({ idToDelete }));

    setTimeout(() => setLoading2(false), 1000);
  };

  const handleSubmit2 = async (e, id, originalQuantity) => {
    if (quantity === originalQuantity) {
      setEditBool(false);
      return;
    }

    e.preventDefault();

    setLoading(true);

    dispatch(editCartItem({ id, quantity }));

    await setTimeout(() => setLoading(false), 1000);

    setEditBool(false);
  };

  return (
    <div>
      <h4>Item {i + 1}</h4>

      <a href={`/products/${item.product.id}`}>{item.product.name}</a>

      <div>
      <li>Quantity: {!editBool && item.quantity}</li>

        {editBool && (
          <input
            onChange={(e) => setQuantity(e.target.value)}
            defaultValue={item.quantity}
            min={0}
            type="number"
          />
        )}

        {!editBool && <button onClick={() => setEditBool(true)}>Edit</button>}

        {"     "}

        {editBool && (
          <>
            <button onClick={(e) => handleSubmit2(e, item.id, item.quantity)}>
              Update
            </button>

            {"     "}

            <button onClick={(e) => handleSubmit3(e, item.id)}>Remove</button>

            {"     "}

            <button onClick={() => setEditBool(false)}>Cancel</button>
          </>
        )}

        <li>Total: ${formatter.format(+item.product.price * item.quantity)}</li>

        {loading && <span>Cart Updated</span>}
      </div>

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

      {loading2 && <p>Cart Updating...</p>}

      <br />
      <br />
    </div>
  );
}
