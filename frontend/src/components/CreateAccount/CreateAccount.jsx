import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { FormField } from "react-form-input-fields";
import { FaCheck } from "react-icons/fa";

import Footer from "../Footer/index";
import styles from "./styles.module.css";

export default function CreateAccount() {
  const [notRobot, setNotRobot] = useState(true);

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
            <div className={styles.left3rd1stContainer}>
              <div className={styles.left6thContainer}>
                <div className={styles.creditCardTitle}>
                  <input
                    defaultChecked
                    className={styles.fakeRadio}
                    type="radio"
                  />
                </div>
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
            <div className={styles.nameInputContainer}>
              <FormField
                type="text"
                standard="labeleffect"
                value={"firstName"}
                keys={"firstName"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => console.log(value)}
                placeholder={"First Name"}
              />
            </div>

            <div className={styles.nameInputContainer}>
              <FormField
                type="text"
                standard="labeleffect"
                value={"lastName"}
                keys={"lastName"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => console.log(value)}
                placeholder={"Last Name"}
              />
            </div>
          </div>

          <div className={styles.left5thContainer}>
            <div className={styles.emailInputContainer}>
              <FormField
                type="text"
                standard="labeleffect"
                value={"email"}
                keys={"email"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => console.log(value)}
                placeholder={"Email"}
              />
            </div>
          </div>

          <div className={styles.left14thContainer}>
            <div className={styles.emailInputContainer}>
              <FormField
                type="password"
                standard="labeleffect"
                value={"password"}
                keys={"password"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => console.log(value)}
                placeholder={"Password"}
              />
            </div>
          </div>

          <div className={styles.left6thContainer}>
            <div className={styles.emailInputContainer}>
              <FormField
                type="text"
                standard="labeleffect"
                value={"streetAddress"}
                keys={"address1"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => console.log(value)}
                placeholder={"Street Address"}
              />
            </div>
          </div>

          <div className={styles.left7thContainer}>
            <div className={styles.emailInputContainer}>
              <FormField
                type="text"
                standard="labeleffect"
                value={"cityStateZip"}
                keys={"address2"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => console.log(value)}
                placeholder={"City, State, ZIP"}
              />
            </div>
          </div>

          <div className={styles.left8thContainer}>
            <div className={styles.emailInputContainer}>
              <FormField
                type="text"
                standard="labeleffect"
                value={"phoneNumber"}
                keys={"phone"}
                className={styles.nameInput}
                effect={"effect_9"}
                handleOnChange={(value) => console.log(value)}
                placeholder={"Phone Number"}
              />
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
                    scale: [1, 1.25, 1.5, 1.25, 1],
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

          <div className={styles.left11thContainer}>SUBMIT</div>

          <div className={styles.left12thContainer}>
            <div className={styles.divisorContainer}>
              <span className={styles.middleDivisor}>OR</span>
              <div className={styles.underline}></div>
            </div>
          </div>

          <div className={styles.left13thContainer}>Sign In</div>
        </div>

        <div className={styles.createAccountRightContainer}>
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
              TRIANGLE GOES HERE
            </div>
            <div className={styles.createAccountRight2nd2nd}>
              STAR BOX ICON GOES HERE
            </div>
            <div className={styles.createAccountRight2nd3rd}>
              Earn <span>250 points</span> today
            </div>
            <div className={styles.createAccountRight2nd4th}>
              MONEY AND STAR ICON GOES HERE
            </div>
            <div className={styles.createAccountRight2nd5th}>
              Earn 10 points on every dollar spent
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

      {true && (
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      )}
    </motion.div>
  );
}
