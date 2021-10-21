const SET_ANSWER_LIKES = "answerLikes/SET_ANSWER_LIKES";

const load = (answerLikes) => ({
  type: SET_ANSWER_LIKES,
  answerLikes,
});

export const setAllAnswerLikes = () => async (dispatch) => {
  const res = await fetch("/api/answers/likes");

  if (res.ok) {
    const data = await res.json();

    dispatch(load(data));
  } else return "READ THUNK ERROR: BAD REQUEST";
};

const initialState = [];

const answerLikeReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_ANSWER_LIKES:
      newState = action.answerLikes;
      return newState;
    default:
      return state;
  }
};

export default answerLikeReducer;
