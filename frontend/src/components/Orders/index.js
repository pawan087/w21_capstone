import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Orders.module.css";
import { setAllCartItems } from "../../store/cartItems.js";
import { setAllProducts } from "../../store/products.js";
import { setAllOrders } from "../../store/orders.js";

export default function Orders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const cartItems = useSelector((state) => state.cartItems);
  const products = useSelector((state) => state.products);
  const orders = useSelector((state) => state.orders);

  const usersCartItems = cartItems?.filter((cartItem) => {
    return cartItem.userId === user.id;
  });

  //   const shoppingCartItems = [];

  //   usersCartItems?.forEach((cartItem) => {
  //     let id1 = cartItem.productId;

  //     products?.forEach((product) => {
  //       let id2 = product.id;

  //       if (id1 === id2) {
  //         let item = {
  //           ...cartItem,
  //           product: product,
  //         };

  //         delete item.productId;
  //         delete item.userId;

  //         shoppingCartItems.push(item);
  //       }
  //     });
  //   });

  useEffect(() => {
    dispatch(setAllProducts());
    dispatch(setAllCartItems());
    dispatch(setAllOrders());
  }, [dispatch]);

  if (!user) return <Redirect to="/" />;

  return (
    <div>
      <h2 className={styles.title}>Orders Page</h2>

      <h4 className={styles.ordersTitle}>{user.username}'s Past Orders</h4>
    </div>
  );
}
