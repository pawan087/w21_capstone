import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";

export default function Cart() {
  const user = useSelector((state) => state.session.user);

  console.log('USER CART', user.cart)

  if (!user) return <Redirect to="/" />;

  return (
    <div>
      <h2 className={styles.title}>Shopping Cart Page</h2>

      <h4 className={styles.cartTitle}>{user.username}'s Cart</h4>
    </div>
  );
}
