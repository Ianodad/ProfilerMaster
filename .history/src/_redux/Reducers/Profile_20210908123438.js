/* eslint-disable no-duplicate-case */
import {GET_ALL_USERS, GET_ONE_ } from "../_actions/types";


const initialState = {
  get
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
    case GET_ALL_OWNER_REPOS:
      return {
        ...state,
        allOwnerRepos: action.payload,
      };
    case GET_ALL_OWNER_ISSUES:
      return {
        ...state,
        allOwnerIssues: action.payload,
      };
    default:
      return state;
  }
};