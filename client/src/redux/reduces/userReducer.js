import {LOGOUT_USER,LOGIN_USER, AUTH, ADD_USER,DELETE_USER,GET_USER,DELETE_ALL_USERS} from "../types/types"

export default function (state={},action){

    switch(action.type){
        case ADD_USER :
             return {...state,addSuccess:action.payload}
        case LOGOUT_USER :
            return {...state,logoutSuccess:action.payload}
        case AUTH :
            return {...state,userData:action.payload}
        case LOGIN_USER :
            return {...state,loginSuccess:action.payload}
        default: return state

    }
}
