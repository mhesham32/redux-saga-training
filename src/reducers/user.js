import {
  SET_CURRENT_USER_FAILED,
  SET_CURRENT_USER_REQUESTED,
  SET_CURRENT_USER_SUCCEDED
} from '../actions';

const INITIAL_STATE = {
  user: {
    id: '',
    name: '',
    country: '',
    address1: '',
    phone: null
  },
  loading: false,
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_REQUESTED:
      return {
        ...state,
        loading: true
      };
    case SET_CURRENT_USER_FAILED:
      return {
        ...state,
        laoding: false,
        error: true
      };
    case SET_CURRENT_USER_SUCCEDED:
      return {
        ...state,
        user: { ...action.user },
        loading: false
      };
    default:
      return state;
  }
};
