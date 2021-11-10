import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { FormField } from "react-form-input-fields";
import { FaCheck } from "react-icons/fa";

import Footer from "../Footer/index";
import styles from "./styles.module.css";

export default function CreateAccount() {
  const [notRobot, setNotRobot] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phone, setPhone] = useState("");
  const [inputType, setInputType] = useState("password");
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

    setFirstName(value);
  };

  const changeLastName = (value) => {
    if (missingLastName) {
      setMissingLastName(false);
    }

    setLastName(value);
  };

  const changeUsername = (value) => {
    if (missingUsername) {
      setMissingUsername(false);
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

    setEmail(value);
  };

  const changePassword = (value) => {
    if (missingPassword) {
      setMissingPassword(false);
    }

    setPassword(value);
  };

  const changeAddress1 = (value) => {
    if (missingAddress1) {
      setMissingAddress1(false);
    }

    setAddress1(value);
  };

  const changeAddress2 = (value) => {
    if (missingAddress2) {
      setMissingAddress2(false);
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

    setPhone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let regExp =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regExp.test(email)) {
      console.log("correct format");
    } else {
      console.log("wrong format");
      setIncorrectFormatEmail(true);
    }

    let regExp2 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (regExp2.test(phone)) {
      console.log("correct format");
    } else {
      console.log("wrong format");
      setIncorrectFormatPhone(true);
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
  };

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

          <div className={styles.left3rdContainer}>
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

              {inputType === "password" && (
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

              {inputType === "text" && (
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
            <div
              onClick={() => setNotRobot(!notRobot)}
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
            !phone
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
            !phone) && (
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

      {false && (
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      )}
    </motion.div>
  );
}
