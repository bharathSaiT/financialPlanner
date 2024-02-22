import { Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import WalletIcon from '@mui/icons-material/Wallet';

const UserHome : React.FC = ()=>{
    const {userid }= useParams<{ userid: string }>();
    return (
        <>
        <Typography variant='h6' textAlign={"center"}>Welcome, User {userid}!</Typography>
        <div style={{
                    display:"flex",
                    justifyContent:"center",
                    flexDirection:"row",
                    padding:"10px"
                }}>
        <Paper elevation={12} square={false} style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"flex-start",
            alignItems:"center",
            gap:"25px",
            width:"400px",
            padding:"20px"
        }}>
            <Paper elevation={4} square={false} style={{
                width:"50px",
                height:"50px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <WalletIcon fontSize='large'></WalletIcon> 
            </Paper>
            <div>
            <Typography variant='h6' color={"grey"} fontSize={18}>Networth</Typography>
            <Typography variant='h5' fontSize={25}> $9999</Typography>
            </div>
            
        </Paper>
        </div>
        
        
        </>
    )
}

export default UserHome;