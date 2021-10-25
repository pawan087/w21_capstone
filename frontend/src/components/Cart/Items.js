import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ItemComponent from "./Item";
import {
  consolidateCartItems,
  setAllCartItems,
} from "../../store/cartItems.js";
import { setAllOrderItems } from "../../store/orderItems.js";
// import styles from "./Cart.module.css";

export default function Items() {
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

  let obj = {};

  shoppingCartItems.forEach((item) => {
    obj[item.product.id] = { ids: new Set(), quantity: 0 };
  });

  shoppingCartItems?.forEach((cartItem1, i) => {
    let id1 = cartItem1.id;
    let productId1 = cartItem1.product.id;
    let quantity1 = cartItem1.quantity;

    if (obj[productId1]) {
      obj[productId1].quantity += quantity1;
    }

    for (let j = i + 1; j < shoppingCartItems?.length; j++) {
      let cartItem2 = shoppingCartItems[j];
      let id2 = cartItem2?.id;
      let productId2 = cartItem2?.product.id;

      if (productId1 === productId2) {
        obj[productId1].ids.add(id1);
        obj[productId1].ids.add(id2);
      }
    }
  });

  console.log("\n\n\n", obj, "\n\n\n");

  useEffect(async () => {
    await dispatch(setAllCartItems());
    await dispatch(setAllOrderItems());

    // await dispatch(
    //   consolidateCartItems({
    //     idsToDeleteArr: arr2,
    //     sumQuantity: sum,
    //     productId,
    //     userId: user.id,
    //   })
    // );
  }, [dispatch]);

  return (
    <div>
      {shoppingCartItems?.map((item, i) => {
        return (
          <div key={i}>
            <ItemComponent item={item} i={i} />
          </div>
        );
      })}
    </div>
  );
}
