import { csrfFetch } from "./csrf";

const SET_CART_ITEMS = "cartItems/SET_CART_ITEMS";

const load = (cartItems) => ({
  type: SET_CART_ITEMS,
  cartItems,
});

export const setAllCartItems = () => async (dispatch) => {
  const res = await fetch("/api/cartitems");

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const createCartItem = (data) => async (dispatch) => {
  const { userId, productId, quantity } = data;

  const res = await csrfFetch("/api/cartitems", {
    method: "POST",
    body: JSON.stringify({
      userId,
      productId,
      quantity,
    }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const consolidateCartItems = (data) => async (dispatch) => {
  const { idToDelete1, idToDelete2, sumQuantity, productId, userId } = data;

  console.log("TESTING");

  const res = await csrfFetch("/api/cartitems/consolidate", {
    method: "POST",
    body: JSON.stringify({
      idToDelete1,
      idToDelete2,
      sumQuantity,
      productId,
      userId,
    }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

const initialState = [];

const cartItemReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_CART_ITEMS:
      newState = action.cartItems;
      return newState;
    default:
      return state;
  }
};

export default cartItemReducer;