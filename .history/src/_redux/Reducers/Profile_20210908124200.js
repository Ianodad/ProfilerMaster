/* eslint-disable no-duplicate-case */
import {GET_ALL_USERS, GET_USER_BY_ID } from "../types";


const initialState = {
  
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_USER:
      // console.log(action.payload);
      return {
        ...state,
        userSearchResults: action.payload,
      };
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