import { Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import WalletIcon from '@mui/icons-material/Wallet';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import { grey } from '@mui/material/colors';
import MiniDrawer from './MiniDrawer';

const UserHome : React.FC = ()=>{
    const {userid }= useParams<{ userid: string }>();
    return (
        <>
        {/* <Typography variant='h6' textAlign={"center"}>Welcome, User {userid}!</Typography> */}
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start"
        }}>
            <div style={{ // Common container for greeting text and FinanceCard
            display: "flex",
            flexDirection: "column",
            paddingLeft:"30px"
            }}>
            <Typography  variant='h4' fontSize={20}>Hi, User</Typography>
            <Typography  variant='h6'color={"grey"}>This is your financial summary!! </Typography>
            </div>
        <div style={{
                    display:"flex",
                    justifyContent:"flex-start",
                    flexDirection:"row",
                    padding:"30px",
                    gap:"30px"
                }}>
        <FinanceCard card="Networth" cardValue='$9999' Icon={WalletIcon}></FinanceCard>
        <FinanceCard card="Liability" cardValue='$2599' Icon={BusinessCenterSharpIcon}></FinanceCard>
        </div>
        </div>
        
        </>
    )
}

type FinanceCardProps = {
card : string,
cardValue : string,
Icon : React.FC
}
const FinanceCard : React.FC<FinanceCardProps>=(props :FinanceCardProps)=>{
    const {card , cardValue , Icon } = props;

    return(
    <>
        <Paper elevation={12} square={false} style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"flex-start",
            alignItems:"center",
            gap:"25px",
            width:"400px",
            padding:"20px",
            borderRadius:"15px"
        }}>
            <Paper elevation={4} square={false} style={{
                width:"50px",
                height:"50px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Icon fontSize='large' ></Icon>
            </Paper>
            <div>
            <Typography variant='h6' color={"grey"} fontSize={18}>{card}</Typography>
            <Typography variant='h5' fontSize={20}> {cardValue} </Typography>
            </div>
            
        </Paper>
    </>)
}

export default UserHome;