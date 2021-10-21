import { csrfFetch } from "./csrf";

const SET_PRODUCTS = "products/SET_PRODUCTS";

const load = (products) => ({
  type: SET_PRODUCTS,
  products,
});

export const setAllProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const updateProduct = (data) => async (dispatch) => {
  const { id, rating } = data;

  console.log('yee', data);
  
  const res = await csrfFetch("/api/products/update", {
    method: "PUT",
    body: JSON.stringify({
      id,
      rating,
    }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

const initialState = [];

const productReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_PRODUCTS:
      newState = action.products;
      return newState;
    default:
      return state;
  }
};

export default productReducer;
