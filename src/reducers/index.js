import { combineReducers } from "redux";
import CarsReducer from './cars'
import UserReducer from './user'

export default combineReducers({
    CarsReducer,
    UserReducer
})