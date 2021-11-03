import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import ReactLoading from "react-loading";
import Rodal from "rodal";

import {
  setAllCartItems,
  deleteCartItem,
  editCartItem,
} from "../../store/cartItems.js";
import styles from "./Cart.module.css";

export default function IndividualCartItem({ cartItem }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [qty, setQty] = useState();
  const [productName, setProductName] = useState();
  const [productId, setProductId] = useState();
  const [cartItemId, setCartItemId] = useState();
  const [removeConfirmation, setRemoveConfirmation] = useState(false); // set to false, true for testing

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const hideRemoveConfirmationModal = () => {
    setRemoveConfirmation(false);
  };

  const removeFromCart = async (e) => {
    e.preventDefault();

    setLoader(true);

    await dispatch(deleteCartItem({ idToDelete: cartItemId }));

    await dispatch(setAllCartItems());

    hideRemoveConfirmationModal();

    setTimeout(() => setLoader(false), 500);
  };

  const showRemoveConfirmationModal = (name, id, id2) => {
    setProductName(name);
    setProductId(id);
    setCartItemId(id2);
    setRemoveConfirmation(true);
  };

  const [loader, setLoader] = useState(false);
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

  const updateQuantity = async (id, val) => {
    setLoader(true);
    setQty(val);

    await dispatch(editCartItem({ id, quantity: val }));

    await dispatch(setAllCartItems());

    setLoader(false);
  };

  return (
    <>
      <div className={styles.leftBottomContainer}>
        <div className={styles.leftBottom1stContainer}>
          <div
            onClick={() => history.push(`/products/${cartItem.product.id}`)}
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
              onChange={(e) => updateQuantity(cartItem.id, e.value)}
            />
          </div>
        </div>
        <div className={styles.leftBottom2ndContainer}>
          <div className={styles.leftBottom2ndTopContainer}>
            <div
              onClick={() => history.push(`/products/${cartItem.product.id}`)}
              className={styles.cartProductName}
            >
              {cartItem?.product?.name}
            </div>
            <div className={styles.cartProductBrandName}>
              {cartItem?.product?.Brand?.name}
            </div>
          </div>
          <div className={styles.leftBottom2ndBottomContainer}>
            <div
              onClick={() =>
                showRemoveConfirmationModal(
                  cartItem.product.name,
                  cartItem.product.id,
                  cartItem.id
                )
              }
              className={styles.removeFromCartLink}
            >
              Remove
            </div>
          </div>
        </div>
        <div className={styles.leftBottom3rdContainer}>
          <input checked className={styles.fakeRadio} type="radio" /> 
          <div className={styles.fakeFreeShipping}>
            FREE shipping{" "}
            <span className={styles.shippingDetail}>on $10+ orders</span>
            <span className={styles.fakeArrive}>Arrives in 2- 4 days</span>
          </div>
        </div>
        {cartItem.quantity > 1 && (
          <div className={styles.leftBottom4thContainer}>
            <div className={styles.priceTag}>
              ${formatter.format(cartItem.product.price * cartItem.quantity)}{" "}
              <span className={styles.singlePrice}>
                ${cartItem.product.price}{" "}
                <span className={styles.smaller}>each</span>
              </span>
            </div>
          </div>
        )}

        {cartItem.quantity === 1 && (
          <div className={styles.leftBottom4thContainer}>
            <div className={styles.priceTag}>${cartItem.product.price}</div>
          </div>
        )}
      </div>
      {loader && (
        <div className={styles.loader}>
          <ReactLoading
            type={"bubbles"}
            color={"rgba(0,0,0,.75)"}
            color={"rgb(231,35,13)"}
            height={"0px"}
            width={"120px"}
          />
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
    </>
  );
}
