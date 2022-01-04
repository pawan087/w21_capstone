import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import { FormField } from "react-form-input-fields";
import { FaCheck } from "react-icons/fa";
import ReactLoading from "react-loading";

import * as sessionActions from "../../store/session";
import Footer from "../Footer/index";
import styles from "./styles.module.css";

export default function CreateAccount() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phone, setPhone] = useState("");

  const [notRobot, setNotRobot] = useState(true);
  const [inputType, setInputType] = useState("password");
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState([]);

  // Validation booleans
  const [incorrectFormatEmail, setIncorrectFormatEmail] = useState(false);
  const [missingFirstName, setMissingFirstName] = useState(false);
  const [missingLastName, setMissingLastName] = useState(false);
  const [missingEmail, setMissingEmail] = useState(false);
  const [missingPassword, setMissingPassword] = useState(false);
  const [missingAddress1, setMissingAddress1] = useState(false);
  const [missingAddress2, setMissingAddress2] = useState(false);
  const [missingPhone, setMissingPhone] = useState(false);
  const [incorrectFormatPhone, setIncorrectFormatPhone] = useState(false);
  const [missingUsername, setMissingUsername] = useState(false);
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidEmailLength, setInvalidEmailLength] = useState(false);
  const [invalidFirstNameLength, setInvalidFirstNameLength] = useState(false);
  const [invalidLastNameLength, setInvalidLastNameLength] = useState(false);
  const [invalidAddress1Length, setInvalidAddress1Length] = useState(false);
  const [invalidAddress2Length, setInvalidAddress2Length] = useState(false);
  const [cannotBeSame, setCannotBeSame] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [missingRobot, setMissingRobot] = useState(false);

  const changeNotRobot = () => {
    setMissingRobot(false);
    setNotRobot(!notRobot);
  };

  const showPassword = (e) => {
    e.preventDefault();

    setInputType("text");
  };

  const hidePassword = (e) => {
    e.preventDefault();

    setInputType("password");
  };

  const changeFirstName = (value) => {
    if (missingFirstName) {
      setMissingFirstName(false);
    }

    if (invalidFirstNameLength) {
      setInvalidFirstNameLength(false);
    }

    setFirstName(value);
  };

  const changeLastName = (value) => {
    if (missingLastName) {
      setMissingLastName(false);
    }

    if (invalidLastNameLength) {
      setInvalidLastNameLength(false);
    }

    setLastName(value);
  };

  const changeUsername = (value) => {
    if (errors.length) {
      setErrors([]);
    }

    if (missingUsername) {
      setMissingUsername(false);
    }

    if (invalidUsername) {
      setInvalidUsername(false);
    }

    if (cannotBeSame) {
      setCannotBeSame(false);
    }

    setUsername(value);
  };

  const changeEmail = (value) => {
    if (missingEmail) {
      setMissingEmail(false);
    }

    if (incorrectFormatEmail) {
      setIncorrectFormatEmail(false);
    }

    if (invalidEmailLength) {
      setInvalidEmailLength(false);
    }

    setEmail(value);
  };

  const changePassword = (value) => {
    if (missingPassword) {
      setMissingPassword(false);
    }

    if (invalidPassword) {
      setInvalidPassword(false);
    }

    setPassword(value);
  };

  const changeAddress1 = (value) => {
    if (missingAddress1) {
      setMissingAddress1(false);
    }

    if (invalidAddress1Length) {
      setInvalidAddress1Length(false);
    }

    setAddress1(value);
  };

  const changeAddress2 = (value) => {
    if (missingAddress2) {
      setMissingAddress2(false);
    }

    if (invalidAddress2Length) {
      setInvalidAddress2Length(false);
    }

    setAddress2(value);
  };

  const changePhone = (value) => {
    if (missingPhone) {
      setMissingPhone(false);
    }

    if (setIncorrectFormatPhone) {
      setIncorrectFormatPhone(false);
    }

    if (username.length > 30) {
      setInvalidUsername(true);
    }

    setPhone(value);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setLoader(true);
    scrollToTop();

    let regExp =
      // eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regExp.test(email)) {
      // console.log("correct format");
    } else {
      // console.log("wrong format");
      setIncorrectFormatEmail(true);
    }
    // eslint-disable-next-line
    let regExp2 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (regExp2.test(phone)) {
      // console.log("correct format");
    } else {
      // console.log("wrong format");
      setIncorrectFormatPhone(true);
      return;
    }

    if (username.length > 30 || username.length < 5) {
      setInvalidUsername(true);
    }

    if (email.length > 256) {
      setInvalidEmailLength(true);
    }

    if (firstName.length > 50) {
      setInvalidFirstNameLength(true);
    }

    if (lastName.length > 50) {
      setInvalidLastNameLength(true);
    }

    if (address1.length > 100) {
      setInvalidAddress1Length(true);
    }

    if (address2.length > 100) {
      setInvalidAddress2Length(true);
    }

    if (username === email && incorrectFormatEmail === false) {
      setCannotBeSame(true);
    }

    let mediumPassword = new RegExp(
      "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
    );

    if (mediumPassword.test(password)) {
      // console.log("strong password");
      setInvalidPassword(false);
    } else {
      // console.log("weak password");
      setInvalidPassword(true);
      return;
    }

    if (
      !incorrectFormatEmail &&
      !missingFirstName &&
      !missingLastName &&
      !missingEmail &&
      !missingPassword &&
      !missingAddress1 &&
      !missingAddress2 &&
      !missingPhone &&
      incorrectFormatPhone === false &&
      !missingUsername &&
      !invalidUsername &&
      !invalidEmailLength &&
      !invalidFirstNameLength &&
      !invalidLastNameLength &&
      !invalidAddress1Length &&
      !invalidAddress2Length &&
      !cannotBeSame &&
      invalidPassword === false &&
      !missingRobot
    ) {
      // console.log("ready to sign up");

      setErrors([]);

      return await dispatch(
        sessionActions.signup({
          email,
          username,
          password,
          firstName,
          lastName,
          phone,
          address1,
          address2,
        })
      )
        .catch(async (res) => {
          const data = await res.json();

          if (data && data.errors) {
            setErrors(data.errors);
            // console.log(data.errors);
          }
        })
        .finally(() => {
          setLoader(false);
        });
    }

    if (loader) {
      setLoader(false);
    }

    return;
  };

  const handleWarnings = (e) => {
    e.preventDefault();

    if (!firstName) {
      setMissingFirstName(true);
    }

    if (!lastName) {
      setMissingLastName(true);
    }

    if (!email) {
      setMissingEmail(true);
    }

    if (!password) {
      setMissingPassword(true);
    }

    if (!address1) {
      setMissingAddress1(true);
    }

    if (!address2) {
      setMissingAddress2(true);
    }

    if (!phone) {
      setMissingPhone(true);
    }

    if (!username) {
      setMissingUsername(true);
    }

    if (notRobot) {
      setMissingRobot(true);
    }

    scrollToTop();
  };

  if (sessionUser) return <Redirect to="/" />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.outerContainer}
    >
      <div className={styles.createAccountContainer}>
        <div className={styles.createAccountLeftContainer}>
          <div className={styles.left1stContainer}>Create Account</div>

          <div className={styles.left2ndContainer}>
            Create your GameStop account to start earning points and rewards
            today!
          </div>

          {errors[0] !== "username must be unique" &&
            errors[0] !== "email must be unique" && (
              <div
                className={
                  !missingRobot
                    ? styles.left3rdContainer
                    : styles.left3rdContainer2
                }
              >
                <div className={styles.left6thContainer}>
                  <div className={styles.creditCardTitle}>
                    <input
                      defaultChecked
                      className={styles.fakeRadio}
                      type="radio"
                    />
                  </div>
                </div>

                <div className={styles.left3rd2ndContainer}>
                  <div className={styles.left3rd2ndTopContainer}>
                    New Account
                  </div>

                  <div className={styles.left3rd2ndBottomContainer}>
                    Create an account to enjoy all the PowerUp Rewards benefits.
                  </div>
                </div>
              </div>
            )}

          {errors[0] === "username must be unique" && (
            <div className={styles.left3rdContainer2}>
              <div className={styles.left6thContainer}>
                <div className={styles.creditCardTitle}>
                  <input
                    defaultChecked
                    className={styles.fakeRadio}
                    type="radio"
                  />
                </div>
              </div>

              <div className={styles.left3rd2ndContainer}>
                <div className={styles.left3rd2ndTopContainer}>New Account</div>

                <div className={styles.left3rd2ndBottomContainer}>
                  Create an account to enjoy all the PowerUp Rewards benefits.
                </div>
              </div>
            </div>
          )}

          {errors[0] === "email must be unique" && (
            <div className={styles.left3rdContainer2}>
              <div className={styles.left6thContainer}>
                <div className={styles.creditCardTitle}>
                  <input
                    defaultChecked
                    className={styles.fakeRadio}
                    type="radio"
                  />
                </div>
              </div>

              <div className={styles.left3rd2ndContainer}>
                <div className={styles.left3rd2ndTopContainer}>New Account</div>

                <div className={styles.left3rd2ndBottomContainer}>
                  Create an account to enjoy all the PowerUp Rewards benefits.
                </div>
              </div>
            </div>
          )}

          {missingRobot && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.errorContainer}
            >
              <div className={styles.errorContainerLeft}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className={styles.errorContainerRight}>
                Please verify with reCAPTCHA.
              </div>
            </motion.div>
          )}

          {errors[0] === "username must be unique" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.errorContainer}
            >
              <div className={styles.errorContainerLeft}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className={styles.errorContainerRight}>
                Username already exists.
              </div>
            </motion.div>
          )}

          {errors[0] === "email must be unique" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.errorContainer}
            >
              <div className={styles.errorContainerLeft}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div className={styles.errorContainerRight}>
                An account with this email already exists.
              </div>
            </motion.div>
          )}

          <div className={styles.left4thContainer}>
            <div
              className={
                missingFirstName
                  ? styles.nameInputContainerRed
                  : styles.nameInputContainer
              }
            >
              <FormField
                type="text"
                standard="labeleffect"
                value={firstName}
                keys={"firstName"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => changeFirstName(value)}
                placeholder={"First Name"}
              />

              {missingFirstName && (
                <span className={styles.requiredLabel}>
                  First Name is required.
                </span>
              )}

              {invalidFirstNameLength && (
                <span className={styles.requiredLabel}>
                  First name cannot be longer than 50 characters.
                </span>
              )}
            </div>

            <div
              className={
                missingLastName
                  ? styles.nameInputContainerRed
                  : styles.nameInputContainer
              }
            >
              <FormField
                type="text"
                standard="labeleffect"
                value={lastName}
                keys={"lastName"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => changeLastName(value)}
                placeholder={"Last Name"}
              />

              {missingLastName && (
                <span className={styles.requiredLabel}>
                  Last Name is required.
                </span>
              )}

              {invalidLastNameLength && (
                <span className={styles.requiredLabel}>
                  Last name cannot be longer than 50 characters.
                </span>
              )}
            </div>
          </div>

          <div className={styles.left5thContainer}>
            <div
              className={
                missingUsername
                  ? styles.emailInputContainerRed
                  : styles.emailInputContainer
              }
            >
              <FormField
                type="text"
                standard="labeleffect"
                value={username}
                keys={"username"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => changeUsername(value)}
                placeholder={"Username"}
              />

              {missingUsername && (
                <span className={styles.requiredLabel}>
                  Username is required.
                </span>
              )}

              {invalidUsername && (
                <span className={styles.requiredLabel}>
                  Username must be between 4 - 30 characters.
                </span>
              )}

              {cannotBeSame && (
                <span className={styles.requiredLabel}>
                  Username cannot be an email.
                </span>
              )}
            </div>
          </div>

          <div className={styles.left5thContainer}>
            <div
              className={
                missingEmail
                  ? styles.emailInputContainerRed
                  : styles.emailInputContainer
              }
            >
              <FormField
                type="text"
                standard="labeleffect"
                value={email}
                keys={"email"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => changeEmail(value)}
                placeholder={"Email"}
              />

              {incorrectFormatEmail && (
                <span className={styles.requiredLabel}>
                  Please format your email: email@domain.com
                </span>
              )}

              {missingEmail && (
                <span className={styles.requiredLabel}>
                  Please enter a valid email address.
                </span>
              )}

              {invalidEmailLength && (
                <span className={styles.requiredLabel}>
                  Email cannot be longer than 256 characters.
                </span>
              )}
            </div>
          </div>

          <div className={styles.left14thContainer}>
            <div
              className={
                missingPassword
                  ? styles.emailInputContainerRed
                  : styles.emailInputContainer
              }
            >
              <FormField
                type={inputType}
                standard="labeleffect"
                value={password}
                keys={"password"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => changePassword(value)}
                placeholder={"Password"}
              />

              {missingPassword && (
                <span className={styles.requiredLabel}>
                  Please enter a valid password.
                </span>
              )}

              {invalidPassword && (
                <span className={styles.requiredLabel}>
                  Password must be a minimum of 8 characters with at least one
                  upper case letter, one lower case letter, one digit and one
                  special character.
                </span>
              )}
            </div>
          </div>

          <div className={styles.left6thContainer}>
            <div
              className={
                missingAddress1
                  ? styles.emailInputContainerRed
                  : styles.emailInputContainer
              }
            >
              <FormField
                type="text"
                standard="labeleffect"
                value={address1}
                keys={"address1"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => changeAddress1(value)}
                placeholder={"Street Address"}
              />

              {missingAddress1 && (
                <span className={styles.requiredLabel}>
                  Please enter a valid address.
                </span>
              )}

              {invalidAddress1Length && (
                <span className={styles.requiredLabel}>
                  Street address must be less than 100 characters.
                </span>
              )}
            </div>
          </div>

          <div className={styles.left7thContainer}>
            <div
              className={
                missingAddress2
                  ? styles.emailInputContainerRed
                  : styles.emailInputContainer
              }
            >
              <FormField
                type="text"
                standard="labeleffect"
                value={address2}
                keys={"address2"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => changeAddress2(value)}
                placeholder={"City, State, Zip"}
              />

              {missingAddress2 && (
                <span className={styles.requiredLabel}>
                  Please enter a valid address
                </span>
              )}

              {invalidAddress2Length && (
                <span className={styles.requiredLabel}>
                  "City, State, Zip" must be less than 100 characters.
                </span>
              )}
            </div>
          </div>

          <div className={styles.left8thContainer}>
            <div
              className={
                missingPhone
                  ? styles.emailInputContainerRed
                  : styles.emailInputContainer
              }
            >
              <FormField
                type="text"
                standard="labeleffect"
                value={phone}
                keys={"phone"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => changePhone(value)}
                placeholder={"Phone Number"}
              />

              {missingPhone && (
                <span className={styles.requiredLabel}>
                  Please enter a phone number.
                </span>
              )}

              {incorrectFormatPhone && (
                <span className={styles.requiredLabel}>
                  Please enter a 10 digit phone number, ex. 888 123-4567
                </span>
              )}
            </div>
          </div>

          <div className={styles.left9thContainer}>
            {!missingRobot && (
              <div
                onClick={() => changeNotRobot()}
                className={
                  !notRobot
                    ? styles.checkIconContainer
                    : styles.checkIconContainer2
                }
              >
                {!notRobot && (
                  <motion.div
                    transition={{ duration: 0.275 }}
                    animate={{
                      scale: [0.5, 1, 1.5, 1, 1],
                      rotate: [0, 90, 180, 270, 360],
                    }}
                  >
                    <FaCheck
                      style={{
                        display: "inline",
                        color: "rgb(0,158,85)",
                        width: "20px",
                        height: "20px",
                      }}
                      className={styles.checkIcon}
                    />
                  </motion.div>
                )}
              </div>
            )}

            {missingRobot && (
              <div
                onClick={() => changeNotRobot()}
                className={
                  !notRobot
                    ? styles.checkIconContainer
                    : styles.checkIconContainer3
                }
              >
                {!notRobot && (
                  <motion.div
                    transition={{ duration: 0.275 }}
                    animate={{
                      scale: [0.5, 1, 1.5, 1, 1],
                      rotate: [0, 90, 180, 270, 360],
                    }}
                  >
                    <FaCheck
                      style={{
                        display: "inline",
                        color: "rgb(0,158,85)",
                        width: "20px",
                        height: "20px",
                      }}
                      className={styles.checkIcon}
                    />
                  </motion.div>
                )}
              </div>
            )}

            <div className={styles.notRobotLabel}>I'm not a robot</div>

            <div className={styles.recaptchaContainer}>
              <div className={styles.signContainer}>
                <img
                  alt="recaptchaSign"
                  className={styles.recaptchaLogo}
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ad/RecaptchaLogo.svg"
                />
              </div>

              <div className={styles.fakePrivacyTerms}>Privacy - Terms</div>
            </div>
          </div>

          <div className={styles.left10thContainer}>
            By clicking "Create Account", I acknowledge and agree to GameStop's{" "}
            <span>Privacy Policy</span>, <span>Conditions of Use</span>, and the
            PowerUp Rewards <span>Terms & Conditions</span>.
          </div>

          {!(
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !address2 ||
            !address1 ||
            !phone ||
            !username ||
            notRobot
          ) && (
            <div
              onClick={(e) => handleSubmit(e)}
              className={styles.left11thContainer}
            >
              SUBMIT
            </div>
          )}

          {(!firstName ||
            !lastName ||
            !email ||
            !password ||
            !address2 ||
            !address1 ||
            !phone ||
            !username ||
            notRobot) && (
            <div
              onClick={(e) => handleWarnings(e)}
              className={styles.left11thContainer2}
            >
              SUBMIT
            </div>
          )}

          <div className={styles.left12thContainer}>
            <div className={styles.divisorContainer}>
              <span className={styles.middleDivisor}>OR</span>
              <div className={styles.underline}></div>
            </div>
          </div>

          <div className={styles.left13thContainer}>Sign In</div>
        </div>

        <div className={styles.createAccountRightContainer}>
          <div className={styles.rightHolder}>
            <div className={styles.createAccountRight1st}>
              <div className={styles.createAccountRight1st1st}>
                Sign up for FREE PLAYER PowerUp Rewards™
              </div>

              <div className={styles.createAccountRight1st2nd}>
                and enjoy these benefits:
              </div>
            </div>

            <div className={styles.createAccountRight2nd}>
              <div className={styles.createAccountRight2nd1st}>
                <div className={styles.arrowRight}></div>
              </div>

              <div className={styles.createAccountRight2nd2nd}>
                <span className={styles.pureEarnIcon}></span>
              </div>

              <div className={styles.createAccountRight2nd3rd}>
                Earn <span>250 points</span> today
              </div>

              <div className={styles.createAccountRight2nd4th}>
                <span className={styles.purSpentIcon}></span>
              </div>

              <div className={styles.createAccountRight2nd5th}>
                Earn <span>10 points</span> on every dollar spent
              </div>
            </div>

            <div className={styles.createAccountRight3rd}>
              PowerUp Rewards™ exclusive benefits:
            </div>

            <div className={styles.createAccountRight4th}>
              <div className={styles.createAccountRight4thLeft}>
                <div className={styles.createAccountRight4thLeft1st}>
                  EARN POINTS
                </div>

                <div className={styles.createAccountRight4thLeft2nd}>
                  Earn points with every purchase and redeem fun rewards.
                </div>
              </div>

              <div className={styles.createAccountRight4thRight}>
                <div className={styles.createAccountRight4thLeft1st}>
                  ALL ACCESS
                </div>

                <div className={styles.createAccountRight4thLeft2nd}>
                  Access all of your download codes and digital purchases.
                </div>
              </div>
            </div>

            {
              <div className={styles.createAccountRight4th}>
                <div className={styles.createAccountRight4thLeft}>
                  <div className={styles.createAccountRight4thLeft1st}>
                    ORDER TRACKING
                  </div>

                  <div className={styles.createAccountRight4thLeft2nd}>
                    Check the current status on all your orders.
                  </div>
                </div>

                <div className={styles.createAccountRight4thRight}>
                  <div className={styles.createAccountRight4thLeft1st}>
                    SPEEDY CHECKOUT
                  </div>

                  <div className={styles.createAccountRight4thLeft2nd}>
                    Save your info for quick checkout.
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      {loader && (
        <div className={styles.loaderCotnainer}>
          <ReactLoading
            type={"spin"}
            color={"rgba(0,0,0,.75)"}
            height={"0px"}
            width={"57.5px"}
          />
        </div>
      )}

      {false && (
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      )}
    </motion.div>
  );
}
