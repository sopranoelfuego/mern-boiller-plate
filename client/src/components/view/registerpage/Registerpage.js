
import React,{useEffect} from 'react'
import {useDispatch} from "react-redux"
import * as Yup from "yup"
import {Formik} from "formik"
import {withRouter} from "react-router-dom"
import {addUser} from "../../../redux/actions/userActions"

const Registerpage =(props)=>{
    
   const dispatch=useDispatch()

    return(
        <Formik 
        
          initialValues={
              {
                  firstName:"",
                  lastName:"",
                  email:"",
                  password:"",
                  confirmedPassword:"",
                  isSubmitting:false,
              }
          }
          validationSchema={
              Yup.object().shape(
                  {
                      firstName:Yup.string().required("required"),
                      lastName:Yup.string()
                                .required("required"),
                                
                              
                      email:Yup.string()
                         .email("invalid email please try..")
                         .required("email is required"),

                         password:Yup.string()
                         .min(6,"error password must have at least 6 caracters..")
                         .required("required"),
                         confirmedPassword:Yup.string()
                           .oneOf([Yup.ref("password"),null],"error password must be the same..")
                           .required("required")


                  }
              )
          }

          onSubmit={
              (values,{setSubmitting})=>{
              setTimeout(()=>{
                  

                let data={
                    firstName:values.firstName,
                    lastName:values.lastName,
                    email:values.email,
                    password:values.password,
                }
                console.log("this is email from data from register 61",data.email)
                dispatch(addUser(data)).then(
                    response =>{
                        if(response.payload.success){
                            alert("user well registireted")
                            props.history.push("/")
                        }else console.log("error aquire while registrereted a user",response.payload.err)
                    }
                )
              },500)

                                            
          }
        }
        
        >
            {
                (
                    {
                        values,
                        handleSubmit,
                        handleChange,
                        handleBlur

                    }
                )=>(

                    <div>
                        <form onSubmit={handleSubmit}>


                            <label>firstname</label>
                            <input type="text" name="firstName" placeholder="aubin"
                             onChange={handleChange}
                              onBlur={handleBlur}/><br></br>
                            <label>lastName</label>
                            <input type="text" name="lastName" placeholder="ishimwe.." 
                            onChange={handleChange}
                              onBlur={handleBlur}/><br></br>
                            <label>Email</label>
                            <input type="email" name="email" placeholder="uandi@gmail..." onChange={handleChange}/><br></br>

                            <label>password</label>
                            <input type="password" name="password" onChange={handleChange}/><br></br>
                            <label>repeat password</label>
                            <input type="password" name="confirmedPassword"  onChange={handleChange}/><br></br>


                               <button type="submit">submit</button>
                                <pre>{JSON.stringify(values,null,2)}</pre>
                            </form>
                          
                    </div>
                
                )
            }

        </Formik>
    )


}
export default withRouter(Registerpage)