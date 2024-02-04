import React from 'react';
import Logo from '../../assets/Logo-white.png';
import '../../styles/components/expertise/Navbar.css'
import { HiMenu } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavbar } from '../../helpers/features/navbar/navbarSlice';
import { IoCloseCircleOutline } from 'react-icons/io5';

function Navbar({ classSet, home, resume, certs }) {
   const dispatch = useDispatch();
   const isNavbarOpen = useSelector(state => state.navbar.isNavbarOpen);

   const handleToggleNavbar = () => {
      dispatch(toggleNavbar());
   };

   const navbarMenuClass = isNavbarOpen ? 'visible' : '';

  return (
    <>
      <div className={`exp--navbar ${classSet}`}>
         <div className={`expertise--navbar ${navbarMenuClass}`}>
            <div className="left-side">
               <img src={Logo} alt="Marius Bobitiu logo" onClick={home}/>
            </div>
            <div className="right-side">
               <span className="exp-nav--icon" onClick={handleToggleNavbar}><HiMenu /></span>
               <ul className="exp-nav--links">
                  <li className="exp-nav--link" onClick={resume}> Resume </li>
                  <li className="exp-nav--link" onClick={certs}> Certifications </li>
                  <li className="exp-nav--link"> <a href="/">goBack</a> </li>
                  <li 
                     className="exp-nav--link exp-nav--closeIcon"
                     onClick={handleToggleNavbar}>
                     <IoCloseCircleOutline />
                  </li>
               </ul>
            </div> 
         </div>
      </div>
    </>
  )
}

export default Navbar;
