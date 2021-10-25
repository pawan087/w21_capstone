import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { Modal } from "./context/Modal";
import { setAllProducts } from "../src/store/products";
import * as sessionActions from "./store/session";

import ImageUpload from "./components/Product/ImageUpload";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import ProductsPage from "./components/Products";
import ProductPage from "./components/Product";
import EditOrderPage from "./components/Orders/EditOrderPage";
import OrderConfirmation from "./components/OrderConfirmation";
import Orders from "./components/Orders";
import Cart from "./components/Cart/index";

function App() {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(setAllProducts());
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      <button onClick={() => setShowModal(true)}>Modal</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Hello I am a Modal</h1>
        </Modal>
      )}

      {isLoaded && (
        <Switch>
          <Route path="/login" exact={true}>
            <LoginFormPage />
          </Route>

          <Route path="/signup" exact={true}>
            <SignupFormPage />
          </Route>

          <Route path="/products" exact={true}>
            <ProductsPage />
          </Route>

          <Route path="/products/:id" exact={true}>
            <ProductPage />
          </Route>

          <Route path="/cart" exact={true}>
            <Cart />
          </Route>

          <Route path="/confirm" exact={true}>
            <OrderConfirmation />
          </Route>

          <Route path="/orders" exact={true}>
            <Orders />
          </Route>

          <Route path="/edit/:id/:num/:items/:address1/:address2" exact={true}>
            <EditOrderPage />
          </Route>

          <Route path="/upload" exact={true}>
            <ImageUpload />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
