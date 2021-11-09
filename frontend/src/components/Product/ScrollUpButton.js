import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { Button } from "./Styles";
// import styles from './scrollup.module.css'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    // 85
    if (scrolled > 85) {
      setVisible(true);
    } else if (scrolled <= 85) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button className='scrollToTop'>
      <FaAngleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export default ScrollButton;
