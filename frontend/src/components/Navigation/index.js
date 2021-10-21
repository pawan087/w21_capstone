import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";

import styles from "./Navigation.module.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const products = useSelector((state) => state.products);
  const history = useHistory();

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

  const productPage = () => {
    const selection = document.getElementById("products").value;
    history.push(`/products/${selection}`);
  };

  // <option value="none" value="DEFAULT" disabled hidden>
  //   Select a Product
  // </option>;

  return (
    <ul className={styles.navbar}>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>

        <NavLink to="/products">Products</NavLink>

        <NavLink to="/cart">Shopping Cart</NavLink>

        <NavLink to="/orders">Orders</NavLink>

        <select onChange={productPage} name="products" id="products">
          {products?.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>

        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
