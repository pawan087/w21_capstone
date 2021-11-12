const SET_SHOW_ALL_REVIEWS = "reviewS/SET_SHOW_ALL_REVIEWS";

const load = (bool) => ({
  type: SET_SHOW_ALL_REVIEWS,
  bool,
});

export const setShowAllReviews = (data) => async (dispatch) => {
  dispatch(load(data));
};

const initialState = {};

const showAllReviewsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_SHOW_ALL_REVIEWS:
      newState = action.bool;
      return newState;
    default:
      return state;
  }
};

export default showAllReviewsReducer;
