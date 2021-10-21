import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createCartItem } from "../../store/cartItems.js";

export default function EditQuantity({ item }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const [quantity, setQuantity] = useState(item.quantity);
  const [loading, setLoading] = useState(false);
  const [editBool, setEditBool] = useState(false);

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleSubmit = (e, idToDelete) => {
    e.preventDefault();

    setLoading(true);

    // dispatch(deleteCartItem({ idToDelete }));

    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <>
      <li>Quantity: {!editBool && quantity}</li>

      {editBool && (
        <input
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          min={0}
          type="number"
        />
      )}

      {!editBool && <button onClick={() => setEditBool(true)}>Edit</button>}

      {"     "}

      {editBool && (
        <button onClick={(e) => handleSubmit(e, item.id)}>Update</button>
      )}

      <li>Total: ${formatter.format(+item.product.price * quantity)}</li>
    </>
  );
}
