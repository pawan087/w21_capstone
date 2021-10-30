import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
// import { SubMenu } from "@szhsin/react-menu";

import { setAllCartItems } from "../../store/cartItems";
import styles from "./Navigation.module.css";
import "@szhsin/react-menu/dist/index.css";
import SearchComponent from "../Search";

export default function MyNavBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cartItems);

  let thisUsersCartItems = cartItems?.filter((cartItem) => {
    return cartItem?.userId === user?.id;
  });

  let sum = 0;

  cartItems?.forEach((cartItem) => {
    if (cartItem.userId === user?.id) {
      sum += cartItem.quantity;
    }
  });

  console.log(thisUsersCartItems);

  useEffect(() => {
    dispatch(setAllCartItems());
  }, [dispatch]);

  return (
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
          <div onClick={() => history.push("/")} className={styles.navLogo}>
            <img
              src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw27bacb5e/images/svg-icons/logo-gs-2.svg"
              alt="logo"
            ></img>
          </div>
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
                    {thisUsersCartItems.length !== 0 && sum}
                  </div>
                )}
              </div>
            </MenuButton>
          }
        >
          <MenuItem className={styles.menuItemOuterContainer}>
            <div className={styles.menuItemLeftContainer}>
              <div className={styles.menuItemProductImageContainer}>
                <img
                  className={styles.menuItemProductImage}
                  alt="productImageInSubMenu"
                  src={
                    "https://media.gamestop.com/i/gamestop/11149084/Marvels-Guardians-of-the-Galaxy-Cosmic-Deluxe-Edition---Xbox-One?$pdp$$&fmt=webp"
                  }
                ></img>
              </div>
            </div>

            <div className={styles.menuItemRightContainer}>
              <div className={styles.menuItemRightTopContainer}>
                <div className={styles.menuItemProductName}>
                  Microsoft Xbox Series X Wireless Stereo Gaming Headset
                </div>

                <div className={styles.menuItemProductQuantity}>Qty 3</div>
              </div>

              <div className={styles.menuItemRightBottomContainer}>
                <div className={styles.removeLink}>Remove</div>

                <div className={styles.priceTag}>$834.33</div>
              </div>
            </div>
          </MenuItem>

          <MenuItem className={styles.menuItemOuterContainer}>
            <div className={styles.menuItemLeftContainer}>
              <div className={styles.menuItemProductImageContainer}>
                <img
                  className={styles.menuItemProductImage}
                  alt="productImageInSubMenu"
                  src={
                    "https://media.gamestop.com/i/gamestop/10138857/Sony-PlayStation-4-Slim-500GB-Console-Black?$pdp$$&fmt=webp"
                  }
                ></img>
              </div>
            </div>

            <div className={styles.menuItemRightContainer}>
              <div className={styles.menuItemRightTopContainer}>
                <div className={styles.menuItemProductName}>
                  Microsoft Xbox Series X Wireless Stereo Gaming Headset
                </div>

                <div className={styles.menuItemProductQuantity}>Qty 3</div>
              </div>

              <div className={styles.menuItemRightBottomContainer}>
                <div className={styles.removeLink}>Remove</div>

                <div className={styles.priceTag}>$834.33</div>
              </div>
            </div>
          </MenuItem>

          <MenuItem className={styles.lowerSubMenuContainer}>
            <div className={styles.lowerSubMenuContainerTopContainer}>
              <div classNam={styles.itemCountLabel}>7 items</div>

              <div className={styles.cartTotal}>Subtotal: $2,113.54</div>
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
  );
}
