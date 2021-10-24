import { csrfFetch } from "./csrf";

const SET_QUESTIONS = "questions/SET_QUESTIONS";

const load = (questions) => ({
  type: SET_QUESTIONS,
  questions,
});

export const setAllQuestions = () => async (dispatch) => {
  const res = await fetch("/api/questions");

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const createQuestion = (data) => async (dispatch) => {
  const { userId, productId, content } = data;

  const res = await csrfFetch("/api/questions", {
    method: "POST",
    body: JSON.stringify({
      userId,
      productId,
      content,
    }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const editQuestion = (data) => async (dispatch) => {
  const { id, content } = data;

  const res = await csrfFetch("/api/questions/update", {
    method: "PUT",
    body: JSON.stringify({ id, content }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

const initialState = [];

const questionReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_QUESTIONS:
      newState = action.questions;
      return newState;
    default:
      return state;
  }
};

export default questionReducer;
