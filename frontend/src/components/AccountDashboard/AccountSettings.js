import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion/dist/framer-motion";
import { FaPowerOff, FaPhoneAlt } from "react-icons/fa";
import { FormField } from "react-form-input-fields";
import ReactLoading from "react-loading";

import * as sessionActions from "../../store/session";
import Footer from "../../components/Footer";
import styles from "./styles.module.css";
import "@szhsin/react-menu/dist/index.css";
import "react-form-input-fields/dist/index.css";

export default function AccountDashboard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);

  const [load, setLoad] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [email, setEmail] = useState(user?.email);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [invalidFirstName, setInvalidFirstName] = useState(false);
  const [invalidLastName, setInvalidLastName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [incorrectFormatEmail, setIncorrectFormatEmail] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [emptyPasswordWarning, setEmptyPasswordWarning] = useState(false);

  const changeFirstName = (x) => {
    if (invalidFirstName) {
      setInvalidFirstName(false);
    }

    setFirstName(x);
    return;
  };

  const changeLastName = (x) => {
    if (invalidLastName) {
      setInvalidLastName(false);
    }

    setLastName(x);
    return;
  };

  const changeEmail = (x) => {
    if (incorrectFormatEmail) {
      setIncorrectFormatEmail(false);
    }

    setEmail(x);
    return;
  };

  const changePassword = (x) => {
    if (emptyPasswordWarning) {
      setEmptyPasswordWarning(false);
    }

    setCurrentPassword(x);
    return;
  };

  const showEditName = () => {
    cancelEditEmail();
    setEditEmail(false);
    setEditName(true);
  };

  const showEditEmail = () => {
    cancelEditName();
    setEditName(false);
    setEmail(user.email);
    setEditEmail(true);
  };

  const cancelEditName = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setInvalidFirstName(false);
    setInvalidLastName(false);
    setEditName(false);
  };

  const cancelEditEmail = () => {
    setEmail(user.email);
    setInvalidEmail(false);
    setIncorrectFormatEmail(false);
    setEditEmail(false);
    setCurrentPassword("");
    setInvalidPassword(false);
  };

  const handleEmailWarning = () => {
    if (!email) {
      setInvalidEmail(true);
    }

    if (!currentPassword) {
      setEmptyPasswordWarning(true);
    }
  };

  const handleWarning = () => {
    if (!firstName) {
      setInvalidFirstName(true);
    }

    if (!lastName) {
      setInvalidLastName(true);
    }

    if (!firstName && lastName) {
      setInvalidLastName(false);
    }

    if (!lastName && firstName) {
      setInvalidFirstName(false);
    }
  };

  const saveNameChange = async () => {
    setLoader2(true);

    setInvalidFirstName(false);
    setInvalidLastName(false);

    if (firstName === user.firstName && lastName === user.lastName) {
      // Didn't do anything
      setLoader2(false);
      cancelEditName();
      return;
    }

    await dispatch(
      sessionActions.updateName({ id: user.id, firstName, lastName })
    );

    await dispatch(sessionActions.restoreUser());

    setInvalidFirstName(false);
    setInvalidLastName(false);
    setEditName(false);
    setLoader2(false);
  };

  const saveEmailChange = async () => {
    setLoader2(true);

    let regExp =
      // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regExp.test(email)) {
      if (email === user.email) {
        cancelEditEmail();
        setLoader2(false);
        return;
      }

      if (email !== user.email) {
        return dispatch(
          sessionActions.updateEmail({
            id: user.id,
            email,
            currentPassword: currentPassword,
          })
        )
          .then(async () => {
            cancelEditEmail();
            await dispatch(sessionActions.restoreUser());
          })
          .catch(async (res) => {
            const data = await res.json();

            if (data && data.errors) {
              setInvalidPassword(true);

              return;
            }
          })
          .finally(() => {
            setLoader2(false);
          });
      }
    } else {
      setInvalidEmail(false);

      setIncorrectFormatEmail(true);

      setLoader2(false);

      return;
    }
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

  const showPassword = () => {
    history.push("/account/2");
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
                  <span>Personal Data</span>
                </div>

                <div className={styles.fourthContainer}>
                  <span onClick={() => showPassword()}>Password</span>
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
              <div className={styles.pd1stContainer}>Personal Data</div>

              {!editName && (
                <div className={styles.pd2ndContainer}>
                  <div className={styles.pd2nd1stContainer}>
                    <div className={styles.pd2nd1st1stContainer}>NAME</div>

                    <div className={styles.pd2nd1st2ndContainer}>
                      {user?.firstName} {user?.lastName}
                    </div>
                  </div>
                  <div
                    onClick={() => showEditName(true)}
                    className={styles.pd2nd2ndContainer}
                  >
                    Edit
                  </div>
                </div>
              )}

              {editName && (
                <div className={styles.pd2ndContainer2}>
                  <div className={styles.editNameTopContainer}>
                    <div
                      className={
                        firstName.length === 0
                          ? styles.nameInputContainerRed
                          : styles.nameInputContainer
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
                      {invalidFirstName && (
                        <span className={styles.requiredLabel}>
                          Please fill out this field.
                        </span>
                      )}
                    </div>

                    <div
                      className={
                        lastName.length === 0
                          ? styles.nameInputContainerRed
                          : styles.nameInputContainer
                      }
                    >
                      <FormField
                        type="text"
                        standard="labeleffect"
                        value={lastName}
                        keys={"lastName"}
                        effect={"effect_9"}
                        handleOnChange={(value) => changeLastName(value)}
                        placeholder={"Last Name"}
                      />
                      {invalidLastName && (
                        <span className={styles.requiredLabel}>
                          Please fill out this field.
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={styles.editNameBottomContainer}>
                    {firstName.length > 0 && lastName.length > 0 && (
                      <div
                        onClick={() => saveNameChange()}
                        className={styles.button1}
                      >
                        SAVE
                      </div>
                    )}

                    {(firstName.length === 0 || lastName.length === 0) && (
                      <div
                        onClick={() => handleWarning()}
                        className={styles.button3}
                      >
                        SAVE
                      </div>
                    )}

                    <div
                      onClick={() => cancelEditName()}
                      className={styles.button2}
                    >
                      CANCEL
                    </div>
                  </div>
                </div>
              )}

              {!editEmail && (
                <div className={styles.pd3rdContainer}>
                  <div className={styles.pd2nd1stContainer}>
                    <div className={styles.pd2nd1st1stContainer}>EMAIL</div>
                    <div className={styles.pd2nd1st2ndContainer}>
                      {user?.email}
                    </div>
                  </div>
                  <div
                    onClick={() => showEditEmail()}
                    className={styles.pd2nd2ndContainer}
                  >
                    Edit
                  </div>
                </div>
              )}

              {editEmail && (
                <div className={styles.pd2ndContainer2}>
                  <div className={styles.editNameTopContainer}>
                    <div
                      className={
                        email.length === 0
                          ? styles.emailInputContainerRed
                          : styles.emailInputContainer
                      }
                    >
                      <FormField
                        type="text"
                        standard="labeleffect"
                        value={email}
                        keys={"email"}
                        className={styles.firstNameInput}
                        effect={"effect_9"}
                        handleOnChange={(value) => changeEmail(value)}
                        placeholder={"Email"}
                      />
                      {incorrectFormatEmail && (
                        <span className={styles.requiredLabel}>
                          Please format your email: email@domain.com
                        </span>
                      )}
                      {invalidEmail && (
                        <span className={styles.requiredLabel2}>
                          Please fill out this field.
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    className={
                      invalidPassword
                        ? styles.passwordInputContainerRed
                        : styles.passwordInputContainer
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

                    {invalidPassword && (
                      <span className={styles.requiredLabel}>
                        The provided password was invalid.
                      </span>
                    )}

                    {emptyPasswordWarning && (
                      <span className={styles.requiredLabel}>
                        Please fill out this field.
                      </span>
                    )}
                  </div>

                  <div className={styles.editNameBottomContainer}>
                    {currentPassword.length > 0 && (
                      <div
                        onClick={() => saveEmailChange()}
                        className={styles.button1}
                      >
                        SAVE
                      </div>
                    )}
                    {currentPassword.length === 0 && (
                      <div
                        onClick={() => handleEmailWarning()}
                        className={styles.button3}
                      >
                        SAVE
                      </div>
                    )}

                    <div
                      onClick={() => cancelEditEmail()}
                      className={styles.button2}
                    >
                      CANCEL
                    </div>
                  </div>
                </div>
              )}
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
    </motion.div>
  );
}
