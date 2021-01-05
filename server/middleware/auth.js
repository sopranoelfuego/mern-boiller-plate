const jsonwebtoken =require('jsonwebtoken')
const User =require('../models/User')


let auth=(res,req,next)=>{
    let token=res.cookies.w_auth

}