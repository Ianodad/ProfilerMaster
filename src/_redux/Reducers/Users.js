import { CLEAR_USER_STATE,GET_ALL_USERS, GET_USER, GET_USER_LOCAL, PATCH_USER } from '../types';

const initialState = {
  allUsers: [],
  user: {},
  localUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER_LOCAL:
      return {
        ...state,
        localUser: action.payload,
      };
    case CLEAR_USER_STATE:
      return {
        ...state,
        user: action.payload,
      };
    case PATCH_USER:
      return {
        ...state,
        allUsers: {...state.allUsers, ...action.payload},
      };
    default:
      return state;
  }
};
