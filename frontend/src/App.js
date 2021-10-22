import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { Modal } from "./context/Modal";
import ProductsPage from "./components/Products";
import ProductPage from "./components/Product";
import OrderConfirmation from "./components/OrderConfirmation";
import Orders from "./components/Orders";
import Cart from "./components/Cart/index";
import { setAllProducts } from "../src/store/products";

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
        </Switch>
      )}
    </>
  );
}

export default App;
