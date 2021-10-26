import { csrfFetch } from "./csrf.js";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export const login =
  ({ credential, password }) =>
  async (dispatch) => {
    const response = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({ credential, password }),
    });

    const data = await response.json();
    dispatch(setUser(data.user));

    return response;
  };

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");

  const data = await response.json();
  dispatch(setUser(data.user));

  return response;
};

export const signup = (user) => async (dispatch) => {
  const {
    username,
    email,
    password,
    firstName,
    lastName,
    phone,
    address1,
    address2,
  } = user;

  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
      firstName,
      lastName,
      phone,
      address1,
      address2,
    }),
  });

  const data = await response.json();
  dispatch(setUser(data.user));

  return response;
};

export const profileEdit = (obj) => async (dispatch) => {
  const {
    id,
    username,
    email,
    newPassword,
    password,
    firstName,
    lastName,
    phone,
    address1,
    address2,
  } = obj;

  const response = await csrfFetch("/api/session/edit", {
    method: "PUT",
    body: JSON.stringify({
      id,
      username,
      email,
      newPassword,
      password,
      firstName,
      lastName,
      phone,
      address1,
      address2,
    }),
  });

  const data = await response.json();
  dispatch(setUser(data));

  return data;

  // const data = await response.json();

  // console.log(data);

  // if (response.ok) {
  //   const data = await response.json();

  //   dispatch(setUser(data));

  //   return null;
  // } else if (response.status < 500) {
  //   const data = await response.json();

  //   if (data.errors) {
  //     return data.errors;
  //   }
  // } else {
  //   return ["An error occurred. Please try again."];
  // }
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });

  dispatch(removeUser());

  return response;
};

const initialState = { user: null };

function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state, { user: action.payload });
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null });
      return newState;
    default:
      return state;
  }
}

export default reducer;
