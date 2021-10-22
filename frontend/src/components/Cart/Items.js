import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import styles from "./Cart.module.css";
import ItemComponent from "./Item";
import { consolidateCartItems } from "../../store/cartItems.js";

export default function Items({ shoppingCartItems }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

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

  useEffect(() => {
    if (arr?.length > 0) {
      arr?.forEach(async (duplicate, i) => {
        await dispatch(
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
