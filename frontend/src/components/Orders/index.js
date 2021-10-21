import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Orders.module.css";
import { setAllCartItems } from "../../store/cartItems.js";
import { setAllProducts } from "../../store/products.js";
import { setAllOrders } from "../../store/orders.js";
import OrderComponent from "./OrderComponent";

export default function Orders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const cartItems = useSelector((state) => state.cartItems);
  const products = useSelector((state) => state.products);
  const orders = useSelector((state) => state.orders);

  const usersOrders = orders?.filter((order) => {
    return order.userId === +user.id;
  });

  let usersOrdersAndItems = [];

  usersOrders?.forEach((order) => {
    const orderItems = [];

    cartItems?.forEach((item) => {
      if (order.items.includes(item.id)) {
        orderItems.push(item);
      }
    });

    let obj = {
      ...order,
      items: orderItems,
    };

    delete obj.userId;

    obj.items?.forEach((item) => {
      delete item.userId;
      let itemsAndProducts = [];
      let id1 = item.productId;
      products?.forEach((product) => {
        let id2 = product.id;
        if (+id1 === +id2) {
          itemsAndProducts.push({ product: product, quantity: item.quantity });
        }
      });

      obj.itemsArr = itemsAndProducts;
      delete obj.items;
      obj.items = obj.itemsArr;
      delete obj.itemsArr;
    });

    usersOrdersAndItems.push(obj);
  });

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

      <OrderComponent usersOrdersAndItems={usersOrdersAndItems} />
    </div>
  );
}
