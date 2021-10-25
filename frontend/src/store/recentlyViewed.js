import { csrfFetch } from "./csrf";

const SET_RECENTLY_VIEWED = "users/SET_RECENTLY_VIEWED";

const load = (recentlyViewed) => ({
  type: SET_RECENTLY_VIEWED,
  recentlyViewed,
});

export const addToRecent = (data) => async (dispatch) => {
  const { productId, userId } = data;

  const res = await csrfFetch("/api/recent", {
    method: "POST",
    body: JSON.stringify({ productId, userId }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

const initialState = [];

const recentlyViewedReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_RECENTLY_VIEWED:
      newState = action.recentlyViewed;
      return newState;
    default:
      return state;
  }
};

export default recentlyViewedReducer;
