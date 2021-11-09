import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { FormField } from "react-form-input-fields";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import ReactLoading from "react-loading";

import * as sessionActions from "../../store/session";
import Footer from "../Footer";
import styles from "./styles.module.css";

export default function SignIn() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [inputType, setInputType] = useState("password");
  const [defaultOption, setDefaultOption] = useState(false);
  const [warning, setWarning] = useState(false);
  const [loader, setLoader] = useState(false);

  const showPassword = (e) => {
    e.preventDefault();

    setInputType("text");
  };

  const hidePassword = (e) => {
    e.preventDefault();

    setInputType("password");
  };

  const handleCredential = (value) => {
    if (errors.length) {
      setErrors([]);
    }

    if (warning) {
      setWarning(false);
    }

    setCredential(value);
  };

  const handlePassword = (value) => {
    if (errors.length) {
      setErrors([]);
    }

    if (warning) {
      setWarning(false);
    }

    setPassword(value);
  };

  const handleSubmit = (e) => {
    setLoader(true);
    setErrors([]);

    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();

        if (data && data.errors) setErrors(data.errors);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const handleWarnings = (e) => {
    setWarning(true);
    return;
  };

  const handleDefaultOption = () => {
    setDefaultOption(!defaultOption);

    if (!defaultOption) {
      setCredential("demo@aa.io");
      setPassword("password");
    } else {
      setCredential("");
      setPassword("");
    }
  };

  if (sessionUser) return <Redirect to="/" />;

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

        {errors.length > 0 && (
          <div className={styles.errorContainer}>
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
              Your email or password was incorrect. Please try again.
            </div>
          </div>
        )}

        {warning && (
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
              Email and password fields are required. Please try again.
            </div>
          </motion.div>
        )}

        <div className={styles.thirdContainer}>
          <FormField
            type="text"
            standard="labeleffect"
            value={credential}
            keys={"email"}
            className={styles.emailInput}
            effect={"effect_9"}
            handleOnChange={(value) => handleCredential(value)}
            required
            placeholder={"Email"}
          />
        </div>

        <div className={styles.fourthContainer}>
          <FormField
            type={inputType}
            standard="labeleffect"
            value={password}
            keys={"email"}
            className={styles.emailInput}
            effect={"effect_9"}
            handleOnChange={(value) => handlePassword(value)}
            placeholder={"Password"}
            required
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
            onClick={() => handleDefaultOption()}
          >
            Sign in as demo user
          </div>
        </div>

        {credential.length > 0 && password.length > 0 && (
          <div onClick={() => handleSubmit()} className={styles.sixthContainer}>
            <div className={styles.signInButton}>SIGN IN</div>
          </div>
        )}

        {(credential.length === 0 || password.length === 0) && (
          <div
            onClick={() => handleWarnings()}
            className={styles.sixthContainer}
          >
            <div className={styles.signInButton2}>SIGN IN</div>
          </div>
        )}

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

      {loader && (
        <div className={styles.loaderCotnainer}>
          <ReactLoading
            type={"bubbles"}
            color={"rgb(231,35,13)"}
            height={"0px"}
            width={"120px"}
          />
        </div>
      )}
    </motion.div>
  );
}
