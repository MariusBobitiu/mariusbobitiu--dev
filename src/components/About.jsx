import React from 'react';
import avatar from '../assets/Avatar.webp';
import '../styles/components/About.css';

function About({ value }) {
  return (
    <>
      <p className="title"> About Me </p>
         <div className={`containers ${value}`}>
            <div className="img-container">
               <div className="image"><img src={avatar} alt="Avatar of Marius Bobitiu" /></div>
               <div className="short--descriptions">
                  <div className="short--descriptions--subject">Name: </div>
                  <div className="short--descriptions--text"><span>Marius-Catalin Bobitiu</span></div>
                  <div className="short--descriptions--subject"><span>Level: </span></div>
                  <div className="short--descriptions--text"><span>Graduate</span></div>
                  <div className="short--descriptions--subject"><span>Interests: </span></div>
                  <div className="short--descriptions--text"><span>IT, Cybersecurity, Development</span></div>
                  <div className="short--descriptions--subject"><span>Location: </span></div>
                  <div className="short--descriptions--text"><span>Southend on Sea, UK</span></div>
               </div>
            </div>
            <div className="text-container">
               <div className="text">
                  <h2> <span className="ubuntu">~$</span> whoami<span className='flashing-character'>|</span> </h2>
                  <p className="special--text">A recent graduate, deeply passionate about both building and securing technology. My journey in the tech world has been driven by a relentless pursuit of knowledge and a commitment to excellence, especially in the dynamic realms of development and cybersecurity. </p>
                  <h2> <span className="ubuntu">~$</span> cd ~/career-path && ls -l passion-for-security<span className='flashing-character'>|</span></h2>
                  <p>Last year marked a pivotal moment in my career. I rediscovered my passion for IT, which propelled me into a world where technology meets security. Eager to deepen my understanding, I immersed myself in the intricacies of cybersecurity and cloud technologies. This dedication was not only driven by curiosity but also by a desire to make a tangible impact in the tech industry. I successfully earned certifications in these fields, which was a testament to my hard work and dedication. This journey wasn't just about acquiring knowledge; it was about shaping a mindset geared towards innovation and security in a digital world.</p>
                  <h2><span className="ubuntu">~$</span> git merge development & security<span className='flashing-character'>|</span> </h2>
                  <p>Recently, I've developed a profound interest in software development. This new passion isn't just an addition to my skill set; it's the missing piece that perfectly complements my expertise in security and cloud computing. I believe in the symbiotic relationship between development and security - one cannot exist effectively without the other in today's digital landscape. My goal is to amalgamate these domains, leveraging my comprehensive knowledge to build robust, secure applications in the cloud. As I venture further into DevSecOps, I am excited about the prospects of creating solutions that are not just innovative but also resilient against the evolving cyber threats.</p>
               </div>
            </div>
         </div>
    </>
  )
}

export default About
