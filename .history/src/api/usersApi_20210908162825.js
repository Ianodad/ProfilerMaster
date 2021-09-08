import client from './client';

// define endpoint for different data sources
const endPointGetAllUsers = '/users'


const getAllUsers = () => client.get(endPointGetAllUsers);
const getUserId=()=>client.get(endPointGetAllUsers);


export default {
    getAllUsers,
}