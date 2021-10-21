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
