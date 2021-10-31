import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  motion,
  Frame,
  useTransform,
  useMotionValue,
} from "framer-motion/dist/framer-motion";

import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
// import { SubMenu } from "@szhsin/react-menu";

import { setAllCartItems } from "../../store/cartItems";
import styles from "./Navigation.module.css";
import "@szhsin/react-menu/dist/index.css";
import SearchComponent from "../Search";

export default function MyNavBar() {
  const constraintsRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

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
          inCartProducts.push({ ...product, quantity: cartItem.quantity });
          cartSubtotal += cartItem.quantity * product.price;
        }
      });
    }
  });

  let sum = 0;

  cartItems?.forEach((cartItem) => {
    if (cartItem.userId === user?.id) {
      sum += cartItem.quantity;
    }
  });

  useEffect(() => {
    dispatch(setAllCartItems());
  }, [dispatch]);

  return (
    <div className={styles.myNavbar}>
      <div className={styles.outerContainer}>
        <div className={styles.leftSection}>
          <div className={styles.leftMenuButtonContainer}>
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
          <div className={styles.rightMenuButtonContainer}>
            <div className={styles.userInitials}>
              {user && `${user.firstName[0]}${user.lastName[0]}`}
            </div>

            <div className={styles.accountLabel}>Account</div>
          </div>

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

                  {user && (
                    <div className={styles.numOfCartItems}>
                      {inCartProducts.length !== 0 && sum}
                    </div>
                  )}
                </div>
              </MenuButton>
            }
          >
            {inCartProducts?.map((product, i) => {
              // console.log(product.images[0]);
              return (
                <MenuItem key={i} className={styles.menuItemOuterContainer}>
                  <div className={styles.menuItemLeftContainer}>
                    <div className={styles.menuItemProductImageContainer}>
                      <img
                        className={styles.menuItemProductImage}
                        alt="productImageInSubMenu"
                        src={product?.images[0]}
                      ></img>
                    </div>
                  </div>

                  <div className={styles.menuItemRightContainer}>
                    <div className={styles.menuItemRightTopContainer}>
                      <div className={styles.menuItemProductName}>
                        {product?.name}
                      </div>

                      <div className={styles.menuItemProductQuantity}>
                        Qty {product?.quantity}
                      </div>
                    </div>

                    <div className={styles.menuItemRightBottomContainer}>
                      <div className={styles.removeLink}>Remove</div>

                      <div className={styles.priceTag}>${product.price}</div>
                    </div>
                  </div>
                </MenuItem>
              );
            })}

            <MenuItem className={styles.lowerSubMenuContainer}>
              <div className={styles.lowerSubMenuContainerTopContainer}>
                <div classNam={styles.itemCountLabel}>{sum} items</div>

                <div className={styles.cartTotal}>
                  Subtotal: ${formatter.format(cartSubtotal)}
                </div>
              </div>

              <div className={styles.lowerSubMenuContainerBottomContainer}>
                <div classNam={styles.viewCartButtonContainer}>
                  <button className={styles.viewCartButton}>VIEW CART</button>
                </div>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
