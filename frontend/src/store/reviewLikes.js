import { csrfFetch } from "./csrf";

const SET_REVIEW_LIKES = "reviewLikes/SET_REVIEW_LIKES";

const load = (reviewLikes) => ({
  type: SET_REVIEW_LIKES,
  reviewLikes,
});

export const setAllReviewLikes = () => async (dispatch) => {
  const res = await fetch("/api/reviews/likes");

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const createLike = (data) => async (dispatch) => {
  const { userId, reviewId, like } = data;

  const res = await csrfFetch("/api/reviews/likes", {
    method: "POST",
    body: JSON.stringify({
      userId,
      reviewId,
      like,
    }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const deleteLike = (id) => async (dispatch) => {
  const res = await csrfFetch("/api/reviews/likes", {
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

export const deleteTheOpposingAndCreateLike = (data) => async (dispatch) => {
  const { userId, reviewId, like, idToDelete } = data;

  const res = await csrfFetch("/api/reviews/likes", {
    method: "PUT",
    body: JSON.stringify({
      userId,
      reviewId,
      like,
      idToDelete,
    }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

const initialState = [];

const reviewLikeReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_REVIEW_LIKES:
      newState = action.reviewLikes;
      return newState;
    default:
      return state;
  }
};

export default reviewLikeReducer;
