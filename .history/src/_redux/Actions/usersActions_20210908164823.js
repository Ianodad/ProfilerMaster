
import usersApi from "../../api/usersApi";
import { GET_ALL_USERS, GET_USER_BY_ID} from "./types";

const getAllUsers = () => async(dispatch)=>{
    const {data} = await usersApi.getAllUsers();

    dispatch({
        type: GET_ALL_USERS ,
        payload: data,
      });
}

const getUser = (id) => async(dispatch)=>{
onst {data} = await usersApi.getUser(id);
}

export const userActions={
    getAllUsers,
    getUser
}