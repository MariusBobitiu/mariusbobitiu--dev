import React, { useEffect, useRef, useState } from 'react';
import '../styles/Pages/Expertise.css'
import CV from '../assets/Files/Marius-Catalin Bobitiu - CV.pdf'
import Navbar from '../components/expertise/Navbar'
import Carousel from '../components/expertise/Carousel';
import Experience from '../components/expertise/Experience';
import { certification } from '../helpers/CertificationsList';
import Certification from '../components/expertise/Certification';
import Modal from '../components/expertise/Modal';
import ModalImage from '../components/expertise/ModalImage';
import { IoArrowDownCircleOutline, IoCloudDownloadOutline } from "react-icons/io5";
import { FaCode } from 'react-icons/fa6';
import { GoShieldLock } from "react-icons/go";
import { MdCloudQueue } from "react-icons/md";

function Expertise() {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [selectedCertificationImage, setSelectedCertificationImage] = useState(null);
  const expertiseRef = useRef(null);
  const summaryRef = useRef(null);
  const resumeRef = useRef(null);
  const landingRef = useRef(null);
  const certificationRef = useRef(null);
  const [scrollClass, setScrollClass] = useState('');

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  // Handler to open the certification details modal
  const handleCertificationClick = (certificationId) => {
    const certificationDetails = certification.find(cert => cert.id === certificationId);
    setSelectedCertification(certificationDetails);
    setSelectedCertificationImage(null);
  };
  // Handler to open the certification image modal
  const handleCertificationImageClick = (certificationId) => {
    const certificationDetails = certification.find(cert=> cert.id === certificationId);
    setSelectedCertification(null);
    setSelectedCertificationImage(certificationDetails);
  }

  // Close handler for both modals
  const handleCloseModal = () => {
    setSelectedCertification(null);
    setSelectedCertificationImage(null);
  }

  
  useEffect(() => {
    if (!expertiseRef.current) return;
    const handleScroll = () => {
      const position = expertiseRef.current.scrollTop;
      if (position > 10) {
        setScrollClass('scrolled');
      } else {
        setScrollClass('');
      }
    }
    const div = expertiseRef.current;
    div.addEventListener('scroll', handleScroll);
    return () => {
      div.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='expertise' ref={expertiseRef}>
      <Navbar 
        classSet={scrollClass}
        resume={() => scrollToRef(resumeRef)} 
        home={() => scrollToRef(landingRef)} 
        certs={() => scrollToRef(certificationRef)} 
      />
      <section className='landing' ref={landingRef}>
        <div className={`header ${scrollClass}`}></div>
        <div className="heroImage">
          <div className="centered--section--expertise">
            <h2 className="landing--title">Crafting Tomorrow's Tech, Today.</h2>
            <p className="landing--text"> In the ever-evolving landscape of technology, I blend innovation with expertise to architect solutions in DevSecOps, cloud computing, and software development. Let's explore the possibilities together.</p>
            <div className="buttons">
              <a href={CV} target='_blank' rel='noreferrer' className='button button-download'><IoCloudDownloadOutline />Download CV</a>
              <button 
                className='button button-seeMore'
                onClick={() => scrollToRef(summaryRef)}> 
                  Learn More 
                </button>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className="footer--cards-container">
            <div className="footer--card">
              <h2 className="card-title"><div className='icon'><FaCode /></div> Development </h2>
              <p className="card-text">Passionate about building seamless, efficient applications, I leverage the latest in web development technologies, focusing on React to bring dynamic user experiences to life. My projects reflect a blend of innovation, functionality, and aesthetic appeal.</p>
            </div>
            <div className="footer--card">
            <h2 className="card-title"><div className='icon'><GoShieldLock /></div> Security </h2>
            <p className="card-text">With a foundation in CompTIA Security+ and hands-on experience in implementing robust security frameworks, I prioritize creating secure digital environments. My approach integrates security from the ground up, ensuring data integrity and system resilience.</p>
            </div>
            <div className="footer--card">
            <h2 className="card-title"><div className='icon'><MdCloudQueue /></div> Cloud </h2>
            <p className="card-text">Certified in AWS Cloud Practitioner and Solutions Architect, I design scalable and secure cloud architectures that drive business innovation and efficiency. My expertise spans cloud deployment, management, and optimization.</p>
            </div>
          </div>
          <div 
            className="arrow"
            onClick={() => scrollToRef(summaryRef)}>
              <IoArrowDownCircleOutline />
            </div>
        </div>
      </section>

      <section className='summary' ref={summaryRef}>
        <div className='summary--container'>
          <p className='title'> Summary </p>
          <div className='summary-text--container'>
            <div className='image--container'>
                <h2> <span className="ubuntu">~$ </span>TL;DR </h2>
                <div className="text">
                  <ul>
                    <li className='accent'>Tech Foundations:</li>
                    <li>Comptia A+, Security+</li>
                    <li className='accent'>Cloud Mastery:</li>
                    <li>AWS CCP, SAA certified</li>
                    <li className="accent">Current Focus:</li>
                    <li>Developing DevSecOps career </li>
                    <li className="accent">Skills:</li>
                    <li>HTML, CSS, JavaScript, React (in progress)</li>
                    <li className="accent">Projects:</li>
                    <li>Experience with MongoDB, Redux</li>
                    <li className="accent">Approach:</li>
                    <li>Self-learning through courses and hands-on projects</li>
                  </ul>
               </div>
            </div>
            <div className="text--container">
              <p className='summary-text'>
              Hello! I'm Marius, on a thrilling journey through the tech landscape. My adventure kicked off with foundational successes in CompTIA A+ and Security+, which sparked my deep dive into cloud technologies, earning me AWS Certified Cloud Practitioner and Solutions Architect - Associate badges. My current focus? Carving a niche in DevSecOps, blending development, security, and operations to innovate securely and efficiently.
              </p>
              <p className='summary-text'>
                I'm actively expanding my development toolkit, diving into HTML, CSS, JavaScript, and currently, React, to craft dynamic user interfaces. My latest project saw me navigating the realms of MongoDB for database management and Redux for sophisticated state management, sharpening my skills through hands-on experience.
              </p>
              <p className='summary-text'>
              Driven by a passion for continuous learning and a penchant for tackling practical challenges, I'm eager to explore the vast possibilities that lie ahead in DevSecOps.
              </p>
              <p className='summary-text'>
                Thank you for joining me on this journey. Whether you're here to explore potential collaborations or just curious about my experience, I'm glad to share my passion for technology and innovation with you.
              </p>
            </div>
          </div>
        </div>
        <div className='skill-set--container'>
          <p className='title'>skillSet</p>
          <div className="logo-carousel--container">
            <Carousel />
          </div>
        </div>
      </section>

      <section className='experience--container'  ref={certificationRef}>
        <p className='title certifications'> Certifications </p>
        <div className="certifications--container">
          <div className="certifications--list">
            {certification.map((item) => {
              return(
                <Certification 
                    key={item.id}
                    {...item}
                    onClick={() => handleCertificationClick(item.id)}
                    onClickImage={() => handleCertificationImageClick(item.id)}
                />
              );
            })}
          </div>
        </div>
        <p className='title' ref={resumeRef}> Resume </p>
        <Experience />
      </section>

      {selectedCertification && (
        <Modal 
          certification={selectedCertification} 
          onClose={handleCloseModal} 
        />
      )}
      {selectedCertificationImage && (
        <ModalImage
          certificationImage={selectedCertificationImage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default Expertise
