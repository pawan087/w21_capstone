import "./test.css";
import {
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion/dist/framer-motion";
import Sidebar from "react-sidebar";
import { useState } from "react";
import Rodal from "rodal";

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

  const showSettings = (e) => {
    e.preventDefault();
    return;
  };
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const showSideBar = () => {
    setSideBarOpen(true);
  };

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  const [visible, setVisible] = useState(true);

  const hide = () => {
    setVisible(false);
  };

  return (
    <div>
      <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div id="main">
        <button class="openbtn" onClick={openNav}>
          &#9776; Open Sidebar
        </button>
        <h2>Collapsed Sidebar</h2>
        <p>Content...</p>
      </div>
    </div>
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
