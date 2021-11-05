import { useState } from "react";

import styles from "./test.module.css";

export default function Test() {
  const [visible, setVisible] = useState(false);

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    setVisible(true);
    // document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    setVisible(false);
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  return (
    <div>
      {visible && <div onClick={closeNav} className={styles.background} />}
      <div id="mySidebar" className={styles.sidebar}>
        <a
          href="javascript:void(0)"
          className={styles.closebtn}
          onClick={closeNav}
        >
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div id="main">
        <button className={styles.openbtn} onClick={openNav}>
          &#9776; Open Sidebar
        </button>
        <h2>Collapsed Sidebar</h2>
        <p>Content...</p>
      </div>
    </div>
  );
}
