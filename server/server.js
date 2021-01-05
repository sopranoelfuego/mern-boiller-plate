const express =require("express")
const cors=require("cors")
const app=express()
const mongoose=require("mongoose")
const config =require("./config")
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")
mongoose.connect(config.mongoURI,
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify: false
      }
    ).then(console.log("database succefful connected..."))
    .catch(err => console.log(`connexion failed due to the ${err}`))

app.use("/api/users",require("./routes/users"))
//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())//this allow to access information attached to the request with in body variable
app.use(cookieParser())//this allow to pass cookies variable across the entire app
const port =process.env.port || 5000

app.listen(port ,()=> console.log(`server listen on port ${port}`))