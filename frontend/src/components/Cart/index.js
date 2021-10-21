import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { setAllCartItems } from "../../store/cartItems.js";
import { setAllProducts } from "../../store/products.js";
import Items from './Items';

export default function Cart() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const cartItems = useSelector((state) => state.cartItems);
  const products = useSelector((state) => state.products);

  const usersCartItems = cartItems?.filter((cartItem) => {
    return cartItem.userId === user.id;
  });

  const shoppingCartItems = [];

  usersCartItems?.forEach((cartItem) => {
    let id1 = cartItem.productId;

    products?.forEach((product) => {
      let id2 = product.id;

      if (id1 === id2) {
        let item = {
          ...cartItem,
          product: product,
        };

        delete item.productId;
        delete item.userId;

        shoppingCartItems.push(item);
      }
    });
  });

  useEffect(() => {
    dispatch(setAllProducts());
    dispatch(setAllCartItems());
  }, [dispatch]);

  if (!user) return <Redirect to="/" />;

  return (
    <div>
      <h2 className={styles.title}>Shopping Cart Page</h2>

      <h4 className={styles.cartTitle}>{user.username}'s Cart</h4>

      <Items shoppingCartItems={shoppingCartItems} />
    </div>
  );
}
