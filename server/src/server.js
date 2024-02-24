// const express = require('express')

import express from 'express';
const app = express();

const users=[];
app.get('/',(req,res)=>{
    res.send("response from exp what sdfsf")
})

app.post('/',(req,res)=>{
    
})

console.log("sdfsfs");

app.listen(3000,()=>{
    console.log("Server started at porther 3000")
})