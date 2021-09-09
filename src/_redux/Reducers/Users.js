import {GET_ALL_USERS, GET_USER, GET_USER_LOCAL } from "../types";

const initialState = {
  allUsers: [],
  user: {},
  localUser:{}
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
    default:
      return state;
  }
};