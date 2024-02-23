import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './Components/AppBar'
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import { useState } from 'react';
import UserHome from './Components/UserHome';
import MiniDrawer from './Components/MiniDrawer';

const  App : React.FC =()=>{
  const [isLoggedIn , setisLoggedIn]= useState(false);

    const handleLogout= ()=>{
        console.log("clicked from app")
        setisLoggedIn((prev)=> !prev );
    }

  return (
    <>
    <Router>
        <div style={{ width: "100vw" , height:"100vh" ,backgroundColor:"#eeeeee"}}>
          {!isLoggedIn && <AppBar  isLoggedIn={isLoggedIn} onLogout={handleLogout} ></AppBar>}
          <Routes>
            <Route path="/financialPlanner/" element={<Login press={handleLogout}></Login>}></Route>
            <Route path='/financialPlanner/signup' Component={SignUp}></Route>
            <Route path='/financialPlanner/user/:userid' element={ isLoggedIn? <MiniDrawer onLogout={handleLogout}></MiniDrawer> : <Login press={handleLogout}></Login> } ></Route>
          </Routes>
          
        </div>
    </Router>
    </>
  )
}

export default App
