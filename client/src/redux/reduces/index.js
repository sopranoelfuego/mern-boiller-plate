import {combineReducers} from "redux"
import {userReducer} from "./userReducer"


export const combineReduces=combineReducers(userReducer)