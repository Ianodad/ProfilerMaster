import usersApi from '../../api/usersApi';
import { CLEAR_USER_STATE,GET_ALL_USERS, GET_USER, PATCH_USER } from '../types';

const getAllUsers = () => async (dispatch) => {
  const { data } = await usersApi.getAllUsers();

  dispatch({
    type: GET_ALL_USERS,
    payload: data,
  });
};

const getUser = (id) => async (dispatch) => {
  const { data } = await usersApi.getUser(id);
  dispatch({
    type: GET_USER,
    payload: data,
  });
};

const getUserFromLocalState = (id) => async (dispatch, getState) => {
  const userObj = getState().Profile.user;
  if (userObj==={}) {
    dispatch({
      type: GET_USER,
      payload: userObj,
    });
  } else {
    const { data } = await usersApi.getUser(id);
    dispatch({
      type: GET_USER,
      payload: data,
    });
  }
};

const clearUserState = () => async (dispatch) => {
  
  dispatch({
    type: CLEAR_USER_STATE,
    payload: {},
  });
}
const patchUserDetail = (id, userObj, history) => async (dispatch) => {
  const { data } = await usersApi.patchUserDetail(id, userObj);
  try {
    dispatch({
      type: PATCH_USER,
      payload: data,
    });
    history.push({pathname:'/', state: {added:'user'}});
  } catch (error) {
    // console.log(error);
  }
};
export default {
  getAllUsers,
  getUser,
  getUserFromLocalState,
  patchUserDetail,
  clearUserState
};
