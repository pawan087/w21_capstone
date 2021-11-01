import React, { useRef } from "react";
import styles from "./Test.module.css";
import {
  motion,
  Frame,
  useTransform,
  useMotionValue,
} from "framer-motion/dist/framer-motion";

export default function Test() {
  const constraintsRef = useRef(null);

  // const x = useMotionValue(0);
  // const rotateY = useTransform(x, [-200, 0, 200], [-45, 0, 45], {
  //   clamp: false,
  // });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  return (
    <motion.div
      dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
      style={{
        width: 150,
        height: 150,
        borderRadius: 30,
        backgroundColor: "#fff",
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
    >
      <img
        alt="Toddler Korra bending water, earth, and fire"
        src="https://media1.tenor.com/images/e3ee9db7e7c1a339e2006670c51b5b78/tenor.gif?itemid=9141214"
        style={{
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </motion.div>
  );
}

// <motion.div className={styles.container} ref={constraintsRef}>
// <div className={styles.body}>
//   <motion.div
//     className={styles.item}
//     drag
//     dragConstraints={constraintsRef}
//   />
// </div>
// </motion.div>

// <motion.div
// drag
// style={{
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '341.5px', /* maintain aspect ratio of dimensions of this original img source */
//     height: '255px'
// }}
// >
// <img
// alt="Toddler Korra bending water, earth, and fire"
// src="https://media1.tenor.com/images/e3ee9db7e7c1a339e2006670c51b5b78/tenor.gif?itemid=9141214"
// style={{
//     pointerEvents: 'none',
//     width: '100%',
//     height: '100%',
//     objectFit: 'fill'
// }}
// />
// </motion.div>
