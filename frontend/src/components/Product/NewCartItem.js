import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  createCartItem,
  setAllCartItems,
  editCartItem,
} from "../../store/cartItems.js";

function NewCartItem({ productId }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const cartItems = useSelector((state) => state.cartItems);

  const usersCartItems = cartItems?.filter((cartItem) => {
    return cartItem.userId === user.id && cartItem.productId === +productId;
  });

  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) return <Redirect to="/" />;

    setLoading(true);

    if (usersCartItems.length > 0) {
      dispatch(
        editCartItem({
          id: +usersCartItems[0]?.id,
          quantity: +usersCartItems[0]?.quantity + +quantity,
        })
      );
    } else {
      await dispatch(
        createCartItem({ userId: user.id, productId: +productId, quantity })
      );
    }

    await dispatch(setAllCartItems());

    setTimeout(() => setLoading(false), 1000);
  };

  useEffect(() => {
    const ayeSink = async () => {
      await dispatch(setAllCartItems());
    };

    ayeSink();

    return () => setLoading(false);
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <br />

      <label>
        Quantity
        {"     "}
        <input
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          min={1}
          type="number"
        />
      </label>

      {"     "}

      <button type="submit">Add to Cart</button>

      {loading && <p>Cart Updated</p>}
    </form>
  );
}

export default NewCartItem;
