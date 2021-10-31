import React, { useRef } from "react";
import styles from "./Test.module.css";
import {
  motion,
  Frame,
  useTransform,
  useMotionValue,
} from "framer-motion/dist/framer-motion";

export default function Test() {
  // const constraintsRef = useRef(null);

  // const x = useMotionValue(0);
  // const rotateY = useTransform(x, [-200, 0, 200], [-45, 0, 45], {
  //   clamp: false,
  // });

  // const x = useMotionValue(0);
  // const y = useMotionValue(0);
  // const rotateX = useTransform(y, [-100, 100], [60, -60]);
  // const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
    x.set(event.pageX);
    y.set(event.pageY);
  }

  return (
    <motion.div
      style={{
        width: 400,
        height: 400,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        perspective: 400,
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      onMouseMove={handleMouse}
    >
      <motion.div
        style={{
          width: '33%',
          height: '33%',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      >
        <img
          alt="Toddler Korra bending water, earth, and fire"
          src="https://media1.tenor.com/images/e3ee9db7e7c1a339e2006670c51b5b78/tenor.gif?itemid=9141214"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />
      </motion.div>
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
