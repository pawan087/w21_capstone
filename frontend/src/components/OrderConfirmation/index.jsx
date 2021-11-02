import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { FaCheck } from "react-icons/fa";

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
    <>
      <div className={styles.outerContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.left1stContainer}>Shipping</div>

          <div className={styles.left2ndContainer}>
            <div className={styles.userInfo}>
              <div className={styles.username}>Pawanpreet Chahal</div>
              <div className={styles.address1}>61 Arthur Road</div>
              <div className={styles.address2}>Martinez, CA 94553</div>
              <div className={styles.phoneNumber}>408 836 1037</div>
            </div>

            <div className={styles.editLink}>Edit</div>
          </div>

          <div className={styles.left3rdContainer}>
            <div className={styles.shippingNowTitle}>Shipping Now</div>

            <div className={styles.productImagesContainer}>
              <div className={styles.productImageContainer}>
                <img
                  className={styles.img}
                  src={
                    "https://media.gamestop.com/i/gamestop/11114627_graphite/iPhone-12-Pro-512GB---Unlocked-graphite?$pdp2x$"
                  }
                  alt={"confirmProductPic"}
                />
              </div>

              <div className={styles.productImageContainer}>
                <img
                  className={styles.img}
                  src={
                    "https://media.gamestop.com/i/gamestop/11114627_graphite/iPhone-12-Pro-512GB---Unlocked-graphite?$pdp2x$"
                  }
                  alt={"confirmProductPic"}
                />
              </div>
            </div>
          </div>

          <div className={styles.left4thContainer}>
            <div className={styles.arrivesContainer}>
              <input checked className={styles.fakeRadio} type="radio" /> 
              <div className={styles.fakeArrives}>Arrives in 2- 4 days</div>
            </div>

            <div className={styles.freeLabel}>FREE</div>
          </div>

          <div className={styles.left5thContainer}>
            <div className={styles.paymentTitle}>Payment</div>
          </div>

          <div className={styles.left6thContainer}>
            <div className={styles.creditCardTitle}>
              <input checked className={styles.fakeRadio} type="radio" /> 
              <div className={styles.ccTitle}>Credit Cart</div>
            </div>
          </div>

          <div className={styles.left7thContainer}>
            <div className={styles.creditCardDetails}>
              Visa, Mastercard, AMEX, Discover
            </div>
          </div>

          <div className={styles.left8thContainer}>
            <div className={styles.left8thLeftContainer}>
              <div className={styles.leftInputContainer}>
                <input placeholder={"Card number"} type="tel" name="number" />
              </div>

              <div className={styles.rightInputContainer}>
                <input placeholder={"MM/YY"} type="tel" name="expiration" />
              </div>
            </div>

            <div className={styles.left8thRightContainer}>
              <div className={styles.creditCardPicContainer}>
                CREDIT CARD PICTURE HERE
              </div>
            </div>
          </div>

          <div className={styles.left9thContainer}>
            <div className={styles.left9thLeftContainer}>
              <div className={styles.left9thLeftTopContainer}>
                <div className={styles.left9thLeftTopLeftContainer}>
                  <FaCheck style={{ display: "inline", color: "red" }} />
                </div>
                <div className={styles.left9thLeftTopRightContainer}>
                  Billing address as same as shipping
                </div>
              </div>

              <div className={styles.left9thLeftBottomContainer}>
                <div className={styles.address12}>61 Arthur Road</div>
                <div className={styles.address22}>Martinez, CA 94553</div>
              </div>
            </div>

            <div className={styles.left9thRightContainer}>
              <div className={styles.saveButtonContainer}>
                <button className={styles.saveButton}>SAVE & CONTINUE</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.right1stContainer}>
            <div className={styles.subtotalLabel}>Subtotal</div>

            <div className={styles.subtotalValue}>$153.98</div>
          </div>

          <div className={styles.right2ndContainer}>
            <div className={styles.shippingLabel}>Shipping & Handling</div>

            <div className={styles.fakeShippingValue}>FREE</div>
          </div>

          <div className={styles.right3rdContainer}>
            <div className={styles.taxLabel}>Tax</div>

            <div className={styles.taxValue}>$16.18</div>
          </div>

          <div className={styles.right4thContainer}>
            <div className={styles.totalLabel}>Total</div>

            <div className={styles.totalValue}>$170.14</div>
          </div>

          <div className={styles.right5thContainer}>
            <div className={styles.placeOrderButtonContainer}>
              <button className={styles.placeOrderButton}>Place Order</button>
            </div>
          </div>

          <div className={styles.right6thContainer}>
            <div className={styles.policyLabel}>Policy blah blah blah</div>
          </div>

          <div className={styles.right7thContainer}>
            <div className={styles.cartLabel}>
              Cart <p className={styles.lighterLabel}>(2 items)</p>
            </div>
          </div>

          <div className={styles.right8thContainer}>
            <div className={styles.cartItemImageContainer}>
              <img
                className={styles.cartItemImage}
                src={""}
                alt="cartItemImage"
              />

              <img
                className={styles.cartItemImage}
                src={""}
                alt="cartItemImage"
              />
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}
