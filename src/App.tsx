import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './Components/AppBar'
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import { useState } from 'react';
import UserHome from './Components/UserHome';

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
          <AppBar  isLoggedIn={isLoggedIn} onLogout={handleLogout} ></AppBar>
          <Routes>
            <Route path="/Login" element={<Login press={handleLogout}></Login>}></Route>
            <Route path='/signup' Component={SignUp}></Route>
            <Route path='/user/:userid' element={ isLoggedIn? <UserHome></UserHome> : <Login press={handleLogout}></Login> } ></Route>
          </Routes>
          
        </div>
    </Router>
    </>
  )
}

export default App
