import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion/dist/framer-motion";

import Items from "./Items";
import { setAllOrderItems } from "../../store/orderItems.js";
import { setAllCartItems, emptyCart } from "../../store/cartItems.js";
import { setAllProducts } from "../../store/products.js";
import styles from "./Cart.module.css";

export default function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const cartItems = useSelector((state) => state.cartItems);
  const products = useSelector((state) => state.products);

  const usersCartItems = cartItems?.filter((cartItem) => {
    return cartItem?.userId === user?.id;
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

  const handleSubmit = () => {
    history.push("/confirm");
  };

  useEffect(() => {
    dispatch(setAllProducts());
    dispatch(setAllOrderItems());
    dispatch(setAllCartItems());
  }, [dispatch]);

  if (!user) return <Redirect to="/" />;

  const handleSubmit2 = async () => {
    let idsToDeleteArr = [];

    shoppingCartItems?.forEach((item) => {
      idsToDeleteArr.push(item.id);
    });

    await dispatch(emptyCart({ idsToDeleteArr }));

    await dispatch(setAllCartItems());
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.cartOuterContainer}
    >
      <div className={styles.cartLeftContainer}>
        <div className={styles.leftTopContainer}>
          <div className={styles.homeIconContainer}>Home Icon Goes Here</div>

          <div className={styles.leftTopTitle}>Ship To Home: 2 Items</div>
        </div>

        <div className={styles.leftBottomContainer}>
          <div className={styles.leftBottom1stContainer}>
            <div className={styles.productImageContainer}>
              <img src="" alt="shoppingCartImage" />
            </div>

            <div className={styles.quantityContainer}>
              <input className={styles.inputQunatity} type="number" />
            </div>
          </div>
          <div className={styles.leftBottom2ndContainer}>
            <div className={styles.leftBottom2ndTopContainer}>
              <div className={styles.cartProductName}>
                Microsoft Xbox Series X Stereo Headset
              </div>
              <div className={styles.cartProductBrandName}>Xbox Series X</div>
            </div>
            <div className={styles.leftBottom2ndBottomContainer}>
              <div className={styles.removeFromCartLink}>Remove</div>
            </div>
          </div>
          <div className={styles.leftBottom3rdContainer}>
              <input className={styles.fakeRadio} type="radio" /> 
            <div className={styles.fakeFreeShipping}>
              FREE shipping{" "}
              <span className={styles.shippingDetail}>on $35+ orders</span>
            </div>
          </div>
          <div className={styles.leftBottom4thContainer}>
            <div className={styles.priceTag}>$88.99</div>
          </div>
        </div>
      </div>

      <div className={styles.cartRightContainer}>
        <div className={styles.right1stContainer}>
          <div className={styles.rightTitle}>ORDER SUMMARY</div>
        </div>
        <div className={styles.right2ndContainer}>
          <div className={styles.right2nd1stContainer}>
            <div className={styles.subtotalLabel}>
              Subtotal <span className={styles.itemCount}>(2 items)</span>
            </div>

            <div className={styles.subtotalAmount}>$721.96</div>
          </div>

          <div className={styles.right2nd2ndContainer}>
            <div className={styles.subtotalLabel}>Shipping & Handling</div>

            <div className={styles.fakeShippingCost}>FREE</div>
          </div>

          <div className={styles.right2nd3rdContainer}>
            <div className={styles.estimatedTaxLabel}>Estimated Tax</div>

            <div className={styles.estimatedTaxAmount}>$75.80</div>
          </div>
        </div>
        <div className={styles.right3rdContainer}>
          <div className={styles.estimatedTotalLabel}>Estimated Total</div>

          <div className={styles.estimatedTotalAmount}>$797.78</div>
        </div>
        <div className={styles.right4thContainer}>
          <button className={styles.button}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </motion.div>
  );
}
