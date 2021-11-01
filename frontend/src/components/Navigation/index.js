import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import styles from "./Navigation.module.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />

        <NavLink to="/login">Log In</NavLink>

        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className={styles.navbar}>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>

        <NavLink to="/products">Products</NavLink>

        <NavLink to="/cart">Shopping Cart</NavLink>

        <NavLink to="/orders">Orders</NavLink>

        <NavLink to="/profile">Edit User Profile</NavLink>

        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
