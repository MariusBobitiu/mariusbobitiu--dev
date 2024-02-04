import React from 'react';
import { HiMenu } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import '../styles/components/Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavbar, setActiveSection } from '../helpers/features/navbar/navbarSlice';
import { Link } from 'react-router-dom';



function Navbar() {
   const dispatch = useDispatch();
   const isNavbarOpen = useSelector(state => state.navbar.isNavbarOpen);
   const activeSection = useSelector(state => state.navbar.activeSection);

   const handleToggleNavbar = () => {
      dispatch(toggleNavbar());
   };
   
   const handleChangeActiveSection = (section) => {
      dispatch(setActiveSection(section));
   };
   
   const navbarMenuClass = isNavbarOpen ? 'navbar-menu navbar--visible' : 'navbar-menu';
   return (
      <div className="navbar">
          <HiMenu onClick={handleToggleNavbar} className='menuIcon' />
          <div className={navbarMenuClass}>
              <div className='navbar--top'>
                  <p> MAIN MENU </p>
                  <span onClick={() => dispatch(toggleNavbar())}> <IoCloseCircleOutline /> </span>
              </div>
              <ul className='navbar--links'>
                <li onClick={() => {
                    handleChangeActiveSection('homepage');
                    dispatch(toggleNavbar()); }}
                    className={`navbar--link ${activeSection === 'homepage' ? 'active-section' : '' }`}
                >
                    Homepage
                </li>
                <li onClick={() => {
                    handleChangeActiveSection('about');
                    dispatch(toggleNavbar()); }} 
                    className={`navbar--link ${activeSection === 'about' ? 'active-section' : '' }`}
                >
                    About Me
                </li>
                <li onClick={() => {
                    handleChangeActiveSection('projects');
                    dispatch(toggleNavbar()); }} 
                    className={`navbar--link ${activeSection === 'projects' ? 'active-section' : '' }`}
                >
                    Projects
                </li>
                <Link to='/expertise'>
                    <li className="navbar--link">
                        Expertise
                    </li>
                </Link>
                <li onClick={() => {
                    handleChangeActiveSection('contact');
                    dispatch(toggleNavbar()); }} 
                    className={`navbar--link ${activeSection === 'contact' ? 'active-section' : '' }`}
                >
                    Contact
                </li>
              </ul>
          </div>
      </div>
  );
  
}


export default Navbar
