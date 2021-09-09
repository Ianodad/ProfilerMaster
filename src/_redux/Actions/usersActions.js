
import usersApi from "../../api/usersApi";
import { GET_ALL_USERS, GET_USER, GET_USER_LOCAL} from "../types";

const getAllUsers = () => async(dispatch)=>{
    const {data} = await usersApi.getAllUsers();

    dispatch({
        type: GET_ALL_USERS,
        payload: data,
      });
}

const getUser = (id) => async(dispatch)=>{
    const {data} = await usersApi.getUser(id);
    dispatch({
        type: GET_USER,
        payload: data,
    })
}

const getUserFromLocalState = (id) => async(dispatch, getState)=>{
    const userObj = getState().Profile.user

    if (userObj) {
        dispatch({
            type: GET_USER_LOCAL,
            payload: userObj,
        })    
    } else {
        const {data} = await usersApi.getUser(id);
        dispatch({
            type: GET_USER_LOCAL,
            payload: data,
        })

    }
}
export default {
    getAllUsers,
    getUser,
    getUserFromLocalState
}