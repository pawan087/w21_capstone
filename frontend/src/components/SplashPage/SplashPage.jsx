import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

import CODBanner from "./CODBanner";
import SubBanner from "./Subbanner";
import TopSellers from "./TopSellers";
import Footer from "../Footer/index";
import styles from "./styles.module.css";

export default function SplashPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.splashPageOuterContainer}
    >
      <CODBanner />
      <SubBanner />
      <TopSellers />

      <Footer />
    </motion.div>
  );
}
