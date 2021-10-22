import { csrfFetch } from "./csrf";

const SET_ORDERS = "orders/SET_ORDERS";

const load = (orders) => ({
  type: SET_ORDERS,
  orders,
});

export const setAllOrders = () => async (dispatch) => {
  const res = await fetch("/api/orders");

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const createOrderItemsAndOrder = (data) => async (dispatch) => {
  const { user, cartItems, lastOrderId } = data;

  const res = await csrfFetch("/api/orders/complete", {
    method: "POST",
    body: JSON.stringify({
      user,
      cartItems,
      lastOrderId,
    }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

const initialState = [];

const orderReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_ORDERS:
      newState = action.orders;
      return newState;
    default:
      return state;
  }
};

export default orderReducer;
