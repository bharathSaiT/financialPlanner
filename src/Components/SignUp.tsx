import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

type SignUpProps ={
    press:()=> void
};

const SignUp: React.FC<SignUpProps> =({press})=> {
    const navigate = useNavigate();
    const [email,setemail] = useState<string>("");
    const [password,setpassword] = useState<string>("");

    function signUp() : void{
        fetch("http://localhost:3000/signup",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                email: email,
                password :password
            })
        }).then(callback)

        function callback(response :any ){
            if(response.ok){
                response.json().
                then(function(data){
                    console.log("check2");
                    const userid = "user";
                    press();
                    navigate(`/financialPlanner/user/${userid}`)
                })
            }else{
                alert("Login Failed!!")
            }
        }
    }
return(<>
 <Typography variant="h6" textAlign={"center"} style={{
    paddingTop:"150px"
 }}>
    Signup here (~_~)
 </Typography>
 <div style={{display:"flex" , justifyContent:"center"}}>
    <Card variant="outlined" style={{
        width:"500px",
        marginTop:"10px",
        padding:"10px"
    }}>
        <div  style={{
            display:"flex",
            justifyContent:"flex-start",
            flexDirection:"row",
            alignItems:"center",
            // padding:"10px"
        }}>
        {/* <Typography variant="h6" style={{
            padding:"5px"
        }}> Username </Typography> */}
        <TextField fullWidth={true} size="small" label={"Email"} variant="outlined" 
        onChange={e => setemail(e.target.value)}
        value={email}></TextField>
        </div>
        <br></br>
        <div  style={{
            display:"flex",
            justifyContent:"flex-start",
            flexDirection:"row",
            alignItems:"center",
            // padding:"10px"
        }}>
        {/* <Typography variant="h6" style={{
            padding:"5px"
        }}> Password </Typography> */}
        <TextField fullWidth={true} size="small" label={"password"} variant="outlined" type="password"
        onChange={e => setpassword(e.target.value)}
        value={password}></TextField>
        </div>
        <br></br>
        <div style={{
            // padding:"10px"
        }}>
            <Button type="submit" variant="contained" onClick={signUp}>Sign Up</Button>
        </div>
        
    </Card>
 </div>
 {/* <Typography textAlign={"center"}> go to singin page , to login</Typography> */}

</>)
}

export default SignUp;