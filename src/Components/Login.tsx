import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

type LoginProps={
    press:()=> void
}

const Login : React.FC<LoginProps> = ({press}) =>  {
    const navigate = useNavigate();
    const [email,setemail] = useState<string>("");
    const [password,setpassword] = useState<string>("");

    const handleLogin=()=>{
        fetch("http://localhost:3000/login",{
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
                    const userid = "user";
                    press();
                    navigate(`/financialPlanner/user/${userid}`)
                })
            }else{
                alert("Login Failed!!")
            }
        }
    }

return (<>

    <Typography variant={"h6"} textAlign={"center"} style={{
        paddingTop:"150px"
    }}> Welcome to financial planner </Typography>
    <div style={{display:"flex", justifyContent:"center"}}>
        <Card variant="outlined" style={{
            width : "500px",
            marginTop:"10px",
            padding:"10px"
        }}>

                <div>
                    <TextField  fullWidth= {true} id="filled-basic" label="Email" variant="outlined" type="email" size= "small"
                    onChange={e => setemail(e.target.value)}
                    value={email}/>
                </div>
                <br></br>
                <div>
                    <TextField fullWidth={true} id="filled-basic" label="Password" variant="outlined" type="password" size= "small"
                    onChange={e => setpassword(e.target.value)}
                    value={password}/>
                </div>
                <br></br>
                <Button variant="contained" onClick={handleLogin}>Login </Button>            

        </Card>
    </div>
</>)
}

export default Login;