const SET_PRODUCTS = "products/SET_PRODUCTS";

const load = (products) => ({
  type: SET_PRODUCTS,
  products,
});

export const setAllProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");

  // console.log(res);

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

const initialState = {};

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
