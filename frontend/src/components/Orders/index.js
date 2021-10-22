import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Orders.module.css";
import { setAllOrderItems } from "../../store/orderItems.js";
import { setAllProducts } from "../../store/products.js";
import { setAllOrders, deleteOrders } from "../../store/orders.js";
import OrderComponent from "./OrderComponent";
import NewOrderComponent from "./NewOrderComponent";

export default function Orders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const orderItems = useSelector((state) => state.orderItems);
  const products = useSelector((state) => state.products);
  const orders = useSelector((state) => state.orders);

  const [bool, setBool] = useState();

  function AddMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }

  let curTime = new Date();
  let pastTime = AddMinutesToDate(curTime, 10); // <-- Change to appropriate time deemed for 'order processing' (ie. 1 minute)

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

    obj?.allItemsArr?.forEach((item) => {
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
    });

    usersOrdersAndItems.push(obj);
  });

  const previousOrders = [];
  const currentOrders = [];

  usersOrdersAndItems?.forEach((obj) => {
    let updatedTime = new Date(obj.updatedAt);

    if (updatedTime < pastTime) {
      previousOrders.push(obj);
    } else {
      currentOrders.push(obj);
    }
  });

  // let content = document.querySelector(".clearOrderHistoryMenu");

  const handleClickOutside = () => {
    // console.log("CONTENT", content.contains(event.target));
    if (bool) {
      setBool(false);
    }
  };

  useEffect(() => {
    dispatch(setAllProducts());
    dispatch(setAllOrderItems());
    dispatch(setAllOrders());
  }, [dispatch]);

  if (!user) return <Redirect to="/" />;

  const openMenu = () => {
    setBool(true);
  };

  const closeMenu = () => {
    setBool(false);
  };

  const clearPastOrderHistory = async () => {
    let idsToDeleteArr = [];

    previousOrders?.forEach((order) => {
      idsToDeleteArr.push(order.id);
    });

    await dispatch(deleteOrders({ idsToDeleteArr }));

    await dispatch(setAllOrders());
  };

  return (
    <div onClick={handleClickOutside}>
      <h2 className={styles.title}>Orders Page</h2>

      <h4 className={styles.ordersTitle}>{user?.username}'s Orders</h4>

      <h4 className={styles.ordersTitle}>Current Orders</h4>

      {currentOrders?.length === 0 && (
        <h5>No orders are currently processing</h5>
      )}

      {currentOrders?.length > 0 && (
        <NewOrderComponent usersOrdersAndItems={currentOrders} />
      )}
      <h4 className={styles.ordersTitle}>Previous Orders</h4>

      {previousOrders?.length === 0 && <h5>You have no previous orders</h5>}

      <OrderComponent usersOrdersAndItems={previousOrders} />

      <div className="clearOrderHistoryMenu">
        {previousOrders?.length > 0 && !bool && (
          <h4 onClick={openMenu} className={styles.orderTitle}>
            Clear Order History
          </h4>
        )}

        {bool && (
          <h4 onClick={closeMenu} className={styles.orderTitle}>
            Order History
          </h4>
        )}

        {bool && <button onClick={clearPastOrderHistory}>Clear</button>}
      </div>
    </div>
  );
}
