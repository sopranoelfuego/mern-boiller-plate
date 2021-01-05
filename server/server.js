const express =require("express")
const cors=require("cors")
const app=express()
const mongoose=require("mongoose")
const config =require("./config")

mongoose.connect(config.mongoURI,
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify: false
      }
    ).then(console.log("database succefful connected..."))
    .catch(err => console.log("database connexion failed.."))

app.use("/users",require("./routes/users"))

const port =process.even.PORT || 5000

app.listen(port ,()=> console.log("server connected"))