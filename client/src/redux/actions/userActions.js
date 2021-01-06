import {LOGOUT_USER,LOGOUT_USER, AUTH, ADD_USER} from "../types"

import axios from 'axios'
import {userServer} from "../../config"
const addUser=(dataTosubmit)=>{
    
    let preparedRequest=axios.post(`${userServer}/addUser`,dataTosubmit).then(
        res=> res.data
    )

    return {
        type:ADD_USER,
        payload:preparedRequest
    }
}
const loginUser=(dataTosubmit)=>{
    let preparedRequest=axios.post(`${userServer}/login`,dataTosubmit)
      .then(res=>res.data)

      return {
          type:LOGIN_USER,
          payload:preparedRequest
      }

}
const logoutUser=()=>{
let preparedRequest=axios.post(`${userServer}/logout`).then(res => res.data)
return {
    type:LOGOUT_USER,
    payload:preparedRequest
}
}
const auth=()=>{
    let preparedRequest=axios.post(`${userServer}/auth`).then(res => res.data)
    return {
        type:AUTH,
        payload:preparedRequest
    }
}


exports {addUser,loginUser,auth,logoutUser}