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
