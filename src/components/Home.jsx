import React from 'react';
// ---------- ASSETS ----------
import '../styles/components/Home.css'
import background from '../assets/bg.webp';

// ---------- LIBRARIES ----------
import {useSelector} from 'react-redux';

// ---------- COMPONENTS ----------
import Navbar from './Navbar';
import HomePage from './HomePage';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


function Home() {
   const isNavbarOpen = useSelector(state => state.navbar.isNavbarOpen);
   const homeClass = isNavbarOpen ? 'home-content-shifted' : '';
   const activeSection = useSelector(state => state.navbar.activeSection);
  return (
    <div className="home">
      <section className="welcome--screen">
         <div className="welcome--section">
            <p>Welcome</p>
         </div>
      </section>
      <div className="background--color">
         <section className={`homepage ${activeSection === 'homepage' ? '' : 'homepage--invisible'}`}>
            <Navbar />
            <HomePage value={homeClass} />
         </section>
         <section 
            className={`about ${activeSection === 'about' ? '' : 'about--invisible'}`} 
            style={{backgroundImage: `url(${background})` }}
         >
            <About value={homeClass} />
         </section>
         <section 
            className={`projects ${activeSection === 'projects' ? '' : 'projects--invisible'}`} 
            style={{backgroundImage: `url(${background})`}}
         >
            <Projects value={homeClass} />
         </section>
         <section 
            className={`contact ${activeSection === 'contact' ? '' : 'contact--invisible'}`}
            style={{backgroundImage: `url(${background})`}}
         >
            <Contact value={homeClass} />
         </section>
      </div>
    </div>
  )
}

export default Home;
