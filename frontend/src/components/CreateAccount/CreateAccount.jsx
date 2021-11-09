import React from "react";

import Footer from "../Footer/index";
import styles from "./styles.module.css";

export default function CreateAccount() {
  return (
    <div>
      <div className={styles.createAccount}>Create Account Page</div>

      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}
