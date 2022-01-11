//Third Party Module

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");



//Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Router
const infoRouter = require("./router");
app.use("/info",infoRouter);


//mongodb+srv://<username>:<password>@cluster0.zpya5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.listen(5000,()=>{
    console.log("Server Started on 5000");
})



//
//aoF2eJBMh2lkW211



//DB Connection
mongoose.connect('mongodb+srv://sharonamalan:aoF2eJBMh2lkW211@cluster0.zpya5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/RestAPI',
{
    
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log('MongoDB connected...');
});
