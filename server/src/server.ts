// const express = require('express')

import express ,{Request,Response}from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(bodyParser.json());
app.use(cors());


const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User',userSchema);
mongoose.connect("mongodb+srv://100x:devs@cluster0.ygjnrxl.mongodb.net/");

type userType = {
    email: string,
    password : string,
    userid: number
}
const users : userType[]=[];

app.get('/',(req: Request,res: Response)=>{
    res.send("response from exp sdcdcd")
})

function createUser (user : userType) : void{
    users.push(user);
    console.log(users);
}

app.post('/signup',async (req : Request,res: Response)=>{
    const email : string = req.body.email;
    const password:string = req.body.password;
    let uuid:number = Math.floor(Math.random()*10000)+1;

    let check = await User.findOne({email});
    if(check){
        res.status(403).json({
            message:" user already exists"
        })
    }else{
        const obj = {email , password};
        const newUser = new User(obj);
        await newUser.save();
        res.status(200).json({
            "message":"user created!!"
        })
    }
    
})

app.post('/login',async(req : Request,res: Response)=>{
    const email : string = req.body.email;
    const password:string = req.body.password;

    let user =await User.findOne({email,password});
    if(user){
        res.status(200).json({
            "message":"user logged in"
        })
    }else{
        res.status(403).json({
            message: "Check Credentials"
        });
    }
    
})



app.listen(3000,()=>{
    console.log("Server started at port 3000")
})

    // console.log(req.body);
    // console.log("params : ",req.query);
    // console.log("headers : " , req.headers.username);