import {combineReducers} from 'redux';
import gitHubApiReducer from "./gitHubApi"

export default combineReducers({
    auth: authReducer,
    gitHubApiData: gitHubApiReducer

})