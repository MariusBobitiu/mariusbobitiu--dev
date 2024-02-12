import React from 'react';
import Logo from '../../assets/Logo-white.png';
import '../../styles/components/policies/Navbar.css'

function Navbar() {
  return (
    <>
      <div className='policy--navbar'>
         <div className='policies--navbar'>
            <div className="left-side">
               <img src={Logo} alt="Marius Bobitiu logo"/>
            </div>
            <div className="policies-right-side">
               <ul className="home--link">
                  <li className="back--home"><a href="/">goBack</a></li>
               </ul>
            </div> 
         </div>
      </div>
    </>
  )
}

export default Navbar;
