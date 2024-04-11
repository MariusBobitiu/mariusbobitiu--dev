import React, {useState} from 'react';
import Typewriter from '../helpers/Typewriter';
import '../styles/components/HomePage.css';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../helpers/features/navbar/navbarSlice';

// ---------- ICONS ----------
import { MdPlace } from "react-icons/md";
import { IconContext } from 'react-icons';
import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";
import { FaRegCopyright } from 'react-icons/fa6';
import { IoIosArrowForward } from "react-icons/io";


function HomePage({ value }) {
   const [activeMap, setActiveMap] = useState('');
   const dispatch = useDispatch();

   const mapEnter = () => setActiveMap('active--map');
   const mapLeave = () => setActiveMap('');
   const mapClick = () => {
      setActiveMap('active--map wiggle')
      setTimeout(()=> {setActiveMap('active--map')}, 10)
   };

   const linkEnter = (e) => e.currentTarget.classList.add('hover-link');
   const linkLeave = (e) => e.currentTarget.classList.remove('hover-link');

   const handleChangeActiveSection = (section) => {
      dispatch(setActiveSection(section));
   }

   return (
    <div>
      <div className="background">
         {/* left */}
         <div className="circle circle--animated"></div>
         <div className={`circle ${value}`}></div>
         <div className={`circle circle--animated ${value}`}></div>
         <div className={`circle ${value}`}></div>
         <div className={`circle circle--animated ${value}`}></div>
         {/* right */}
         <div className="circle"></div>
         <div className={`circle circle--animated ${value}`}></div>
         <div className="circle"></div>
         <div className={`circle ${value}`}></div>
         <div className="circle circle--animated"></div>
         <div className={`circle circle--animated ${value}`}></div>
         <div className="circle"></div>
         <div className={`circle ${value}`}></div>
         <div className="circle"></div>
         <div className="circle"></div>
         <div className="circle"></div>
         <div className="circle circle--animated"></div>
      </div>
         <div className={`centered--section ${value}`}>
            <p>Hello, my name is</p>
            <h1>Marius Bobitiu</h1>
            <Typewriter />
         </div>
         <div className="homepage--footer">
            <div className='location--container'>
               <p className="location--text" 
               onMouseEnter={mapEnter}
               onMouseLeave={mapLeave}
               onClick={mapClick}>
                  <MdPlace /> Located in 
                  <span className='ubuntu'> United Kingdom</span>
                  <span className={`location--map ${activeMap}`}></span>
               </p>
            </div>
            <div className="hp--socials--container">
               <ul className="hp--socials">
                  <li className='hp--socials-link'
                      onMouseEnter={linkEnter}
                      onMouseLeave={linkLeave}
                  >
                     <IconContext.Provider value={{ size: '30px' }} >
                        <div>
                           <a href='https://www.linkedin.com/in/marius-b-4235b5266/' target='_blank' rel="noreferrer" aria-label='Linkedin Link'>
                              <FaLinkedin />
                           </a>
                        </div>
                     </IconContext.Provider>
                  </li>
                  <li className='hp--socials-link'
                      onMouseEnter={linkEnter}
                      onMouseLeave={linkLeave}
                  >
                     <IconContext.Provider value={{ size: '30px' }} >
                        <div>
                           <a href='https://github.com/Xendorr' target='_blank' rel="noreferrer" aria-label='Github link'>
                              <FaGithub />
                           </a>
                        </div>
                     </IconContext.Provider>
                  </li>
                  <li className='hp--socials-link'
                      onMouseEnter={linkEnter}
                      onMouseLeave={linkLeave}
                  >
                     <IconContext.Provider value={{ size: '30px' }} >
                        <div>
                           <a href='https://dribbble.com/mariusbobitiu' target='_blank' rel='noreferrer' aria-label='Dribble Link'>   
                              <FaDribbble />
                           </a>
                        </div>
                     </IconContext.Provider>
                  </li>
                  <li className='hp--socials-link'
                      onMouseEnter={linkEnter}
                      onMouseLeave={linkLeave}
                  >
                     <IconContext.Provider value={{ size: '30px' }} >
                        <div>
                           <a href='mailto:contact@mariusbobitiu.dev' target='_blank' rel="noreferrer" aria-label='Send me an e-mail'>
                              <LuMailPlus />
                           </a>
                        </div>
                     </IconContext.Provider>
                  </li>
               </ul>
            </div>
         </div>
         <div className="homepage--projects-topbar">
            <p className="projects--title" onClick={() => {
               handleChangeActiveSection('projects');
            }}>
               See Projects <span className='arrow-link'> <IoIosArrowForward /> </span>
            </p>
         </div>
         <div className="copyright--container">
               <p className="copyright"><FaRegCopyright /> {`2023 - ${new Date().getFullYear()}`}.&nbsp;<a href='https://www.linkedin.com/in/marius-b-4235b5266/' target='_blank' rel='noreferrer'>Marius Bobitiu&nbsp;</a>- All rights reserved. See&nbsp;<a href="/policies">User Agreements.</a></p>            
         </div>
      </div>
  )
}

export default HomePage;
