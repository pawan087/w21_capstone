const SET_POST_ORDER_INFO = "orders/SET_POST_ORDER_INFO";

const load = (obj) => ({
  type: SET_POST_ORDER_INFO,
  obj,
});

export const setPostOrderInfo = (data) => async (dispatch) => {
  dispatch(load(data));
};

const initialState = [];

const postOrderReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_POST_ORDER_INFO:
      newState = action.obj;
      return newState;
    default:
      return state;
  }
};

export default postOrderReducer;
