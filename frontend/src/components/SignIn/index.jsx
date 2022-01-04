import React, { useState } from "react";
import { useHistory } from "react-router";
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
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [inputType, setInputType] = useState("password");

  setInputType("password");

  const [defaultOption, setDefaultOption] = useState(false);
  const [warning, setWarning] = useState(false);
  const [loader, setLoader] = useState(false);

  // const showPassword = (e) => {
  //   e.preventDefault();

  //   setInputType("text");
  // };

  // const hidePassword = (e) => {
  //   e.preventDefault();

  //   setInputType("password");
  // };

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

  const handleSubmit = async (e) => {
    setLoader(true);
    setErrors([]);

    return await dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();

        if (data && data.errors) setErrors(data.errors);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const handleDemoLogin = async () => {
    setLoader(true);

    await dispatch(
      sessionActions.login({ credential: "demo@aa.io", password: "password" })
    );

    setLoader(false);
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
      setInputType("password");
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
                onClick={() => handleDefaultOption()}
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
          <div
            onClick={() => history.push("/signup")}
            className={styles.createAccountButton}
          >
            CREATE ACCOUNT
          </div>
        </div>
      </div>

      <div onClick={() => handleDemoLogin()} className={styles.demoUserButton}>
        Demo
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

      {true && <Footer />}
    </motion.div>
  );
}
