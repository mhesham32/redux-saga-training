export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SET_CURRENT_USER_REQUESTED = 'SET_CURRENT_USER_REQUESTED';
export const SET_CURRENT_USER_FAILED = 'SET_CURRENT_USER_FAILED';
export const SET_CURRENT_USER_SUCCEDED = 'SET_CURRENT_USER_SUCCEDED';

export const getCurrentUser = id => ({ type: GET_CURRENT_USER, id });

export const setUserRequested = () => ({ type: SET_CURRENT_USER_REQUESTED });
export const setUserFailed = () => ({ type: SET_CURRENT_USER_FAILED });
export const setUserSucceded = user => ({
  type: SET_CURRENT_USER_SUCCEDED,
  user
});
