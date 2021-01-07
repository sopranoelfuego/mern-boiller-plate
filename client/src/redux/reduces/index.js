import {combineReducers} from "redux"
const userReducer =require("./userReducer")


export const user=combineReducers(userReducer)