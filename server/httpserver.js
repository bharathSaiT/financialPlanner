// const http = require('http');
import http from 'http';
// import * as xyz feom 'abc';
// import {var1 ,var2 } from 'abc'

var getRes={
    name: "heelo from",
    city:"vjw"

}

const server = http.createServer((req,res)=>{

    res.writeHead(200);
    switch(req.method){
        case 'GET' :
            res.end(JSON.stringify(getRes));
            break;
        case 'POST' :
            res.end("POST request");
            break;
        case 'DELETE':
            res.end("delete request");
            break;
        default:
            res.end("default response")
    }
    
})

server.listen(3000 , 'localhost',()=>{
    console.log("server started");
})

