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

  const [load, setLoad] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [emptyCurrentPasswordWarning, setEmptyCurrentPasswordWarning] =
    useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [emptyNewPasswordWarning, setEmptyNewPasswordWarning] = useState(false);
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [emptyConfirmNewPasswordWarning, setEmptyConfirmNewPasswordWarning] =
    useState(false);
  const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false);
  const [invalidNewPasswordWarning, setInvalidNewPasswordWarning] =
    useState(false);
  const [incorrectPasswordWarning, setIncorrectPasswordWarning] =
    useState(false);
  const [showSuccessfulPasswordChange, setShowSuccessfulPasswordChange] =
    useState(false);

  const hide = () => {
    setShowSuccessfulPasswordChange(false);
  };

  const changePassword = (x) => {
    if (emptyCurrentPasswordWarning) {
      setEmptyCurrentPasswordWarning(false);
    }

    if (incorrectPasswordWarning) {
      setIncorrectPasswordWarning(false);
    }

    setCurrentPassword(x);
    return;
  };

  const changeNewPassword = (x) => {
    if (emptyNewPasswordWarning) {
      setEmptyNewPasswordWarning(false);
    }

    if (invalidNewPasswordWarning) {
      setInvalidNewPasswordWarning(false);
    }

    setNewPassword(x);
    return;
  };

  const changeConfirmNewPassword = (x) => {
    if (emptyConfirmNewPasswordWarning) {
      setEmptyConfirmNewPasswordWarning(false);
    }

    if (invalidConfirmPassword) {
      setInvalidConfirmPassword(false);
    }

    setConfirmNewPassword(x);
    return;
  };

  const handlePasswordWarning = () => {
    if (!currentPassword) {
      setEmptyCurrentPasswordWarning(true);
    }

    if (!newPassword) {
      setEmptyNewPasswordWarning(true);
    }

    if (!confirmNewPassword) {
      setEmptyConfirmNewPasswordWarning(true);
    }
  };

  const savePasswordChange = () => {
    if (newPassword !== confirmNewPassword) {
      setInvalidConfirmPassword(true);
    }

    if (newPassword.length < 6) {
      setInvalidNewPasswordWarning(true);
    }

    if (newPassword === confirmNewPassword && newPassword.length > 5) {
      setLoader2(true);

      return dispatch(
        sessionActions.updatePassword({
          id: user.id,
          oldPassword: currentPassword,
          newPassword,
          confirmNewPassword,
        })
      )
        .then(async () => {
          setCurrentPassword("");
          setNewPassword("");
          setConfirmNewPassword("");
          await dispatch(sessionActions.restoreUser());

          setShowSuccessfulPasswordChange(true);
        })
        .catch(async (res) => {
          const data = await res.json();

          if (data && data.errors) {
            setIncorrectPasswordWarning(true);
            return;
          }
        })
        .finally(async () => {
          setLoader2(false);
        });
    }

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
                  <span>Password</span>
                </div>

                <div className={styles.fifthContainer}>
                  <span onClick={() => history.push("/account/3")}>
                    Address Book
                  </span>
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
            <div className={styles.personalDataContainer}>
              <div className={styles.pd1stContainer}>Change Password</div>

              <div className={styles.pd2ndContainer3}>
                <div
                  className={
                    false
                      ? styles.passwordInputContainerRed
                      : styles.passwordInputContainer3
                  }
                >
                  <FormField
                    type="password"
                    standard="labeleffect"
                    value={currentPassword}
                    keys={"currentPassword"}
                    className={styles.firstNameInput}
                    effect={"effect_9"}
                    handleOnChange={(value) => changePassword(value)}
                    placeholder={"Current Password"}
                  />
                  {emptyCurrentPasswordWarning && (
                    <span className={styles.requiredLabel}>
                      Please fill out this field.
                    </span>
                  )}
                  {incorrectPasswordWarning && (
                    <span className={styles.requiredLabel}>
                      The provided password was invalid.
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.pd2ndContainer4}>
                <div
                  className={
                    false
                      ? styles.passwordInputContainerRed
                      : styles.passwordInputContainer
                  }
                >
                  <FormField
                    type="password"
                    standard="labeleffect"
                    value={newPassword}
                    keys={"currentPassword"}
                    className={styles.firstNameInput}
                    effect={"effect_9"}
                    handleOnChange={(value) => changeNewPassword(value)}
                    placeholder={"New Password"}
                  />
                  {emptyNewPasswordWarning && (
                    <span className={styles.requiredLabel}>
                      Please fill out this field.
                    </span>
                  )}
                  {invalidNewPasswordWarning && (
                    <span className={styles.requiredLabel}>
                      Use 6 or more characters
                    </span>
                  )}
                </div>

                <div
                  className={
                    false
                      ? styles.passwordInputContainerRed
                      : styles.passwordInputContainer2
                  }
                >
                  <FormField
                    type="password"
                    standard="labeleffect"
                    value={confirmNewPassword}
                    keys={"currentPassword"}
                    className={styles.firstNameInput}
                    effect={"effect_9"}
                    handleOnChange={(value) => changeConfirmNewPassword(value)}
                    placeholder={"Confirm New Password"}
                  />
                  {emptyConfirmNewPasswordWarning && (
                    <span className={styles.requiredLabel}>
                      Please fill out this field.
                    </span>
                  )}
                  {invalidConfirmPassword && (
                    <span className={styles.requiredLabel}>
                      Passwords do not match.
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.editNameBottomContainer}>
                {!(
                  currentPassword.length === 0 ||
                  newPassword.length === 0 ||
                  confirmNewPassword.length === 0
                ) && (
                  <div
                    onClick={() => savePasswordChange()}
                    className={styles.button4}
                  >
                    Save Changes
                  </div>
                )}
                {(currentPassword.length === 0 ||
                  newPassword.length === 0 ||
                  confirmNewPassword.length === 0) && (
                  <div
                    onClick={() => handlePasswordWarning()}
                    className={styles.button5}
                  >
                    Save Changes
                  </div>
                )}
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
