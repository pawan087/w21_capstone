const SET_REVIEWS = "reviews/SET_REVIEWS";

const load = (reviews) => ({
  type: SET_REVIEWS,
  reviews,
});

export const setAllReviews = () => async (dispatch) => {
  const res = await fetch("/api/reviews");

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

const initialState = [];

const reviewReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_REVIEWS:
      newState = action.reviews;
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
