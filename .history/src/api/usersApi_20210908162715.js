import client from './client';

// define endpoint for different data sources
const endPointGetAllUsers = '/users'


const getAllUsers = () => client.get(endPointGetAllUsers);


export default {
    get
}