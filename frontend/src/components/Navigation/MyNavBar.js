import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion/dist/framer-motion";
import Rodal from "rodal";
import ReactLoading from "react-loading";
import { FaStoreAlt } from "react-icons/fa";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

import * as sessionActions from "../../store/session";
import SearchComponent from "../Search";
import { setAllCartItems, deleteCartItem } from "../../store/cartItems";
import styles from "./Navigation.module.css";
import "@szhsin/react-menu/dist/index.css";

export default function MyNavBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [removeConfirmation, setRemoveConfirmation] = useState(false); // set to false, true for testing
  const [loader, setLoader] = useState(false);
  const [productName, setProductName] = useState();
  const [productId, setProductId] = useState();
  const [productPic, setProductPic] = useState();
  const [cartItemId, setCartItemId] = useState();
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [load, setLoad] = useState(false);

  const handleVideoGames = () => {
    history.push("/p/videogames/0/0/0");
    closeNav();
  };

  const handleConsoles = () => {
    history.push("/p/consoles/0/0/0");
    closeNav();
  };

  const handleAccessories = () => {
    history.push("/p/accessories/0/0/0");
    closeNav();
  };

  const handleElectronics = () => {
    history.push("/p/electronics/0/0/0");
    closeNav();
  };

  const handleToysGames = () => {
    history.push("/p/toysgames/0/0/0");
    closeNav();
  };

  const handleClothing = () => {
    history.push("/p/clothing/0/0/0");
    closeNav();
  };

  const sendToOrders = () => {
    closeNav2();
    history.push("/orders");
  };

  const sendToAccount = () => {
    closeNav2();
    history.push("/account/1");
  };

  const variants = {
    closed: { width: "0px" },
    open: { width: "400px" },
  };

  const variants1 = {
    closed: { width: 0 },
    open: { width: 375 },
  };

  function openNav() {
    setVisible(true);
  }

  function closeNav() {
    setVisible(false);
  }

  function openNav2() {
    setVisible2(true);
  }

  function closeNav2() {
    setVisible2(false);
  }

  const showRemoveConfirmationModal = (name, id, id2, img) => {
    setProductName(name);

    setProductId(id);

    setCartItemId(id2);

    setRemoveConfirmation(true);

    setProductPic(img);

    return productId;
  };

  const hideRemoveConfirmationModal = () => {
    setRemoveConfirmation(false);
  };

  const user = useSelector((state) => state.session.user);
  const products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cartItems);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let inCartProducts = [];
  let cartSubtotal = 0;

  cartItems.forEach((cartItem) => {
    if (cartItem?.userId === user?.id) {
      products?.forEach((product) => {
        if (product.id === cartItem.productId) {
          inCartProducts.push({
            ...product,
            quantity: cartItem.quantity,
            cartItemId: cartItem.id,
          });
          cartSubtotal += cartItem.quantity * product.price;
        }
      });
    }
  });

  inCartProducts.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }

    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }

    return 0;
  });

  let sum = 0;

  cartItems?.forEach((cartItem) => {
    if (cartItem.userId === user?.id) {
      sum += cartItem.quantity;
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoader(true);

    await dispatch(deleteCartItem({ idToDelete: cartItemId }));

    await dispatch(setAllCartItems());

    setLoader(false);

    hideRemoveConfirmationModal();
  };

  useEffect(() => {
    (async () => {
      await dispatch(setAllCartItems());

      await dispatch(sessionActions.restoreUser());

      setLoad(true);
    })();
  }, [dispatch]);

  if (!load) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.loaderCotnainer}
      >
        <ReactLoading
          type={"spin"}
          color={"rgba(0,0,0,.75)"}
          height={"0px"}
          width={"57.5px"}
        />
      </motion.div>
    );
  }

  const handleCartClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    history.push("/cart");
  };

  const handleSignOut = async (e) => {
    e.preventDefault();

    setLoader(true);

    await dispatch(sessionActions.logout());

    setVisible2(false);

    setLoader(false);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    history.push("/");
  };

  return (
    <div className={styles.myNavbar}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.outerContainer}
      >
        <div className={styles.leftSection}>
          <div onClick={openNav} className={styles.leftMenuButtonContainer}>
            <div className={styles.leftMenuButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <div className={styles.leftMenuLabel}>Shop</div>
          </div>

          <div className={styles.navLogoContainer}>
            <motion.div
              dragTransition={{ bounceStiffness: 400, bounceDamping: 17.5 }}
              style={{
                x: x,
                y: y,
                rotateX: rotateX,
                rotateY: rotateY,
                cursor: "grab",
              }}
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragElastic={0.6}
              whileTap={{ cursor: "grabbing" }}
              onClick={() => history.push("/")}
              className={styles.navLogo}
            >
              <img
                src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw27bacb5e/images/svg-icons/logo-gs-2.svg"
                alt="logo"
                style={{
                  pointerEvents: "none",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              ></img>
            </motion.div>
          </div>
        </div>

        <div className={styles.middleSection}>
          <div className={styles.searchBarContainer}>
            <SearchComponent products={products} />
          </div>
        </div>

        <div className={styles.rightSection}>
          {user && (
            <div onClick={openNav2} className={styles.rightMenuButtonContainer}>
              <div className={styles.userInitials}>
                {user?.firstName &&
                  user?.lastName &&
                  `${user.firstName[0]}${user.lastName[0]}`}
              </div>

              <div className={styles.accountLabel}>Account</div>
            </div>
          )}

          {!user && (
            <div
              onClick={() => history.push("/signin")}
              className={styles.button2}
            >
              <div className={styles.cartButtonContainer}>
                <div className={styles.carButton}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <div className={styles.cartLabel2}>Sign In</div>

                {user && inCartProducts.length > 0 && (
                  <div className={styles.numOfCartItems}>
                    {inCartProducts.length !== 0 && sum}
                  </div>
                )}
              </div>
            </div>
          )}

          {inCartProducts.length > 0 && (
            <Menu
              arrow={true}
              align={"end"}
              className={styles.menu}
              menuButton={
                <MenuButton className={styles.button}>
                  <div className={styles.cartButtonContainer}>
                    <div className={styles.carButton}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>

                    <div className={styles.cartLabel}>Cart</div>

                    {user && inCartProducts.length > 0 && (
                      <div className={styles.numOfCartItems}>
                        {inCartProducts.length !== 0 && sum}
                      </div>
                    )}
                  </div>
                </MenuButton>
              }
            >
              <div className={styles.cartSubMenu}>
                {inCartProducts?.map((product, i) => {
                  // console.log(product.images[0]);
                  return (
                    <MenuItem key={i} className={styles.menuItemOuterContainer}>
                      <div className={styles.menuItemLeftContainer}>
                        <div
                          onClick={() =>
                            history.push(`/products/${product.id}`)
                          }
                          className={styles.menuItemProductImageContainer}
                        >
                          <img
                            className={styles.menuItemProductImage}
                            alt="productImageInSubMenu"
                            src={product?.images[0]}
                          />
                        </div>
                      </div>

                      <div className={styles.menuItemRightContainer}>
                        <div className={styles.menuItemRightTopContainer}>
                          <div
                            onClick={() =>
                              history.push(`/products/${product.id}`)
                            }
                            className={styles.menuItemProductName}
                          >
                            {product?.name.slice(0, 42)}
                            {product?.name?.length > 42 ? "..." : null}
                          </div>

                          <div className={styles.menuItemProductQuantity}>
                            Qty {product?.quantity}
                          </div>
                        </div>

                        <div className={styles.menuItemRightBottomContainer}>
                          <div
                            onClick={() =>
                              showRemoveConfirmationModal(
                                product.name,
                                product.id,
                                product.cartItemId,
                                product.images[0]
                              )
                            }
                            className={styles.removeLink}
                          >
                            Remove
                          </div>

                          <div className={styles.priceTag}>
                            ${product.price}
                          </div>
                        </div>
                      </div>
                    </MenuItem>
                  );
                })}
              </div>

              <MenuItem className={styles.lowerSubMenuContainer}>
                <div className={styles.lowerSubMenuContainerTopContainer}>
                  <div className={styles.itemCountLabel}>{sum} items</div>

                  <div className={styles.cartTotal}>
                    Subtotal: ${formatter.format(cartSubtotal)}
                  </div>
                </div>

                <div className={styles.lowerSubMenuContainerBottomContainer}>
                  <div className={styles.viewCartButtonContainer}>
                    <button
                      onClick={handleCartClick}
                      className={styles.viewCartButton}
                    >
                      VIEW CART
                    </button>
                  </div>
                </div>
              </MenuItem>
            </Menu>
          )}

          {user && inCartProducts.length === 0 && (
            <div
              onClick={() => history.push("/cart")}
              className={styles.cartButtonContainer2}
            >
              <div className={styles.carButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              <div className={styles.cartLabel}>Cart</div>

              {user && inCartProducts.length > 0 && (
                <div className={styles.numOfCartItems}>
                  {inCartProducts.length !== 0 && sum}
                </div>
              )}
            </div>
          )}

          {!user && inCartProducts.length === 0 && (
            <div
              onClick={() => history.push("/signin")}
              className={styles.cartButtonContainer3}
            >
              <div className={styles.carButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              <div className={styles.cartLabel}>Cart</div>

              {user && inCartProducts.length > 0 && (
                <div className={styles.numOfCartItems}>
                  {inCartProducts.length !== 0 && sum}
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>

      <Rodal
        closeOnEsc={true}
        enterAnimation={"zoom"}
        leaveAnimation={"fade"}
        width={500}
        height={285}
        visible={removeConfirmation}
        onClose={hideRemoveConfirmationModal}
      >
        <div className={styles.deleteReviewConfirmationModal}>
          <div className={styles.firstContainer}>
            <div className={styles.modalTitle}>REMOVE PRODUCT?</div>
          </div>

          <div className={styles.onePointFiveContainer}>
            <div className={styles.confirmationText}>
              Are you sure you want to remove the following product from the
              cart?
            </div>
          </div>

          <div className={styles.secondContainer}>
            <img alt="productPic" src={productPic} />
            <div className={styles.reviewUsername}>{productName}</div>
          </div>

          <div className={styles.thirdContainer}>
            <div className={styles.cancelButtonContainer}>
              <button
                onClick={hideRemoveConfirmationModal}
                className={styles.cancelButton}
              >
                CANCEL
              </button>
            </div>

            <div className={styles.yesButtonContainer}>
              <button
                onClick={(e) => handleSubmit(e)}
                className={styles.yesButton}
              >
                YES
              </button>
            </div>
          </div>
        </div>
      </Rodal>

      {loader && (
        <div className={styles.loader}>
          <ReactLoading
            type={"bubbles"}
            color={"rgb(231,35,13)"}
            height={"0px"}
            width={"120px"}
          />
        </div>
      )}

      {
        /* SIDE BARS */

        <>
          {visible && <div onClick={closeNav} className={styles.background} />}

          {
            /* SIDE BAR LEFT */

            <motion.div
              initial={{ width: "0px" }}
              animate={visible ? "open" : "closed"}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              variants={variants1}
              className={styles.sidebar}
            >
              <div className={styles.closebtn}>
                <span className={styles.sidebarAccountLabel2}>Shop</span>{" "}

                <span onClick={closeNav} className={styles.closeSideBarButton}>
                  &times;
                </span>
              </div>

              <div className={styles.sidebarSecondContainer2}>
                <div className={styles.shopLabel}>Shop By Category</div>
              </div>

              <div className={styles.sidebarMenuItemsContainer3}>
                <div
                  onClick={() => handleVideoGames()}
                  className={styles.sidebarMenuItem3}
                >
                  Video Games
                </div>

                <div
                  onClick={() => handleConsoles()}
                  className={styles.sidebarMenuItem3}
                >
                  Consoles & Hardware
                </div>

                <div
                  onClick={() => handleAccessories()}
                  className={styles.sidebarMenuItem3}
                >
                  Gaming Accessories
                </div>

                <div
                  onClick={() => handleElectronics()}
                  className={styles.sidebarMenuItem3}
                >
                  Electronics
                </div>

                <div
                  onClick={() => handleToysGames()}
                  className={styles.sidebarMenuItem3}
                >
                  Toys & Games
                </div>

                <div
                  onClick={() => handleClothing()}
                  className={styles.sidebarMenuItem3}
                >
                  Clothing
                </div>
              </div>

              <div className={styles.fakeSidebarFooter}>
                <div className={styles.fakeSidebarFooterLeft}>
                  <div className={styles.gameStopLocaiton}>
                    Plaza San Jose - GameStop
                  </div>
                  <div className={styles.gameStopStoreHours}>
                    Open until 9:00 PM
                  </div>
                </div>

                <div className={styles.fakeSidebarFooterRight}>
                  {" "}
                  <FaStoreAlt
                    style={{
                      height: "20px",
                      width: "20px",
                      display: "inline",
                      color: "black",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          }

          {visible2 && (
            <div onClick={closeNav2} className={styles.background} />
          )}

          {
            /* SIDE BAR RIGHT */
            <motion.div
              initial={{ width: 0 }}
              animate={visible2 ? "open" : "closed"}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              variants={variants}
              id="mySidebar2"
              className={styles.sidebar2}
            >
              <div className={styles.closebtn2}>
                <span className={styles.sidebar2AccountLabel}>Account</span>{" "}
                
                <span
                  onClick={closeNav2}
                  className={styles.closeSideBar2Button}
                >
                  &times;
                </span>
              </div>

              <div className={styles.sidebar2SecondContainer}>
                <div className={styles.sidebar2User}>
                  Hi, {user?.firstName}!
                </div>

                <div className={styles.sidebar2PowerUp}>PowerUP Player</div>
              </div>

              <div className={styles.sidebar2MenuItemsContainer}>
                <div
                  onClick={sendToAccount}
                  className={styles.sidebar2MenuItem}
                >
                  Account Overview
                </div>

                <div onClick={sendToOrders} className={styles.sidebar2MenuItem}>
                  Orders
                </div>
              </div>

              <div className={styles.sidebar2MenuItemsContainer2}>
                <div
                  onClick={(e) => handleSignOut(e)}
                  className={styles.sidebar2MenuItem2}
                >
                  Sign Out
                </div>
              </div>
            </motion.div>
          }
        </>

        /* END SIDE BARS */
      }
    </div>
  );
}
