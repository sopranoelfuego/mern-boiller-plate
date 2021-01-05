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
    .catch(err => console.log("database connexion failed.."))

app.use("/users",require("./routes/users"))
//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const port =process.even.PORT || 5000

app.listen(port ,()=> console.log("server connected"))