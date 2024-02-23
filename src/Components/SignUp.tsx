import { Button, Card, TextField, Typography } from "@mui/material";
import React from "react";

type SignUpProps ={};

const SignUp: React.FC<SignUpProps> =()=> {
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
        padding:"5px"
    }}>
        <div  style={{
            display:"flex",
            justifyContent:"flex-start",
            flexDirection:"row",
            alignItems:"center",
            padding:"10px"
        }}>
        <Typography variant="h6" style={{
            padding:"5px"
        }}> Username </Typography>
        <TextField fullWidth={true} size="small" label={"username"} variant="outlined"></TextField>
        </div>
        <div  style={{
            display:"flex",
            justifyContent:"flex-start",
            flexDirection:"row",
            alignItems:"center",
            padding:"10px"
        }}>
        <Typography variant="h6" style={{
            padding:"5px"
        }}> Password </Typography>
        <TextField fullWidth={true} size="small" label={"password"} variant="outlined" type="password"></TextField>
        </div>
        <div style={{
            padding:"10px"
        }}>
            <Button type="submit" variant="contained">Sign Up</Button>
        </div>
        
    </Card>
 </div>
 <Typography textAlign={"center"}> go to singin page , to login</Typography>

</>)
}

export default SignUp;