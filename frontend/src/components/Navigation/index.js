import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SearchComponent from "../Search";
import styles from "./Navigation.module.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const products = useSelector((state) => state.products);

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

        <br />

        <SearchComponent products={products} />
      </li>
    </ul>
  );
}

export default Navigation;

// <input
//   type="text"
//   onChange={(e) => setCriteria(e.target.value)}
//   value={criteria}
//   placeholder="Search"
//   onKeyPress={handleKeypress}
// ></input>

// <button onClick={handleSubmit}>Find</button>

// <select
//   name="originId"
//   defaultValue="chooseProduct"
//   onChange={productPage}
//   id="products"
// >
//   <option value="chooseProduct" disabled>
//     Select a Product
//   </option>

//   {products?.map((product, i) => (
//     <option key={i} value={product.id}>
//       {product.name}
//     </option>
//   ))}
// </select>
