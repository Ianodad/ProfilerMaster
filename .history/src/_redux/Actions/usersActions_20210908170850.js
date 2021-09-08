
import usersApi from "../../api/usersApi";
import { GET_ALL_USERS, GET_USER} from "./types";

const getAllUsers = () => async(dispatch)=>{
    const {data} = await usersApi.getAllUsers();

    dispatch({
        type: GET_ALL_USERS ,
        payload: data,
      });
}

const getUser = (id) => async(dispatch)=>{
    const {data} = await usersApi.getUserById(id);
    dispatch({
        type: GET_USER ,
        payload: data,
    })
}

export const userActions={
    getAllUsers,
    getUser
}