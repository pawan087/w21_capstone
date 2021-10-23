import { csrfFetch } from "./csrf";

const SET_ORDER_ITEMS = "orderItems/SET_ORDER_ITEMS";

const load = (orderItems) => ({
  type: SET_ORDER_ITEMS,
  orderItems,
});

export const setAllOrderItems = () => async (dispatch) => {
  const res = await fetch("/api/orderitems");

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const createOrderItem = (data) => async (dispatch) => {
  const { userId, productId, quantity } = data;

  const res = await csrfFetch("/api/orderitems", {
    method: "POST",
    body: JSON.stringify({
      userId,
      productId,
      quantity,
    }),
  });


  if (res.ok) {
    const data = await res.json();
    const id = data.id;
    return id;
  }
};

export const editOrderItem = (data) => async (dispatch) => {
  const { orderItemId, quantity } = data;

  const res = await csrfFetch("/api/orderitems/update", {
    method: "PUT",
    body: JSON.stringify({
      orderItemId,
      quantity,
    }),
  });


  if (res.ok) {
    const data = await res.json();
    const id = data.id;
    return id;
  }
};

const initialState = [];

const orderItemReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_ORDER_ITEMS:
      newState = action.orderItems;
      return newState;
    default:
      return state;
  }
};

export default orderItemReducer;
