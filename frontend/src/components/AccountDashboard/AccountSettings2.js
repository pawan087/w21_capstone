import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

  const [inputType, setInputType] = useState("password");

  const showPassword = (e) => {
    e.preventDefault();

    setInputType("text");
  };

  const hidePassword = (e) => {
    e.preventDefault();

    setInputType("password");
  };

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

    if (invalidConfirmPassword) {
      setInvalidConfirmPassword(false);
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
    } else {
      setInvalidConfirmPassword(false);
    }

    let mediumPassword = new RegExp(
      "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
    );

    if (mediumPassword.test(newPassword)) {
      // console.log("strong password");
    } else {
      // console.log("weak password");
      setInvalidNewPasswordWarning(true);
    }

    // if (newPassword.length < 6) {
    //   setInvalidNewPasswordWarning(true);
    // }

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
                    type={inputType}
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
                  {user.email !== "demo@aa.io" && inputType === "password" && (
                    <div
                      onClick={(e) => showPassword(e)}
                      className={styles.revealPasswordIconContainer}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fill-rule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {user.email !== "demo@aa.io" && inputType === "text" && (
                    <div
                      onClick={(e) => hidePassword(e)}
                      className={styles.revealPasswordIconContainer}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                          clipRule="evenodd"
                        />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    </div>
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
                    type={inputType}
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
                      Password must be a minimum of 8 characters with at least
                      one upper case letter, one lower case letter, one digit
                      and one special character.
                    </span>
                  )}
                  {user.email !== "demo@aa.io" && inputType === "password" && (
                    <div
                      onClick={(e) => showPassword(e)}
                      className={styles.revealPasswordIconContainer}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fill-rule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {user.email !== "demo@aa.io" && inputType === "text" && (
                    <div
                      onClick={(e) => hidePassword(e)}
                      className={styles.revealPasswordIconContainer}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                          clipRule="evenodd"
                        />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    </div>
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
                    type={inputType}
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
                  {user.email !== "demo@aa.io" && inputType === "password" && (
                    <div
                      onClick={(e) => showPassword(e)}
                      className={styles.revealPasswordIconContainer}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fill-rule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {user.email !== "demo@aa.io" && inputType === "text" && (
                    <div
                      onClick={(e) => hidePassword(e)}
                      className={styles.revealPasswordIconContainer}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                          clipRule="evenodd"
                        />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    </div>
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.loader}
        >
          <ReactLoading
            type={"bubbles"}
            color={"rgb(231,35,13)"}
            height={"0px"}
            width={"120px"}
          />
        </motion.div>
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
