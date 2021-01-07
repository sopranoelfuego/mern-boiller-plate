import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {auth} from "../redux/actions/userActions"

export default function (WithHoComponent,option,adminRoute=null) {

    const user =useSelector(state => state.user)
    function IsHeAuth(props){
         let dispatch=useDispatch()
        useEffect(()=>{
            dispatch(auth()).then(response =>{
                if(!response.payload.isAuth){  
                    props.history.push("/login")

                }else {
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push("/")
                    }else {
                        if(option == false){
                            props.history.push("/")
                        }
                    }
                }
            })
        },[])
       return <WithHoComponent {...props} user={user}/>
 
    }
    return IsHeAuth
}
