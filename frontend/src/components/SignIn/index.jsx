import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { FormField } from "react-form-input-fields";
import { FaCheck } from "react-icons/fa";

import Footer from "../Footer";
import styles from "./styles.module.css";

export default function SignIn() {
  const [inputType, setInputType] = useState("password");
  const [defaultOption, setDefaultOption] = useState(false);
  const [checkBoxContainerStyle, setCheckBoxContainerStyle] =
    useState("checkBoxContainer");

  const showPassword = (e) => {
    e.preventDefault();

    setInputType("text");
  };

  const hidePassword = (e) => {
    e.preventDefault();

    setInputType("password");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.backContainer}
    >
      <div className={styles.signInOuterContainer}>
        <div className={styles.firstContainer}>Welcome to GameStop</div>

        <div className={styles.secondContainer}>
          Sign in to your GameStop account
        </div>

        <div className={styles.thirdContainer}>
          <FormField
            type="text"
            standard="labeleffect"
            value={"chahal.pawanpreet@gmail.com"}
            keys={"email"}
            className={styles.emailInput}
            effect={"effect_9"}
            handleOnChange={(value) => console.log(value)}
            placeholder={"Email"}
          />
        </div>

        <div className={styles.fourthContainer}>
          <FormField
            type={inputType}
            standard="labeleffect"
            value={"Martinez61!"}
            keys={"email"}
            className={styles.emailInput}
            effect={"effect_9"}
            handleOnChange={(value) => console.log(value)}
            placeholder={"Password"}
          />

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

        <div className={styles.fifthContainer}>
          <div className={styles.fifthLeftContainer}>
            <div
              className={
                defaultOption
                  ? styles.checkBoxContainer
                  : styles.checkBoxContainer2
              }
            >
              <div
                onClick={() => setDefaultOption(!defaultOption)}
                className={
                  !defaultOption
                    ? styles.checkIconContainer
                    : styles.checkIconContainer2
                }
              >
                {defaultOption && (
                  <FaCheck
                    style={{
                      display: "inline",
                      color: "white",
                      width: "10px",
                      height: "10px",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={
              !defaultOption
                ? styles.fifthRightContainer
                : styles.fifthRightContainer2
            }
            onClick={() => setDefaultOption(!defaultOption)}
          >
            Sign in as demo user
          </div>
        </div>

        <div className={styles.sixthContainer}>
          <div className={styles.signInButton}>SIGN IN</div>
        </div>

        <div className={styles.divisorContainer}>
          <span className={styles.middleDivisor}>OR</span>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.eightContainer}>
          <div className={styles.createAccountButton}>CREATE ACCOUNT</div>
        </div>
      </div>

      <div className={styles.demoUserButton}>Demo</div>

      <Footer />
    </motion.div>
  );
}
