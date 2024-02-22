import { Button, Card, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

type LoginProps={
    press:()=> void
}

const Login : React.FC<LoginProps> = ({press}) =>  {
    const navigate = useNavigate();

    const handleLogin=()=>{
        press();
        const userid = 246;
        navigate(`/user/${userid}`);
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
                    <TextField  fullWidth= {true} id="filled-basic" label="Email" variant="outlined" type="email" size= "small"/>
                </div>
                <br></br>
                <div>
                    <TextField fullWidth={true} id="filled-basic" label="Password" variant="outlined" type="password" size= "small"/>
                </div>
                <br></br>
                <Button variant="contained" onClick={handleLogin}>Login </Button>            

        </Card>
    </div>
</>)
}

export default Login;