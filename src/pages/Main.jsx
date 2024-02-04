import React from 'react'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import '../styles/Pages/Main.css'


const Main = () => {
  return (
    <div className="main">
     <Navbar />
     <Home /> 
    </div>
  );
};

export default Main;
