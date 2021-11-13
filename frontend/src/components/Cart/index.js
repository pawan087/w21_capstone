import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion/dist/framer-motion";
import Select from "react-select";
import Rodal from "rodal";
import ReactLoading from "react-loading";

import Footer from "../Footer";
import { setAllOrderItems } from "../../store/orderItems.js";
import {
  setAllCartItems,
  deleteCartItem,
  editCartItem,
} from "../../store/cartItems.js";
import { setAllProducts } from "../../store/products.js";
import styles from "./Cart.module.css";

export default function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const cartItems = useSelector((state) => state.cartItems);
  const products = useSelector((state) => state.products);

  const [removeConfirmation, setRemoveConfirmation] = useState(false); // set to false, true for testing
  const [loader, setLoader] = useState(false);
  const [productName, setProductName] = useState();
  const [productId, setProductId] = useState();
  const [cartItemId, setCartItemId] = useState();

  const showRemoveConfirmationModal = (name, id, id2) => {
    setProductName(name);
    setProductId(id);
    setCartItemId(id2);
    setRemoveConfirmation(true);

    return productId;
  };

  const hideRemoveConfirmationModal = () => {
    setRemoveConfirmation(false);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const usersCartItems = cartItems?.filter((cartItem) => {
    return cartItem?.userId === user?.id;
  });

  const shoppingCartItems = [];
  let num = 0;
  let subtotal = 0;

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

        num += cartItem.quantity;
        subtotal += product.price * cartItem.quantity;

        shoppingCartItems.push(item);
      }
    });
  });

  const options = [
    { value: 1, label: "Qty 1" },
    { value: 2, label: "Qty 2" },
    { value: 3, label: "Qty 3" },
    { value: 4, label: "Qty 4" },
    { value: 5, label: "Qty 5" },
  ];
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(setAllProducts());
      await dispatch(setAllOrderItems());
      await dispatch(setAllCartItems());

      setLoad(true);
    })();
  }, [user, dispatch]);

  if (!load) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.loaderCotnainer}
      >
        <ReactLoading
          type={"spin"}
          color={"rgba(0,0,0,.75)"}
          height={"0px"}
          width={"57.5px"}
        />
      </motion.div>
    );
  }

  if (!user) return <Redirect to="/" />;

  const removeFromCart = async (e) => {
    e.preventDefault();

    setLoader(true);

    await dispatch(deleteCartItem({ idToDelete: cartItemId }));

    await dispatch(setAllCartItems());

    hideRemoveConfirmationModal();

    setTimeout(() => setLoader(false), 250);
  };

  const updateQuantity = async (id, val) => {
    setLoader(true);
    await dispatch(editCartItem({ id, quantity: val }));
    await dispatch(setAllCartItems());
    setLoader(false);

    // window.location.reload(false);
  };

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.backContainer}
    >
      {shoppingCartItems.length > 0 && (
        <div className={styles.cartOuterContainer}>
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
                <span className={styles.itemCountNotBold}>
                  {num} {num === 1 ? "Item" : "Items"}
                </span>
              </div>
            </div>

            {shoppingCartItems?.map((cartItem, i) => {
              return (
                <div key={i} className={styles.leftBottomContainer}>
                  <div className={styles.leftBottom1stContainer}>
                    <div
                      onClick={() =>
                        history.push(`/products/${cartItem.product.id}`)
                      }
                      className={styles.productImageContainer}
                    >
                      <img
                        className={styles.productImage}
                        src={cartItem.product.images[0]}
                        alt="shoppingCartImage"
                      />
                    </div>

                    <div className={styles.quantityContainer}>
                      <Select
                        options={options}
                        theme={theme}
                        defaultValue={options[cartItem?.quantity - 1]}
                        onChange={(e) =>
                          updateQuantity(cartItem.id, e.value, e)
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.leftBottom2ndContainer}>
                    <div className={styles.leftBottom2ndTopContainer}>
                      <div
                        onClick={() =>
                          history.push(`/products/${cartItem.product.id}`)
                        }
                        className={styles.cartProductName}
                      >
                        {cartItem?.product?.name}
                      </div>
                      <div className={styles.cartProductBrandName}>
                        {cartItem?.product?.Brand?.name}
                      </div>
                    </div>
                    <div className={styles.leftBottom2ndBottomContainer}>
                      <div className={styles.removeFromCartLink}>
                        <div
                          onClick={() =>
                            showRemoveConfirmationModal(
                              cartItem.product.name,
                              cartItem.product.id,
                              cartItem.id
                            )
                          }
                          className={styles.removeLink}
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.leftBottom3rdContainer}>
                    <input
                      defaultChecked
                      className={styles.fakeRadio}
                      type="radio"
                    />
                     
                    <div className={styles.fakeFreeShipping}>
                      FREE shipping{" "}
                      <span className={styles.shippingDetail}>
                        on $10+ orders
                      </span>
                      <span className={styles.fakeArrive}>
                        Arrives in 2- 4 days
                      </span>
                    </div>
                  </div>
                  {cartItem.quantity > 1 && (
                    <div className={styles.leftBottom4thContainer}>
                      <div className={styles.priceTag}>
                        $
                        {formatter.format(
                          cartItem.product.price * cartItem.quantity
                        )}{" "}
                        <span className={styles.singlePrice}>
                          ${cartItem.product.price}{" "}
                          <span className={styles.smaller}>each</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {cartItem.quantity === 1 && (
                    <div className={styles.leftBottom4thContainer}>
                      <div className={styles.priceTag}>
                        ${cartItem.product.price}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className={styles.cartRightContainer}>
            <div className={styles.right1stContainer}>
              <div className={styles.rightTitle}>ORDER SUMMARY</div>
            </div>
            <div className={styles.right2ndContainer}>
              <div className={styles.right2nd1stContainer}>
                <div className={styles.subtotalLabel}>
                  Subtotal{" "}
                  <span className={styles.itemCount}>
                    ({num} {num === 1 ? "Item" : "Items"})
                  </span>
                </div>

                <div className={styles.subtotalAmount}>
                  ${formatter.format(subtotal)}
                </div>
              </div>

              <div className={styles.right2nd2ndContainer}>
                <div className={styles.shippingLabel}>Shipping & Handling</div>

                <div className={styles.fakeShippingCost}>FREE</div>
              </div>

              <div className={styles.right2nd3rdContainer}>
                <div className={styles.estimatedTaxLabel}>Estimated Tax</div>

                <div className={styles.estimatedTaxAmount}>
                  ${formatter.format(subtotal * 0.0825)}
                </div>
              </div>
            </div>
            <div className={styles.right3rdContainer}>
              <div className={styles.estimatedTotalLabel}>Estimated Total</div>

              <div className={styles.estimatedTotalAmount}>
                ${formatter.format(subtotal * 0.0825 + subtotal)}
              </div>
            </div>
            <div className={styles.right4thContainer}>
              <button
                onClick={() => history.push("/confirm")}
                className={styles.button}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}

      {shoppingCartItems.length === 0 && (
        <div className={styles.emptyCartContainer}>
          Your Shopping Cart Is Empty
        </div>
      )}

      <Rodal
        closeOnEsc={true}
        enterAnimation={"zoom"}
        leaveAnimation={"fade"}
        width={500}
        height={285}
        visible={removeConfirmation}
        onClose={hideRemoveConfirmationModal}
      >
        <div className={styles.deleteReviewConfirmationModal}>
          <div className={styles.firstContainer}>
            <div className={styles.modalTitle}>REMOVE PRODUCT?</div>
          </div>

          <div className={styles.onePointFiveContainer}>
            <div className={styles.confirmationText}>
              Are you sure you want to remove the following product from the
              cart?
            </div>
          </div>

          <div className={styles.secondContainer}>
            <div className={styles.reviewUsername}>{productName}</div>
          </div>

          <div className={styles.thirdContainer}>
            <div className={styles.cancelButtonContainer}>
              <button
                onClick={hideRemoveConfirmationModal}
                className={styles.cancelButton}
              >
                CANCEL
              </button>
            </div>

            <div className={styles.yesButtonContainer}>
              <button
                onClick={(e) => removeFromCart(e)}
                className={styles.yesButton}
              >
                YES
              </button>
            </div>
          </div>
        </div>
      </Rodal>

      {loader && (
        <div className={styles.loader}>
          <ReactLoading
            type={"bubbles"}
            color={"rgb(231,35,13)"}
            height={"0px"}
            width={"120px"}
          />
        </div>
      )}

      <Footer />
    </motion.div>
  );
}
