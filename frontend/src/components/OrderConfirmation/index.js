import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./OrderConfirmation.module.css";
import { createOrderItemsAndOrder } from "../../store/orders";
import { setAllOrderItems } from "../../store/orderItems.js";

export default function OrderConfirmation() {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const cartItems = useSelector((state) => state.cartItems);
  const orderItems = useSelector((state) => state.orderItems);
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

  const x = orderItems[orderItems?.length - 1].id;
  console.log("LAST ID", x);
  console.log("SHOPPING CART ITEMS LENGTH", shoppingCartItems?.length);

  const handleSubmit = async () => {
    await dispatch(
      createOrderItemsAndOrder({
        user,
        cartItems: shoppingCartItems,
        lastOrderId: orderItems[orderItems?.length - 1].id,
      })
    );
    history.push("/orders");
  };

  const handleSubmit2 = async () => {
    history.push("/cart");
  };

  useEffect(() => {
    dispatch(setAllOrderItems());
  }, [dispatch]);

  return (
    <div>
      <h4 className={styles.cartTitle}>Are you sure?</h4>

      <button onClick={handleSubmit}>Confirm</button>

      {"     "}

      <button onClick={handleSubmit2}>Cancel</button>
    </div>
  );
}
