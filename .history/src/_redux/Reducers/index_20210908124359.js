import {combineReducers} from 'redux';

import ProfileReducer from "./Profile"

export default combineReducers({

    gitHubApiData: gitHubApiReducer

})