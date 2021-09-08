import {combineReducers} from 'redux';

import gitHubApiReducer from "./gitHubApi"

export default combineReducers({

    gitHubApiData: gitHubApiReducer

})