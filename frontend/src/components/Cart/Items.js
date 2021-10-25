import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ItemComponent from "./Item";
import { setAllCartItems } from "../../store/cartItems.js";
import { setAllOrderItems } from "../../store/orderItems.js";
// import styles from "./Cart.module.css";

export default function Items({ shoppingCartItems }) {
  const dispatch = useDispatch();

  // console.log('DO WE NEED TO MAKE THE FOLLOWING ASYNC w/ AWAIT')
  useEffect(() => {
    dispatch(setAllCartItems());
    dispatch(setAllOrderItems());
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
