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
  const { userId, productId, content, rating } = data;

  const res = await csrfFetch("/api/reviews", {
    method: "POST",
    body: JSON.stringify({
      userId,
      productId,
      content,
      rating,
    }),
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
  const { id, rating, content } = data;

  const res = await csrfFetch("/api/reviews/update", {
    method: "PUT",
    body: JSON.stringify({ id, rating, content }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const upload = (data) => async (dispatch) => {
  const { image } = data;
  const formData = new FormData();

  // for multiple files
  // if (images && images.length !== 0) {
  //   for (var i = 0; i < images.length; i++) {
  //     formData.append("images", images[i]);
  //   }
  // }

  // for single file
  if (image) formData.append("image", image);

  // console.log(image);

  const res = await csrfFetch(`/api/reviews/images`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  //   const data = await res.json();
  //   dispatch(setUser(data.user));
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
