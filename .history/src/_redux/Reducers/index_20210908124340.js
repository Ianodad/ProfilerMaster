import {combineReducers} from 'redux';

import gitHubApiReducer from "./Profile"

export default combineReducers({

    gitHubApiData: gitHubApiReducer

})