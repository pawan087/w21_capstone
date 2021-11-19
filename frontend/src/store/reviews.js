import { csrfFetch } from "./csrf";

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

export const createReview = (data) => async (dispatch) => {
  const { userId, productId, content, rating, image } = data;

  const formData = new FormData();

  formData.append("userId", userId);
  formData.append("productId", productId);
  formData.append("content", content);
  formData.append("rating", rating);

  if (image) formData.append("image", image);

  const res = await csrfFetch("/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const deleteReview = (data) => async (dispatch) => {
  const { id, arr } = data;

  const res = await csrfFetch("/api/reviews", {
    method: "DELETE",
    body: JSON.stringify({
      id,
      arr,
    }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const editReview = (data) => async (dispatch) => {
  const { id, rating, content, image } = data;

  const formData = new FormData();

  formData.append("id", id);
  formData.append("content", content);
  formData.append("rating", rating);

  if (image) formData.append("image", image);

  const res = await csrfFetch("/api/reviews/update", {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const deleteImage = (id) => async (dispatch) => {
  const res = await csrfFetch("/api/reviews/image", {
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
