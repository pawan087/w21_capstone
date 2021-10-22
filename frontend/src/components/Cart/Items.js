import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { deleteCartItem, editCartItem } from "../../store/cartItems";
import ItemComponent from "./Item";
import {
  setAllCartItems,
  consolidateCartItems,
} from "../../store/cartItems.js";

export default function Items({ shoppingCartItems }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  // const [loading, setLoading] = useState(false);
  // const [loading2, setLoading2] = useState(false);
  // const [quantity, setQuantity] = useState();
  // const [editBool, setEditBool] = useState(false);

  // const formatter = new Intl.NumberFormat("en-US", {
  //   minimumFractionDigits: 2,
  //   maximumFractionDigits: 2,
  // });

  // const handleSubmit = (e, idToDelete) => {
  //   e.preventDefault();

  //   setLoading2(true);

  //   dispatch(deleteCartItem({ idToDelete }));

  //   setTimeout(() => setLoading2(false), 1000);
  // };

  // const handleSubmit2 = async (e, id) => {
  //   e.preventDefault();

  //   setLoading(true);

  //   dispatch(editCartItem({ id, quantity }));

  //   await setTimeout(() => setLoading(false), 1000);

  //   setEditBool(false);
  // };

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
