import client from './client';

// define endpoint for different data sources
const endPointGetAllUsers = '/users'


const getAllUsers = () => client.get(endPointGetAllUsers);
const getUser = (id) => client.get(endPointGetAllUsers+'/'+id);


export default {
    getAllUsers,
    getUser
}