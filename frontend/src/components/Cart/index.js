import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import {
  setAllCartItems,
  consolidateCartItems,
} from "../../store/cartItems.js";
import { setAllProducts } from "../../store/products.js";
import Items from "./Items";

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

  let sumQuantity = 0;
  let idToDelete1;
  let idToDelete2;
  let productId;

  let arr = [];

  shoppingCartItems?.forEach((item1, i) => {
    let id1 = item1.product.id;
    for (let j = i + 1; j < shoppingCartItems.length; j++) {
      let item2 = shoppingCartItems[j];

      let id2 = item2.product.id;

      if (id1 === id2) {
        idToDelete1 = item1.id;
        idToDelete2 = item2.id;
        productId = item2.product.id;
        sumQuantity += item2.quantity + item1.quantity;
        arr.push({ idToDelete1, idToDelete2, productId, sumQuantity });
      }
    }
  });

  if (arr?.length > 0) {
    arr?.forEach((duplicate, i) => {
      dispatch(
        consolidateCartItems({
          idToDelete1: duplicate.idToDelete1,
          idToDelete2: duplicate.idToDelete2,
          sumQuantity: duplicate.sumQuantity,
          productId: duplicate.productId,
          userId: user.id,
        })
      );
    });
  }

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
