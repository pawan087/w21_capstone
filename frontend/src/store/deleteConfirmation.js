const SET_DELETE_REVIEW_CONFIRMATION = "reviewS/SET_DELETE_REVIEW_CONFIRMATION";

const load = (review) => ({
  type: SET_DELETE_REVIEW_CONFIRMATION,
  review,
});

export const setDeleteReview = (data) => async (dispatch) => {
  dispatch(load(data));
};

const initialState = {};

const deleteConfirmationReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_DELETE_REVIEW_CONFIRMATION:
      newState = action.review;
      return newState;
    default:
      return state;
  }
};

export default deleteConfirmationReducer;
