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
