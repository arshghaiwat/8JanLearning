// require('dotenv').config({ path: './env' })

import dotenv from "dotenv";

//import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";

import connectDB from "../db/index.js";

//we are using import syntax through experimentaion in scripts....this import syntax not given in npmjs dcoumentation of dotenv
dotenv.config({
    path: './env'
})

connectDB()






/*
import express from "express"

const app = express()

;( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("error", (error) => {
            console.log("ERROR",(error));
            throw error
        })

        app.listen(process.env.PORT, () =>{
            console.log(`app is running on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("error mila hai", error);
        throw error
    }
} )()
*/
