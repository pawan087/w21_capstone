import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { Modal } from "./context/Modal";
import { setAllProducts } from "../src/store/products";
import * as sessionActions from "./store/session";

import AccountSettings from "./components/AccountDashboard/AccountSettings";
import AccountSettings2 from "./components/AccountDashboard/AccountSettings2";
import SplashPage from "./components/SplashPage/SplashPage.js";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import AccountSettings3 from "./components/AccountDashboard/AccountSettings3";
import AccountDashboard from "./components/AccountDashboard/AccountDashboard";
import Test from "./components/Test";
import NotFound from "./components/NotFound/NotFound";
import ScrollUpButton from "../src/components/Product/ScrollUpButton";
import SignIn from "../src/components/SignIn/index.jsx";
// import Footer from "./components/Footer";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import ProductsPage from "./components/Products";
import ProductPage from "./components/Product";
import MyNavBar from "./components/Navigation/MyNavBar";
import OrderConfirmation from "./components/OrderConfirmation/index.jsx";
import Cart from "./components/Cart/index.jsx";
import PostOrder from "./components/PostOrderConfirmation/PostOrder";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(setAllProducts());
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <MyNavBar />

      {false && <Navigation isLoaded={isLoaded} />}

      {false && <button onClick={() => setShowModal(true)}>Modal</button>}

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Hello I am a Modal</h1>
        </Modal>
      )}

      {isLoaded && (
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            {false && <Route path="/login" exact={true}>
              <LoginFormPage />
            </Route>}

            {false && (
              <Route path="/signup" exact={true}>
                <SignupFormPage />
              </Route>
            )}

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

            {false && <Route path="/test" exact={true}>
              <Test />
            </Route>}

            <Route path="/ordered" exact={true}>
              <PostOrder />
            </Route>

            <Route path="/orders" exact={true}>
              <AccountDashboard />
            </Route>

            <Route path="/account/1" exact={true}>
              <AccountSettings />
            </Route>

            <Route path="/account/2" exact={true}>
              <AccountSettings2 />
            </Route>

            <Route path="/account/3" exact={true}>
              <AccountSettings3 />
            </Route>

            <Route path="/signin" exact={true}>
              <SignIn />
            </Route>

            <Route path="/signup" exact={true}>
              <CreateAccount />
            </Route>

            <Route path="/" exact={true}>
              <SplashPage />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </AnimatePresence>
      )}

      <ScrollUpButton />
    </>
  );
}

export default App;

// <Footer />
