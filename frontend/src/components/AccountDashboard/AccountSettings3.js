import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import { FaPowerOff, FaPhoneAlt } from "react-icons/fa";
import { FormField } from "react-form-input-fields";
import ReactLoading from "react-loading";
import Rodal from "rodal";

import * as sessionActions from "../../store/session";
import Footer from "../../components/Footer";
import styles from "./styles.module.css";
import "@szhsin/react-menu/dist/index.css";
import "react-form-input-fields/dist/index.css";
import "rodal/lib/rodal.css";

export default function AccountDashboard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);

  const [firstName, setFirstName] = useState(user?.firstName);
  const [emptyFirstNameWarning, setEmptyFirstNameWarning] = useState(false);
  const [lastName, setLastName] = useState(user?.lastName);
  const [emptyLastNameWarning, setEmptyLastNameWarning] = useState(false);
  const [address1, setAddress1] = useState(user?.address1);
  const [emptyAddress1Warning, setEmptyAddress1Warning] = useState(false);
  const [address2, setAddress2] = useState(user?.address2);
  const [emptyAddress2Warning, setEmptyAddress2Warning] = useState(false);
  const [phone, setPhone] = useState(user?.phone);
  const [emptyPhoneWarning, setEmptyPhoneWarning] = useState(false);
  const [load, setLoad] = useState(false);
  const [loader2, setLoader2] = useState(false);
  // const [sameInformationWarning, setSameInformationWarning] = useState(false);
  const [showSuccessfulPasswordChange, setShowSuccessfulPasswordChange] =
    useState(false);

  const hide = () => {
    setShowSuccessfulPasswordChange(false);
  };

  const changeFirstName = (x) => {
    if (emptyFirstNameWarning) {
      setEmptyFirstNameWarning(false);
    }

    setFirstName(x);
  };

  const changeLastName = (x) => {
    if (emptyLastNameWarning) {
      setEmptyLastNameWarning(false);
    }

    setLastName(x);
  };

  const changeAddress1 = (x) => {
    if (emptyAddress1Warning) {
      setEmptyAddress1Warning(false);
    }

    setAddress1(x);
  };

  const changeAddress2 = (x) => {
    if (emptyAddress2Warning) {
      setEmptyAddress2Warning(false);
    }

    setAddress2(x);
  };

  const changePhone = (x) => {
    if (emptyPhoneWarning) {
      setEmptyPhoneWarning(false);
    }

    setPhone(x);
  };

  const clear = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setAddress1(user.address1);
    setAddress2(user.address2);
    setPhone(user.phone);
    setEmptyPhoneWarning(false);
    setEmptyLastNameWarning(false);
    setEmptyFirstNameWarning(false);
    setEmptyAddress1Warning(false);
    setEmptyAddress2Warning(false);
  };

  const issueWarnings = () => {
    if (firstName.length === 0) {
      setEmptyFirstNameWarning(true);
    }

    if (lastName.length === 0) {
      setEmptyLastNameWarning(true);
    }

    if (address1.length === 0) {
      setEmptyAddress1Warning(true);
    }

    if (address2.length === 0) {
      setEmptyAddress2Warning(true);
    }

    if (phone.length === 0) {
      setEmptyPhoneWarning(true);
    }

    return;
  };

  const saveAddressEdit = async () => {
    if (
      firstName === user.firstName &&
      lastName === user.lastName &&
      address1 === user.address1 &&
      address2 === user.address2 &&
      phone === user.phone
    ) {
      return;
    }

    setLoader2(true);

    await dispatch(
      sessionActions.updateProfile({
        id: user.id,
        phone,
        address1,
        address2,
        firstName,
        lastName,
      })
    );

    await dispatch(sessionActions.restoreUser());

    setShowSuccessfulPasswordChange(true);

    setLoader2(false);
  };

  useEffect(() => {
    (async () => {
      await dispatch(sessionActions.restoreUser());

      setLoad(true);
    })();
  }, [dispatch]);

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

  const showOrderHistory = () => {
    history.push("/orders");
  };

  if (!user) return <Redirect to="/" />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.preHeader}></div>

      <div className={styles.dashboardHeaderContainer}>
        <div className={styles.dashboardHeader}>
          <div className={styles.headerWelcome}>Welcome, {user?.firstName}</div>
          <div className={styles.logoutLink}>LOG OUT</div>
        </div>
      </div>

      <div className={styles.mainContainer2}>
        <div className={styles.widthContainer2}>
          {
            /* LEFT MENU */
            <div className={styles.mainLeftContainer}>
              <div className={styles.mainLeftTopContainer}>
                <div className={styles.firstContainer}>
                  <div className={styles.powerIcon}>
                    <FaPowerOff
                      style={{
                        height: "20px",
                        width: "20px",
                        display: "inline",
                        color: "rgb(223,79,70)",
                      }}
                    />
                  </div>

                  <div className={styles.accountHeader}>MY ACCOUNT</div>
                </div>

                <div className={styles.secondContainer}>ACCOUNT SETTINGS</div>

                <div className={styles.thirdContainer}>
                  <span onClick={() => history.push("/account/1")}>
                    Personal Data
                  </span>
                </div>

                <div className={styles.fourthContainer}>
                  <span onClick={() => history.push("/account/2")}>
                    Password
                  </span>
                </div>

                <div className={styles.fifthContainer}>
                  <span>Address Book</span>
                </div>

                <div className={styles.secondContainer}>MY ORDERS</div>

                <div className={styles.sixthContainer}>
                  <span onClick={() => showOrderHistory()}>Order History</span>
                </div>

                <div className={styles.fifthContainer}></div>
              </div>

              <div className={styles.mainLeftBottomContainer2}>
                <div className={styles.bottom1stContainer}>CUSTOMER CARE</div>

                <div className={styles.bottom2ndContainer}>
                  MON-SAT: 8 AM - 10 PM CT
                </div>

                <div className={styles.bottom3rdContainer}>
                  SUN: 8 AM - 8PM CT
                </div>

                <div className={styles.bottom4thContainer}>
                  <div className={styles.phoneIcon}>
                    <FaPhoneAlt
                      style={{
                        height: "20px",
                        width: "20px",
                        display: "inline",
                        color: "rgba(0,0,0,.5)",
                      }}
                    />
                  </div>

                  <div className={styles.phoneNumber}>Call 1-800-883-8895</div>
                </div>
              </div>
            </div>
          }

          {
            /* RIGHT - ACCOUNT SETTINGS SECTION */
            <div className={styles.personalDataContainer2}>
              <div className={styles.pd1stContainer2}>Edit Default Address</div>

              {false && (
                <div className={styles.namesContainer}>
                  <div
                    className={
                      emptyFirstNameWarning
                        ? styles.fNamelNameInputContainerRed
                        : styles.fNamelNameInputContainer
                    }
                  >
                    <FormField
                      type="text"
                      standard="labeleffect"
                      value={firstName}
                      keys={"firstName"}
                      className={styles.firstNameInput}
                      effect={"effect_9"}
                      handleOnChange={(value) => changeFirstName(value)}
                      placeholder={"First Name"}
                    />
                    {emptyFirstNameWarning && (
                      <span className={styles.requiredLabel}>
                        This is a required field.
                      </span>
                    )}
                  </div>
                  <div
                    className={
                      emptyLastNameWarning
                        ? styles.fNamelNameInputContainerRed
                        : styles.fNamelNameInputContainer
                    }
                  >
                    <FormField
                      type="text"
                      standard="labeleffect"
                      value={lastName}
                      keys={"lastName"}
                      className={styles.firstNameInput}
                      effect={"effect_9"}
                      handleOnChange={(value) => changeLastName(value)}
                      placeholder={"Last Name"}
                    />
                    {emptyLastNameWarning && (
                      <span className={styles.requiredLabel}>
                        This is a required field.
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className={styles.address1Container}>
                <div
                  className={
                    emptyAddress1Warning
                      ? styles.address1InputContainerRed
                      : styles.address1InputContainer
                  }
                >
                  <FormField
                    type="text"
                    standard="labeleffect"
                    value={address1}
                    keys={"address1"}
                    className={styles.firstNameInput}
                    effect={"effect_9"}
                    handleOnChange={(value) => changeAddress1(value)}
                    placeholder={"Street Address"}
                  />
                  {emptyAddress1Warning && (
                    <span className={styles.requiredLabel}>
                      This is a required field.
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.address2Container}>
                <div
                  className={
                    false
                      ? styles.passwordInputContainerRed
                      : styles.address1InputContainer
                  }
                >
                  <FormField
                    type="text"
                    standard="labeleffect"
                    value={address2}
                    keys={"address2"}
                    className={styles.firstNameInput}
                    effect={"effect_9"}
                    handleOnChange={(value) => changeAddress2(value)}
                    placeholder={"City, State, ZIP"}
                  />
                  {emptyAddress2Warning && (
                    <span className={styles.requiredLabel}>
                      This is a required field.
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.phoneContainer}>
                <div
                  className={
                    false
                      ? styles.passwordInputContainerRed
                      : styles.address1InputContainer
                  }
                >
                  <FormField
                    type="text"
                    standard="labeleffect"
                    value={phone}
                    keys={"phone"}
                    className={styles.firstNameInput}
                    effect={"effect_9"}
                    handleOnChange={(value) => changePhone(value)}
                    placeholder={"Phone Number"}
                  />
                  {emptyPhoneWarning && (
                    <span className={styles.requiredLabel}>
                      This is a required field.
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.editNameBottomContainer2}>
                {firstName.length > 0 &&
                  lastName.length > 0 &&
                  address1.length > 0 &&
                  address2.length > 0 &&
                  phone.length > 0 &&
                  !(
                    firstName === user.firstName &&
                    lastName === user.lastName &&
                    address1 === user.address1 &&
                    address2 === user.address2 &&
                    phone === user.phone
                  ) && (
                    <div
                      onClick={() => saveAddressEdit()}
                      className={styles.button12}
                    >
                      SAVE
                    </div>
                  )}
                {(!(
                  firstName.length > 0 &&
                  lastName.length > 0 &&
                  address1.length > 0 &&
                  address2.length > 0 &&
                  phone.length > 0
                ) ||
                  (firstName === user.firstName &&
                    lastName === user.lastName &&
                    address1 === user.address1 &&
                    address2 === user.address2 &&
                    phone === user.phone)) && (
                  <div
                    onClick={() => issueWarnings()}
                    className={styles.button32}
                  >
                    SAVE
                  </div>
                )}
                <div onClick={() => clear()} className={styles.button22}>
                  CANCEL
                </div>
              </div>
            </div>

            /* End Right Order History */
          }
        </div>
      </div>

      {loader2 && (
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

      <Rodal
        closeOnEsc={true}
        enterAnimation={"zoom"}
        leaveAnimation={"fade"}
        width={1145}
        height={55}
        visible={showSuccessfulPasswordChange}
        onClose={hide}
      >
        <div className={styles.reviewSubmissionConfirmationContainer}>
          Your address has been updated!
        </div>
      </Rodal>
    </motion.div>
  );
}
