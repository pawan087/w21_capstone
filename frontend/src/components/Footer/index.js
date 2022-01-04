import React from "react";
import {
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion/dist/framer-motion";

import styles from "./footer.module.css";
import githubImg from "./GitHub-Mark-32px.png";

const Footer = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const x2 = useMotionValue(0);
  const y2 = useMotionValue(0);

  const rotateX = useTransform(y2, [-100, 100], [60, -60]);
  const rotateY = useTransform(x2, [-100, 100], [-60, 60]);

  const rotateX2 = useTransform(y, [-100, 100], [60, -60]);
  const rotateY2 = useTransform(x, [-100, 100], [-60, 60]);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <motion.div
            dragTransition={{ bounceStiffness: 400, bounceDamping: 17.5 }}
            style={{
              x: x,
              y: y,
              rotateX: rotateX,
              rotateY: rotateY,
              cursor: "grab",
            }}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={0.6}
            whileTap={{ cursor: "grabbing" }}
            className={styles.gitIconContainer}
          >
            <img
              style={{
                pointerEvents: "none",
              }}
              src={githubImg}
              alt="Github Logo"
            />
          </motion.div>

          <div className={styles.gitLink}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pawan087"
              className={styles.link}
            >
              GitHub
            </a>
          </div>

          <motion.div
            dragTransition={{ bounceStiffness: 400, bounceDamping: 17.5 }}
            style={{
              x: x2,
              y: y2,
              rotateX: rotateX2,
              rotateY: rotateY2,
              cursor: "grab",
            }}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={0.6}
            whileTap={{ cursor: "grabbing" }}
            className={styles.gitIconContainer}
          >
            <img
              style={{
                pointerEvents: "none",
              }}
              src={"https://raw.githubusercontent.com/MCE-Design/solo_project2/main/react-app/src/images/LI-In-Bug.png"}
              alt="LinkedIn Logo"
            />
          </motion.div>

          <div className={styles.gitLink}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/pawanchahal/"
              className={styles.link}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>©2021 Pawan Chahal</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
