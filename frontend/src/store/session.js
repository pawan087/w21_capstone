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

// Old

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
};

// New

export const updateProfile = (obj) => async (dispatch) => {
  const { id, phone, address1, address2 } = obj;

  const response = await csrfFetch("/api/session/update", {
    method: "PUT",
    body: JSON.stringify({
      id,
      phone,
      address1,
      address2,
    }),
  });

  const data = await response.json();
  dispatch(setUser(data));

  return data;
};

export const updateUserInformation = (obj) => async (dispatch) => {
  const { id, phone, address1, address2, firstName, lastName } = obj;

  const response = await csrfFetch("/api/session/updateprofile", {
    method: "PUT",
    body: JSON.stringify({
      id,
      phone,
      address1,
      address2,
      firstName,
      lastName,
    }),
  });

  const data = await response.json();
  dispatch(setUser(data));

  return data;
};

// Update name

export const updateName = (obj) => async (dispatch) => {
  const { id, firstName, lastName } = obj;

  const response = await csrfFetch("/api/session/name", {
    method: "PUT",
    body: JSON.stringify({
      id,
      firstName,
      lastName,
    }),
  });

  const data = await response.json();
  dispatch(setUser(data));

  return data;
};

// Update e-mail

export const updateEmail = (obj) => async (dispatch) => {
  const { id, email, currentPassword } = obj;

  const response = await csrfFetch("/api/session/email", {
    method: "PUT",
    body: JSON.stringify({
      id,
      email,
      currentPassword,
    }),
  });

  const data = await response.json();
  dispatch(setUser(data));

  return data;
};

// Update Password

export const updatePassword = (obj) => async (dispatch) => {
  const { id, oldPassword, newPassword } = obj;

  const response = await csrfFetch("/api/session/password", {
    method: "PUT",
    body: JSON.stringify({
      id,
      oldPassword,
      newPassword,
    }),
  });

  const data = await response.json();
  dispatch(setUser(data));

  return data;
};

// End New

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
