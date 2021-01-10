import React from 'react'
import * as Yup from "yup"
import {Formik} from "formik"
import "./loginPage.css"

const LoginPage=()=>{


    return(
        <div>


            <Formik
              initialValues={
                   {
                       email:"",
                       password:""
                   }
              }
            validationSchema={
                Yup.object().shape(
                    {
                        email:Yup.string()
                        .email("invalid email")
                        .required("required"),
                        password:Yup.string()
                          .min(6,"password must be at least 6 caracters...")
                          .required("password is required")

                    }
                         
                )
                
            }
              onSubmit={
                  (values,{isSubmitting})=>{
                    JSON.stringify(values,null,2)
                  }
              }

            >
            {
               ({
                   values,
                   handleBlur,
                   handleChange,
                   handleSubmit,
               })=>(
                <div className="form">
                    
                    <div className="container">
                        

                    </div>
                </div>
               ) 
            }
         
            </Formik>
        </div>
    )
}
export default LoginPage