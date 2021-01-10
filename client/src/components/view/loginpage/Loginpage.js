import React from 'react'
import * as Yup from "yup"
import {Formik} from "formik"
import {withRouter} from "react-router-dom"
import "./loginPage.css"

const LoginPage=(props)=>{


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
                  (values,{setSubmitting})=>{
                    alert(JSON.stringify(values,null,2))
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
                <div className="container">
                    
                    <div className="form-container">
                        <div className="header-form">
                            this is header-form
                        </div>
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                               
                                <label for="email">Email</label>
                                <input type="form-control" name="email" onChange={handleChange} onBlur={handleBlur}/><br></br>

                                
                            <label for="password">password</label>
                                <input type="password" name="password" onChange={handleChange} onBlur={handleBlur}/><br></br>

                           
                            <pre>{JSON.stringify(values,null,2)}</pre>
                            </form>

                        </div>

                    </div>
                </div>
               ) 
            }
         
            </Formik>
        </div>
    )
}
export default withRouter(LoginPage)