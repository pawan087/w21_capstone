import { csrfFetch } from "./csrf";

const SET_ORDER_ITEMS = "orderItems/SET_ORDER_ITEMS";

const SET_ORDER_ITEMS_TO_EDIT = "orderItems/SET_ORDER_ITEMS_TO_EDIT";

const load = (orderItems) => ({
  type: SET_ORDER_ITEMS,
  orderItems,
});

const load2 = (arr) => ({
  type: SET_ORDER_ITEMS_TO_EDIT,
  arr,
});

export const setAllOrderItems = () => async (dispatch) => {
  const res = await fetch("/api/orderitems");

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const setOrderItemsToEdit =
  ({ arr }) =>
  async (dispatch) => {
    dispatch(load2(arr));
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

export const deleteOrderItem = (data) => async (dispatch) => {
  const { orderItemId, orderId } = data;

  const res = await csrfFetch("/api/orderitems", {
    method: "DELETE",
    body: JSON.stringify({
      orderItemId,
      orderId,
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

const initialState2 = [];

export const orderItemToEditReducer = (state = initialState2, action) => {
  let newState;

  switch (action.type) {
    case SET_ORDER_ITEMS_TO_EDIT:
      newState = action.arr;
      return newState;
    default:
      return state;
  }
};

export default orderItemReducer;
