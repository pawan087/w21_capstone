import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion/dist/framer-motion";
import { FaPowerOff, FaPhoneAlt } from "react-icons/fa";
import ReactLoading from "react-loading";
import Rodal from "rodal";
import { FormField } from "react-form-input-fields";

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

  const [firstName, setFirstName] = useState(user.firstName);
  const [emptyFirstNameWarning, setEmptyFirstNameWarning] = useState(false);
  const [lastName, setLastName] = useState(user.lastName);
  const [address1, setAddress1] = useState(user.address1);
  const [address2, setAddress2] = useState(user.address2);
  const [phone, setPhone] = useState(user.phone);
  const [load, setLoad] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [showSuccessfulPasswordChange, setShowSuccessfulPasswordChange] =
    useState(false);

  const hide = () => {
    setShowSuccessfulPasswordChange(false);
  };

  const changeFirstName = (x) => {
    setFirstName(x);
  };

  const changeLastName = (x) => {
    setLastName(x);
  };

  const changeAddress1 = (x) => {
    setAddress1(x);
  };

  const changeAddress2 = (x) => {
    setAddress2(x);
  };

  const changePhone = (x) => {
    setPhone(x);
  };

  const clear = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setAddress1(user.address1);
    setAddress2(user.address2);
    setPhone(user.phone);
  };

  const issueWarnings = () => {
    return;
  };

  useEffect(() => {
    (async () => {
      await dispatch(sessionActions.restoreUser());

      setLoad(true);
    })();
  }, [dispatch]);

  if (!load) {
    return (
      <div className={styles.loaderCotnainer}>
        <ReactLoading
          type={"spin"}
          color={"rgba(0,0,0,.75)"}
          height={"0px"}
          width={"57.5px"}
        />
      </div>
    );
  }

  const showOrderHistory = () => {
    history.push("/orders");
  };

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
              <div className={styles.pd1stContainer2}>Edit Address</div>

              <div className={styles.namesContainer}>
                <div
                  className={
                    false
                      ? styles.passwordInputContainerRed
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
                  {false && (
                    <span className={styles.requiredLabel}>
                      Please fill out this field.
                    </span>
                  )}
                </div>
                <div
                  className={
                    false
                      ? styles.passwordInputContainerRed
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
                  {false && (
                    <span className={styles.requiredLabel}>
                      Please fill out this field.
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.address1Container}>
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
                    value={address1}
                    keys={"address1"}
                    className={styles.firstNameInput}
                    effect={"effect_9"}
                    handleOnChange={(value) => changeAddress1(value)}
                    placeholder={"Street Address"}
                  />
                  {false && (
                    <span className={styles.requiredLabel}>
                      Please fill out this field.
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
                  {false && (
                    <span className={styles.requiredLabel}>
                      Please fill out this field.
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
                  {false && (
                    <span className={styles.requiredLabel}>
                      Please fill out this field.
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.editNameBottomContainer2}>
                {false && (
                  <div
                    onClick={() => console.log("SAVE CHANGES")}
                    className={styles.button12}
                  >
                    SAVE
                  </div>
                )}
                {true && (
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
          Your password was updated!
        </div>
      </Rodal>
    </motion.div>
  );
}

<FormField
  type="text"
  standard="labeleffect"
  value={"firstName"}
  keys={"firstName"}
  effect={"effect_9"}
  handleOnChange={(value) => console.log(value)}
  placeholder={"First Name"}
/>;
