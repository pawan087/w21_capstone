import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { FaCheck } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FormField } from "react-form-input-fields";
import "react-form-input-fields/dist/index.css";
import ReactLoading from "react-loading";

import { motion } from "framer-motion/dist/framer-motion";
import * as sessionActions from "../../store/session";
import { updateProfile } from "../../store/session";
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
  const [warningFirstName, setWarningFirstName] = useState(false);
  const [warningLastName, setWarningLastName] = useState(false);
  const [warningAddress1, setWarningAddress1] = useState(false);
  const [warningAddress2, setWarningAddress2] = useState(false);
  const [warningPhone, setWarningPhone] = useState(false);
  const [loader, setLoader] = useState(false);

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const pay = async () => {
    setLoader(true);

    const func = () => {
      setLoader(false);
      setPayed(true);
    };

    await setTimeout(() => func(), 500);
  };

  let regExp = /[a-zA-Z]/g;
  let legitCard = false;
  let legitExpirationDate = false;

  if (regExp.test(creditCardNumber)) {
    legitCard = false;
    // setPayed(false);
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

  const ccNum = (e) => {
    setCreditCardNumber(e.target.value);

    setPayed(false);
  };

  const expNum = (e) => {
    if (!e.target.value.includes("/")) {
      let newExpNum;

      if (e.target.value.length === 4) {
        newExpNum = e.target.value.slice(0, 2) + "/" + e.target.value.slice(2);
        setExpirationDate(newExpNum);
        return;
      }
    }

    setExpirationDate(e.target.value);
    setPayed(false);
  };

  const usersCartItems = cartItems?.filter((cartItem) => {
    return cartItem.userId === user?.id;
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
    setLoader(true);

    if (!firstName) {
      setWarningFirstName(true);
    } else {
      setWarningFirstName(false);
    }

    if (!lastName) {
      setWarningLastName(true);
    } else {
      setWarningLastName(false);
    }

    if (!address1) {
      setWarningAddress1(true);
    } else {
      setWarningAddress1(false);
    }

    if (!address2) {
      setWarningAddress2(true);
    } else {
      setWarningAddress2(false);
    }

    if (!phone) {
      setWarningPhone(true);
    } else {
      setWarningPhone(false);
    }

    if (firstName && lastName && address1 && address2 && phone) {
      if (!defaultOption) {
        setShowEdit(false);
      } else {
        // EDIT USER
        await dispatch(
          updateProfile({
            id: user.id,
            firstName,
            lastName,
            phone,
            address1,
            address2,
          })
        );

        await dispatch(sessionActions.restoreUser());
        setDefaultOption(false);
        setShowEdit(false);
      }
    }

    setLoader(false);
  };

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  useEffect(() => {
    dispatch(setAllOrderItems());
  }, [dispatch]);

  const handleOnChange = (value) => {
    setLastName(value);
  };

  const handleOnChange2 = (value) => {
    setFirstName(value);
  };

  const handleOnChange3 = (value) => {
    setAddress1(value);
  };

  const handleOnChange4 = (value) => {
    setAddress2(value);
  };

  const clear = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setAddress1(user.address1);
    setAddress2(user.address2);
    setPhone(user.phone);
    setWarningFirstName(false);
    setWarningLastName(false);
    setWarningAddress1(false);
    setWarningAddress2(false);
    setWarningPhone(false);
    setShowEdit(false);
    setDefaultOption(false);
  };

  const demoCard = () => {
    if (creditCardNumber === "4024007103939509" && expirationDate === "09/25") {
      setPayed(true);
      return;
    }

    setCreditCardNumber("4024007103939509");
    setExpirationDate("09/25");
    pay();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.outerContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.left1stContainer}>Shipping</div>

          {!showEdit && (
            <div className={styles.left2ndContainer}>
              <div className={styles.userInfo}>
                <div className={styles.username}>
                  {firstName} {lastName}
                </div>
                <div className={styles.address1}>{address1}</div>
                <div className={styles.address2}>{address2}</div>
                <div className={styles.phoneNumber}>{phone}</div>
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
                  <FormField
                    type="text"
                    standard="labeleffect"
                    value={firstName}
                    keys={"firstName"}
                    effect={"effect_9"}
                    handleOnChange={(value) => handleOnChange2(value)}
                    placeholder={"First Name"}
                  />
                  {warningFirstName && (
                    <div className={styles.warning}>First name is required</div>
                  )}
                </div>

                <div className={styles.editLastNameInput}>
                  <FormField
                    type="text"
                    standard="labeleffect"
                    value={lastName}
                    keys={"lastName"}
                    effect={"effect_9"}
                    handleOnChange={(value) => handleOnChange(value)}
                    placeholder={"Last Name"}
                  />
                  {warningLastName && (
                    <div className={styles.warning}>Last name is required</div>
                  )}
                </div>
              </div>

              <div className={styles.left2ndContainer22ndContainer}>
                <div className={styles.editAddress1Input}>
                  <FormField
                    type="text"
                    standard="labeleffect"
                    value={address1}
                    keys={"address1"}
                    effect={"effect_9"}
                    handleOnChange={(value) => handleOnChange3(value)}
                    placeholder={"Street Address"}
                  />

                  {warningAddress1 && (
                    <div className={styles.warning2}>
                      Street address is required
                    </div>
                  )}
                </div>

                <div className={styles.editAddress2Input}>
                  <FormField
                    type="text"
                    standard="labeleffect"
                    value={address2}
                    keys={"address2"}
                    effect={"effect_9"}
                    handleOnChange={(value) => handleOnChange4(value)}
                    placeholder={"City, State, ZIP"}
                  />
                  {warningAddress2 && (
                    <div className={styles.warning2}>
                      City/State/Zip is required
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.left2ndContainer23rdContainer}>
                <div className={styles.editPhoneInput}>
                  <FormField
                    type="text"
                    standard="labeleffect"
                    value={phone}
                    keys={"phone"}
                    effect={"effect_9"}
                    handleOnChange={(value) => setPhone(value)}
                    placeholder={"Phone Number"}
                  />
                  {warningPhone && (
                    <div className={styles.warning2}>
                      Phone number is required
                    </div>
                  )}
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

                <div
                  onClick={() => setDefaultOption(!defaultOption)}
                  className={styles.setAsDefaultLabel}
                >
                  Set as default shipping address
                </div>
              </div>

              <div className={styles.left2ndContainer25thContainer}>
                <div onClick={clear} className={styles.cancellation}>
                  Cancel
                </div>

                <div
                  onClick={() => handleSubmit2()}
                  className={styles.saveEditButton}
                >
                  SAVE & CONTINUE
                </div>
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

          {!payed && (
            <>
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
                      onChange={(e) => ccNum(e)}
                      onFocus={(e) => handleInputFocus(e)}
                      placeholder={"Card number"}
                      type="tel"
                      value={creditCardNumber}
                      name="number"
                    />

                    {true && (
                      <p onClick={() => demoCard()} className={styles.demoCard}>
                        Pay with Demo Card
                      </p>
                    )}
                  </div>

                  <div className={styles.rightInputContainer}>
                    <input
                      maxlength="5"
                      placeholder={"MM/YY"}
                      type="tel"
                      value={expirationDate}
                      name="expiration"
                      onChange={(e) => expNum(e)}
                      onFocus={(e) => handleInputFocus(e)}
                    />
                    {false && (
                      <p className={styles.invalidExp}>
                        Invalid expiration date.
                      </p>
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
            </>
          )}

          {payed && (
            <div className={styles.confirmedPaymentContainer}>
              <div className={styles.left8thRightContainer}>
                {true && (
                  <div className={styles.fakeCC}>
                    <Cards
                      number={creditCardNumber}
                      name={`${user.firstName} ${user.lastName}`}
                      expiry={expirationDate}
                      focused={focus}
                    />
                  </div>
                )}
              </div>

              <div className={styles.ccInfoContainer}>
                <div className={styles.ccEnding}>
                  Ending in{" "}
                  {creditCardNumber.substr(creditCardNumber.length - 4)}
                </div>
                <div className={styles.ccExpiration}>
                  Expires {expirationDate}
                </div>
              </div>

              <div onClick={() => setPayed(false)} className={styles.changeCC}>
                Change Payment
              </div>
            </div>
          )}
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
                <div className={styles.placeOrderButton2}>Place Order</div>
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
              Cart{" "}
              <span className={styles.lighterLabel}>
                ({shoppingCartItems.length}{" "}
                {shoppingCartItems.length === 1 ? "item" : "items"})
              </span>{" "}
              {false && (
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
              )}
            </div>
          </div>

          {shoppingCartItems.length === 1 && (
            <div className={styles.right8thContainer}>
              <div className={styles.cartItemImageContainer}>
                <img
                  className={styles.cartItemImage}
                  src={shoppingCartItems[0]?.product?.images[0]}
                  alt="cartItemImage"
                />
              </div>
              <span className={styles.productName}>
                {shoppingCartItems[0]?.product?.name}
              </span>

              <span className={styles.productPrice}>
                ${shoppingCartItems[0]?.product?.price}
              </span>
            </div>
          )}

          {shoppingCartItems.length > 1 && (
            <div className={styles.right8thContainer2}>
              {shoppingCartItems?.slice(0, 5)?.map((cartItem, i) => {
                return (
                  <div key={i}>
                    <div className={styles.cartItemImageContainer2}>
                      <img
                        className={styles.cartItemImage}
                        src={cartItem.product.images[0]}
                        alt="cartItemImage"
                      />
                    </div>
                  </div>
                );
              })}

              {shoppingCartItems.length > 5 && (
                <div className={styles.plusTag}>
                  +{shoppingCartItems.length - 5}
                </div>
              )}
            </div>
          )}
        </div>
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
    </motion.div>
  );
}
