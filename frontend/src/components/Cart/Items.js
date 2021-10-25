import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ItemComponent from "./Item";
import {
  consolidateCartItems,
  setAllCartItems,
} from "../../store/cartItems.js";
import { setAllOrderItems } from "../../store/orderItems.js";
// import styles from "./Cart.module.css";

export default function Items({ shoppingCartItems }) {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(setAllCartItems());
    await dispatch(setAllOrderItems());
  }, [dispatch]);

  return (
    <div>
      {shoppingCartItems?.map((item, i) => {
        return (
          <div key={i}>
            <ItemComponent item={item} i={i} />
          </div>
        );
      })}
    </div>
  );
}
