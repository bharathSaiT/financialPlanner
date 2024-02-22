import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

type AppBarProps={
    isLoggedIn: boolean,
    onLogout: ()=>void
}
const AppBar: React.FC<AppBarProps> = (props : AppBarProps)=>{
    const {isLoggedIn ,  onLogout} = props;

    return (<>
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
        padding:"10px"
    }}>
        <div>
            <Typography variant={"h6"}>
                Financial Planner
            </Typography>
        </div>
        <div style={{
            display:"flex",
            justifyContent:"flex-end",
            flexDirection:"row",
            alignItems:"center",
            gap:"10px"
            }}>
            
            {isLoggedIn && <Typography> icon</Typography>}
            {isLoggedIn ? (<Button onClick={onLogout}>LogOut</Button>) :
            (<>
                <Link to="/signup">
            <Button variant="contained" >
                SignUp
            </Button>
            </Link>
            <Button variant="contained" onClick={()=>{
                window.location= '/login';
            }}>
                SignIn
            </Button>
            </>
            )}
            
        </div>
    </div>
    </>)
}


export default AppBar;