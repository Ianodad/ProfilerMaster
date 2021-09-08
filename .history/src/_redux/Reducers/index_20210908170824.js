import {combineReducers} from 'redux';

import ProfileReducer from "./Users"

export default combineReducers({

    Profile: ProfileReducer

})