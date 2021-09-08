import {GET_ALL_USERS, GET_USER } from "../types";

const initialState = {
  allUsers: [],
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        allOwnerRepos: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        allOwnerIssues: action.payload,
      };
    default:
      return state;
  }
};