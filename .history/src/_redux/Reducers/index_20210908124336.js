import {combineReducers} from 'redux';

import gitHubApiReducer from "./profile"

export default combineReducers({

    gitHubApiData: gitHubApiReducer

})