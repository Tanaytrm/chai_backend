//require('dotenv').config({path: './env'})

import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config ({
    path: './env'
})

connectDB ()
.then (() => { 

    app.listen (process.env.PORT || 8000, ()=> {

        console.log (`Server is running at port : $ 
        {process.env.PORT}`);
        })

    })
     
.catch ((err) => {
    console.log ("MONGO DB connection failed !!", err);
})




/*
import {Express} from "express";
const app = Express ()


(async() => {

    try {
        await mongoose.connect (`${process.env.MONGODB_URI}/ ${DB_NAME}`)
        appp.on("error", (error) => {
            console.log("ERRR:", error);
            throw error
        })

        app.listen(process.env.PORT, ()=> {
            console.log (`App is listening on PORT $ {process.env.PORT}`);
        })
        
    } catch (error) {
        console.error ("ERROR: ", error)
        throw error
    }

})()
*/