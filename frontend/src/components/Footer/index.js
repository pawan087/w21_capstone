import React from "react";

import styles from "./footer.module.css";
import githubImg from "./GitHub-Mark-32px.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.gitIconContainer}>
            <img src={githubImg} alt="Github Logo" />
          </div>
          <div className={styles.gitLink}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pawan087"
              className={styles.link}

            >
              Pawan Chahal
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>©2021 gameStopClone</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
