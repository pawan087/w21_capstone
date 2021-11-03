import { csrfFetch } from "./csrf";

const SET_ORDERS = "orders/SET_ORDERS";
const SET_TEST = "test/SET_TESTS";

const load = (orders) => ({
  type: SET_ORDERS,
  orders,
});

const load2 = (test) => ({
  type: SET_TEST,
  test,
});

export const setAllOrders = () => async (dispatch) => {
  const res = await fetch("/api/orders");

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const createOrderItemsAndOrder = (data) => async (dispatch) => {
  const { user, cartItems, lastOrderId, address1, address2 } = data;

  const res = await csrfFetch("/api/orders/complete", {
    method: "POST",
    body: JSON.stringify({
      user,
      cartItems,
      lastOrderId,
      address1,
      address2,
    }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load2(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const updateOrderAddress = (data) => async (dispatch) => {
  const { id, address1, address2 } = data;

  const res = await csrfFetch("/api/orders/address", {
    method: "PUT",
    body: JSON.stringify({
      id,
      address1,
      address2,
    }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const deleteOrder = (data) => async (dispatch) => {
  const { id } = data;

  const res = await csrfFetch("/api/orders", {
    method: "DELETE",
    body: JSON.stringify({
      id,
    }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const deleteOrders = (data) => async (dispatch) => {
  const { idsToDeleteArr } = data;

  const res = await csrfFetch("/api/orders/clear", {
    method: "DELETE",
    body: JSON.stringify({
      idsToDeleteArr,
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
