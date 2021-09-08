// utilizing api apisauce that has built in axios plus error handling

import {create} from 'apisauce'; 

// define base api url the export it as a global variable
const apiClient = create({
    baseURL:'https://ti-react-test.herokuapp.com',
})
export default apiClient;