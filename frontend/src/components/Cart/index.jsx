import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion/dist/framer-motion";
import Select from "react-select";

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

  const options = [
    { value: 1, label: "Qty 1" },
    { value: 2, label: "Qty 2" },
    { value: 3, label: "Qty 3" },
    { value: 4, label: "Qty 4" },
    { value: 5, label: "Qty 5" },
  ];

  const theme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "rgba(0,0,0,.0625)",
      primary: "rgba(0,0,0,.75)",

      // All possible overrides
      // primary: '#2684FF',
      // primary75: '#4C9AFF',
      // primary50: '#B2D4FF',
      // primary25: '#DEEBFF',

      // danger: '#DE350B',
      // dangerLight: '#FFBDAD',

      // neutral0: 'hsl(0, 0%, 100%)',
      // neutral5: 'hsl(0, 0%, 95%)',
      // neutral10: 'hsl(0, 0%, 90%)',
      // neutral20: 'hsl(0, 0%, 80%)',
      // neutral30: 'hsl(0, 0%, 70%)',
      // neutral40: 'hsl(0, 0%, 60%)',
      // neutral50: 'hsl(0, 0%, 50%)',
      // neutral60: 'hsl(0, 0%, 40%)',
      // neutral70: 'hsl(0, 0%, 30%)',
      // neutral80: 'hsl(0, 0%, 20%)',
      // neutral90: 'hsl(0, 0%, 10%)',
    },
    // Other options you can use
    // borderRadius: 4
    // baseUnit: 4,
    // controlHeight: 38
    // menuGutter: baseUnit * 2
  });

  const handleQuantityChange = (value) => {
    console.log('Value changed to -->', value);
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
          <div className={styles.homeIconContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>

          <div className={styles.leftTopTitle}>
            Ship To Home:{" "}
            <span className={styles.itemCountNotBold}>2 Items</span>
          </div>
        </div>

        <div className={styles.leftBottomContainer}>
          <div className={styles.leftBottom1stContainer}>
            <div className={styles.productImageContainer}>
              <img
                className={styles.productImage}
                src="https://media.gamestop.com/i/gamestop/11098255_gold/iPhone-11-Pro-Max-64GB---Unlocked-gold?$pdp2x$"
                alt="shoppingCartImage"
              />
            </div>

            <div className={styles.quantityContainer}>
              <Select
                placeholder={`Qty ${1}`}
                options={options}
                theme={theme}
                defaultValue={options[0]}
                onChange={(e) => handleQuantityChange(e.value)}
              />
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
            <input checked className={styles.fakeRadio} type="radio" /> 
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
