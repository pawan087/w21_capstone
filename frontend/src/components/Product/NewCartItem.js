import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { createCartItem } from "../../store/cartItems.js";

function NewCartItem({ productId }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    if (!user) return <Redirect to="/" />;

    e.preventDefault();

    setLoading(true);

    dispatch(
      createCartItem({ userId: user.id, productId: +productId, quantity })
    );

    setTimeout(() => setLoading(false), 1000);
  };

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
