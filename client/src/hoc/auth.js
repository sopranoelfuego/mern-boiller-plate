import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {auth} from "../redux/actions/userActions"

export default function (component,option,adminRoute=null) {

    const userReducer =useSelector(state => state.userReducer)
    function isHeAuth(){
         let dispatch=useDispatch()
        useEffect(()=>{
            dispatch(auth()).then(response =>{
                if(!response.payload.isHeAuth){  
                    props.push("/login")

                }
            })
        },[])
 
    }
    return (
        <div>
            
        </div>
    )
}
