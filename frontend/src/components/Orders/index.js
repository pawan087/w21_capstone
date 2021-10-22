import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Orders.module.css";
// import { setAllCartItems } from "../../store/cartItems.js";
import { setAllOrderItems } from "../../store/orderItems.js";
import { setAllProducts } from "../../store/products.js";
import { setAllOrders } from "../../store/orders.js";
import OrderComponent from "./OrderComponent";

export default function Orders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  // const cartItems = useSelector((state) => state.cartItems);
  const orderItems = useSelector((state) => state.orderItems);
  const products = useSelector((state) => state.products);
  const orders = useSelector((state) => state.orders);

  const usersOrders = orders?.filter((order) => {
    return order.userId === +user.id;
  });

  let usersOrdersAndItems = [];

  usersOrders?.forEach((order) => {
    const orderItemsArr = [];

    orderItems?.forEach((item) => {
      if (order.items.includes(item.id)) {
        orderItemsArr.push(item);
      }
    });

    let obj = {
      ...order,
      allItemsArr: [...orderItemsArr],
    };

    delete obj.userId;

    let itemsAndProducts = [];

    obj.allItemsArr?.forEach((item) => {
      delete item.userId;

      let id1 = item.productId;

      products?.forEach((product) => {
        let id2 = product.id;

        if (+id1 === +id2) {
          itemsAndProducts.push({ product: product, quantity: item.quantity });
        }
      });

      obj.itemsArr = itemsAndProducts;

      obj.items = obj.itemsArr;
      delete obj.itemsArr;
      delete obj.allItemsArr;
    });

    usersOrdersAndItems.push(obj);
  });

  useEffect(() => {
    dispatch(setAllProducts());
    // dispatch(setAllCartItems());
    dispatch(setAllOrderItems());
    dispatch(setAllOrders());
  }, [dispatch]);

  if (!user) return <Redirect to="/" />;

  return (
    <div>
      <h2 className={styles.title}>Orders Page</h2>

      <h4 className={styles.ordersTitle}>{user?.username}'s Past Orders</h4>

      <OrderComponent usersOrdersAndItems={usersOrdersAndItems} />
    </div>
  );
}
