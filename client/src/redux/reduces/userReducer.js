import {LOGOUT_USER,LOGOUT_USER, AUTH, ADD_USER,DELETE_USER,GET_USER,DELETE_ALL_USERS} from "../types"

export const userReducer =(state={},action)=>{

    switch(action.type){
        case ADD_USER :
             return {...state,addSuccess:action.payload}
        case LOGOUT_USER :
            return {...state,logoutSuccess:actions.payload}
        case AUTH :
            return {...state,userData:action.payload}
        case LOGIN_USER :
            return {...state,loginSuccess:action.payload}
        default: return state

    }
}
