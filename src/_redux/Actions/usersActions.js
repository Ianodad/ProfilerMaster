import usersApi from '../../api/usersApi';
import { GET_ALL_USERS, GET_USER, GET_USER_LOCAL, PATCH_USER } from '../types';

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

  if (userObj) {
    dispatch({
      type: GET_USER_LOCAL,
      payload: userObj,
    });
  } else {
    const { data } = await usersApi.getUser(id);
    dispatch({
      type: GET_USER_LOCAL,
      payload: data,
    });
  }
};

const patchUserDetail = (id, userObj) => async (dispatch) => {
  const { data } = await usersApi.patchUserDetail(id, userObj);
  console.log(data);
  try {
    dispatch({
      type: PATCH_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export default {
  getAllUsers,
  getUser,
  getUserFromLocalState,
  patchUserDetail,
};
