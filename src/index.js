//require('dotenv').config({path: './env'})

import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config ({
    path: './env'
})

connectDB ()




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