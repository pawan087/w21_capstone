import React from "react";

import Footer from "../Footer/index";
import styles from "./styles.module.css";

export default function CreateAccount() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.createAccountContainer}>
        <div className={styles.createAccountLeftContainer}>
          <div className={styles.left1stContainer}>Create Account</div>

          <div className={styles.left2ndContainer}>
            Create your GameStop account to start earning points and rewards
            today!
          </div>

          <div className={styles.left3rdContainer}>
            <div className={styles.left3rd1stContainer}>
              RED RADIO BUTTON GOES HERE
            </div>

            <div className={styles.left3rd2ndContainer}>
              <div className={styles.left3rd2ndTopContainer}>New Account</div>

              <div className={styles.left3rd2ndBottomContainer}>
                Create an account to enjoy all the PowerUp Rewards benefits.
              </div>
            </div>
          </div>

          <div className={styles.left4thContainer}>
            <div className={styles.firstNameInputContainer}>
              FIRST NAME INPUT FIELD HERE
            </div>

            <div className={styles.lastNameInputContainer}>
              LAST NAME INPUT FIELD HERE
            </div>
          </div>

          <div className={styles.left5thContainer}>EMAIL INPUT FIELD HERE</div>

          <div className={styles.left14thContainer}>
            PASSWORD INPUT FIELD HERE
          </div>

          <div className={styles.left6thContainer}>
            STREET ADDRESS INPUT HERE
          </div>

          <div className={styles.left7thContainer}>
            CITY STATE ZIP INPUT HERE
          </div>

          <div className={styles.left8thContainer}>PHONE INPUT HERE</div>

          <div className={styles.left9thContainer}>
            <div className={styles.checkBoxContainer}>CHECK BOX GOES HERE</div>

            <div>I'm not a robot</div>

            <div className={styles.recaptchaContainer}>
              <div className={styles.signContainer}>
                <img alt="recaptchaSign" src="" />
              </div>

              <div className={styles.fakeRecaptchaLabel}>reCAPTCHA</div>

              <div className={styles.fakePrivacyTerms}>Privacy - Terms</div>
            </div>
          </div>

          <div className={styles.left10thContainer}>
            By clicking "Create Account", I acknowledge and agree to GameStop's{" "}
            <span>Privacy Policy</span>, <span>Conditions of Use</span>, and the
            PowerUp Rewards <span>Terms & Conditions</span>.
          </div>

          <div className={styles.left11thContainer}>
            <div className={styles.submitButton}>SUBMIT</div>
          </div>

          <div className={styles.left12thContainer}>OR DIVISOR GOES HERE</div>

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

      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}
