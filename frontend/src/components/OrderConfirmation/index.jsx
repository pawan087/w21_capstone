import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { FaCheck } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

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
  const [creditCardNumber, setCreditCardNumber] = useState();
  const [expirationDate, setExpirationDate] = useState("");
  const [focus, setFocus] = useState();
  const [payed, setPayed] = useState(false);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [address1, setAddress1] = useState(user?.address1);
  const [address2, setAddress2] = useState(user?.address2);
  const [phone, setPhone] = useState(user?.phone);
  const [showEdit, setShowEdit] = useState(false);
  const [defaultOption, setDefaultOption] = useState(false);

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const pay = () => {
    setPayed(true);
  };

  let regExp = /[a-zA-Z]/g;
  let legitCard = false;
  let legitExpirationDate = false;

  if (regExp.test(creditCardNumber)) {
    legitCard = false;
  } else {
    if (creditCardNumber.length === 16) {
      legitCard = true;
    }
  }

  let regExp2 = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

  if (regExp2.test(expirationDate)) {
    legitExpirationDate = true;
  } else {
    legitExpirationDate = false;
  }

  const usersCartItems = cartItems?.filter((cartItem) => {
    return cartItem.userId === user.id;
  });

  const shoppingCartItems = [];
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

        shoppingCartItems.push(item);
        subtotal += cartItem.quantity * product.price;
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

  const clear = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setAddress1(user.address1);
    setAddress2(user.address2);
    setPhone(user.phone);
    setShowEdit(false);
  };
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.left1stContainer}>Shipping</div>

          {!showEdit && (
            <div className={styles.left2ndContainer}>
              <div className={styles.userInfo}>
                <div className={styles.username}>
                  {user?.firstName} {user?.lastName}
                </div>
                <div className={styles.address1}>{user?.address1}</div>
                <div className={styles.address2}>{user?.address2}</div>
                <div className={styles.phoneNumber}>{user?.phone}</div>
              </div>

              <div
                onClick={() => setShowEdit(true)}
                className={styles.editLink}
              >
                Edit
              </div>
            </div>
          )}

          {showEdit && (
            <div className={styles.left2ndContainer2}>
              <div className={styles.left2ndContainer21stContainer}>
                <div className={styles.editFirstNameInput}>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeHolder="First Name"
                  />
                </div>

                <div className={styles.editLastNameInput}>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeHolder="Last Name"
                  />
                </div>
              </div>

              <div className={styles.left2ndContainer22ndContainer}>
                <div className={styles.editAddress1Input}>
                  <input
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    placeHolder="Street Address"
                    type="text"
                  />
                </div>

                <div className={styles.editAddress2Input}>
                  <input
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    placeHolder="City, State, Zip"
                    type="text"
                  />
                </div>
              </div>

              <div className={styles.left2ndContainer23rdContainer}>
                <div className={styles.editPhoneInput}>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeHolder="Phone Number"
                    type="text"
                  />
                </div>
              </div>

              <div className={styles.left2ndContainer24thContainer}>
                <div
                  onClick={() => setDefaultOption(!defaultOption)}
                  className={styles.left9thLeftTopLeftContainer}
                >
                  {defaultOption && (
                    <FaCheck style={{ display: "inline", color: "red" }} />
                  )}
                </div>

                <div className={styles.setAsDefaultLabel}>
                  Set as default shipping address
                </div>
              </div>

              <div className={styles.left2ndContainer25thContainer}>
                <div onClick={clear} className={styles.cancellation}>
                  Cancel
                </div>

                <div className={styles.saveEditButton}>SAVE & CONTINUE</div>
              </div>
            </div>
          )}

          <div className={styles.left3rdContainer}>
            <div className={styles.shippingNowTitle}>Shipping Now</div>

            <div className={styles.productImagesContainer}>
              {shoppingCartItems?.map((cartItem, i) => {
                return (
                  <div key={i}>
                    <div className={styles.productImageContainer}>
                      <img
                        className={styles.img}
                        src={cartItem?.product?.images[0]}
                        alt={"confirmProductPic"}
                      />
                    </div>
                  </div>
                );
              })}
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
                <input
                  maxlength="16"
                  onChange={(e) => setCreditCardNumber(e.target.value)}
                  onFocus={(e) => handleInputFocus(e)}
                  placeholder={"Card number"}
                  type="tel"
                  name="number"
                />
                {false && (
                  <p className={styles.invalidCC}>
                    Invalid credit card number.
                  </p>
                )}
              </div>

              <div className={styles.rightInputContainer}>
                <input
                  maxlength="5"
                  placeholder={"MM/YY"}
                  type="tel"
                  name="expiration"
                  onChange={(e) => setExpirationDate(e.target.value)}
                  onFocus={(e) => handleInputFocus(e)}
                />
                {false && (
                  <p className={styles.invalidExp}>Invalid expiration date.</p>
                )}
              </div>
            </div>

            <div className={styles.left8thRightContainer}>
              {creditCardNumber && (
                <div className={styles.creditCardPicContainer}>
                  <Cards
                    number={creditCardNumber}
                    name={`${user.firstName} ${user.lastName}`}
                    expiry={expirationDate}
                    focused={focus}
                  />
                </div>
              )}
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
                <div className={styles.address12}>{address1}</div>
                <div className={styles.address22}>{address2}</div>
              </div>
            </div>

            <div className={styles.left9thRightContainer}>
              {legitCard && legitExpirationDate && (
                <div className={styles.saveButtonContainer}>
                  <button onClick={pay} className={styles.saveButton}>
                    SAVE & CONTINUE
                  </button>
                </div>
              )}

              {(!legitCard || !legitExpirationDate) && (
                <div className={styles.saveButtonContainer2}>
                  <div className={styles.saveButton2}>SAVE & CONTINUE</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.right1stContainer}>
            <div className={styles.subtotalLabel}>Subtotal</div>

            <div className={styles.subtotalValue}>
              ${formatter.format(subtotal)}
            </div>
          </div>

          <div className={styles.right2ndContainer}>
            <div className={styles.shippingLabel}>Shipping & Handling</div>

            <div className={styles.fakeShippingValue}>FREE</div>
          </div>

          <div className={styles.right3rdContainer}>
            <div className={styles.taxLabel}>Tax</div>

            <div className={styles.taxValue}>
              ${formatter.format(subtotal * 0.0825)}
            </div>
          </div>

          <div className={styles.right4thContainer}>
            <div className={styles.totalLabel}>Total</div>

            <div className={styles.totalValue}>
              ${formatter.format(subtotal * 0.0825 + subtotal)}
            </div>
          </div>

          <div className={styles.spacer} />

          <div className={styles.right5thContainer}>
            <div className={styles.placeOrderButtonContainer}>
              {payed && (
                <button className={styles.placeOrderButton}>Place Order</button>
              )}
              {!payed && (
                <button className={styles.placeOrderButton2}>
                  Place Order
                </button>
              )}
            </div>
          </div>

          <div className={styles.right6thContainer}>
            <div className={styles.policyLabel}>
              By tapping Place Order, you agree to GameStop's{" "}
              <span className={styles.underline}>Privacy Policy</span> and
              <span className={styles.underline}> Conditions of Use</span>.
            </div>
          </div>

          <div className={styles.right7thContainer}>
            <div className={styles.cartLabel}>
              Cart <span className={styles.lighterLabel}>(2 items)</span>{" "}
              <div className={styles.angleDown}>
                <FaAngleDown
                  style={{
                    display: "inline",
                    color: "rgba(0,0,0,.5)",
                    height: "20px",
                    width: "20px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>

          {false && (
            <div className={styles.right8thContainer}>
              <div className={styles.cartItemImageContainer}>
                <img
                  className={styles.cartItemImage}
                  src={
                    "https://media.gamestop.com/i/gamestop/10178670/Microsoft-Xbox-Elite-Series-2-Wireless-Controller-Black?$thumb$"
                  }
                  alt="cartItemImage"
                />
              </div>
              <span className={styles.productName}>
                Xbox One Series 2 Elite Wireless Controller
              </span>

              <span className={styles.productPrice}>$144.99</span>
            </div>
          )}

          {true && (
            <div className={styles.right8thContainer2}>
              <div className={styles.cartItemImageContainer2}>
                <img
                  className={styles.cartItemImage}
                  src={
                    "https://media.gamestop.com/i/gamestop/10178670/Microsoft-Xbox-Elite-Series-2-Wireless-Controller-Black?$thumb$"
                  }
                  alt="cartItemImage"
                />
              </div>

              <div className={styles.cartItemImageContainer2}>
                <img
                  className={styles.cartItemImage}
                  src={
                    "https://media.gamestop.com/i/gamestop/10178670/Microsoft-Xbox-Elite-Series-2-Wireless-Controller-Black?$thumb$"
                  }
                  alt="cartItemImage"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
