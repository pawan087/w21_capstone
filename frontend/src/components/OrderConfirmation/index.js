import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import { createOrderItemsAndOrder } from "../../store/orders";
import { setAllOrderItems } from "../../store/orderItems.js";
import styles from "./OrderConfirmation.module.css";

export default function OrderConfirmation() {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const cartItems = useSelector((state) => state.cartItems);
  const orderItems = useSelector((state) => state.orderItems);
  const products = useSelector((state) => state.products);
  const [creditCardNumber, setCreditCardNumber] = useState(5555555555555555);
  const [nameOnCard, setNameOnCard] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [focus, setFocus] = useState();

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

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  useEffect(() => {
    dispatch(setAllOrderItems());
  }, [dispatch]);

  return (
    <div>
      <h1>Order Confirmation Page</h1>

      <button onClick={handleSubmit}>Submit Order</button>

      <div className={styles.cardContainer}>
        <Cards
          number={creditCardNumber}
          name={"Pawan Chahal"}
          expiry={"01/20"}
          focused={focus}
        />
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={(e) => setCreditCardNumber(e.target.value)}
          onFocus={(e) => handleInputFocus(e)}
        />
      </div>
    </div>
  );
}
