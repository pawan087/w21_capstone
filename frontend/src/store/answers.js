import { csrfFetch } from "./csrf";

const SET_ANSWERS = "questions/SET_ANSWERS";

const load = (answers) => ({
  type: SET_ANSWERS,
  answers,
});

export const setAllAnswers = () => async (dispatch) => {
  const res = await fetch("/api/answers");

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const createAnswer = (data) => async (dispatch) => {
  const { userId, questionId, content } = data;

  const res = await csrfFetch("/api/answers", {
    method: "POST",
    body: JSON.stringify({
      userId,
      questionId,
      content,
    }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const editAnswer = (data) => async (dispatch) => {
  const { id, content } = data;

  const res = await csrfFetch("/api/answers/update", {
    method: "PUT",
    body: JSON.stringify({ id, content }),
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

export const deleteAnswer = (data) => async (dispatch) => {
  const { id, arr } = data;

  const res = await csrfFetch("/api/answers", {
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

const initialState = [];

const answerReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_ANSWERS:
      newState = action.answers;
      return newState;
    default:
      return state;
  }
};

export default answerReducer;
