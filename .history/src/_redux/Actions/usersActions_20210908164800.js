
import usersApi from "../../api/usersApi";
import { GET_ALL_USERS, GET_USER_BY_ID} from "./types";

const getAllUsers = () => async(dispatch)=>{
    const {data} = await usersApi.

    dispatch({
        type: GET_ALL_OWNER_REPOS ,
        payload: data,
      });
}

const getUser = (id) => async(dispatch)=>{

}

export const userActions={
    getAllUsers,
    getUser
}