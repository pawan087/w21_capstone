// OLD CART PAGE USED FOR TESTING BACKEND

/* import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Items from "./Items";
import { setAllOrderItems } from "../../store/orderItems.js";
import { setAllCartItems, emptyCart } from "../../store/cartItems.js";
import { setAllProducts } from "../../store/products.js";
import styles from "./Cart.module.css";

export default function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const cartItems = useSelector((state) => state.cartItems);
  const products = useSelector((state) => state.products);

  const usersCartItems = cartItems?.filter((cartItem) => {
    return cartItem?.userId === user?.id;
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

  const handleSubmit = () => {
    history.push("/confirm");
  };

  useEffect(() => {
    dispatch(setAllProducts());
    dispatch(setAllOrderItems());
    dispatch(setAllCartItems());
  }, [dispatch]);

  if (!user) return <Redirect to="/" />;

  const handleSubmit2 = async () => {
    let idsToDeleteArr = [];

    shoppingCartItems?.forEach((item) => {
      idsToDeleteArr.push(item.id);
    });

    await dispatch(emptyCart({ idsToDeleteArr }));

    await dispatch(setAllCartItems());
  };

  return (
    <>
      <h2 className={styles.title}>Shopping Cart Page</h2>

      <h4 className={styles.cartTitle}>{user.username}'s Cart</h4>

      {shoppingCartItems?.length === 0 && <h5>This cart is empty.</h5>}

      <Items shoppingCartItems={shoppingCartItems} />

      {shoppingCartItems?.length > 1 && (
        <button onClick={handleSubmit2}>Empty Cart</button>
      )}

      {shoppingCartItems.length !== 0 && (
        <div>
          <h4 className={styles.cartTitle}>Place Your Order</h4>

          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      <br />
    </>
  );
} */