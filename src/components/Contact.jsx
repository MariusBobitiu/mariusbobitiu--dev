import React from 'react';
import ContactForm from '../helpers/ContactForm';
import '../styles/components/Contact.css';

function Contact({ value }) {
  return (
    <>
      <div className="title--container">
               <p className='title'> Contact Me </p>
            </div>
            <div className={`containers ${value}`}>
               <div className="socials--container">
                  <p className="socials--title"><span className="ubuntu">~$</span> ls -all Socials.web<span className='flashing-character'>|</span></p>
                  <ul className="social--links">
                     <li className="social--link">
                        <a href='https://www.linkedin.com/in/marius-b-4235b5266/' 
                        target='_blank' rel="noreferrer"
                        aria-label='LinkedIn Profile'>
                           # linkedIn
                        </a>
                     </li>
                     <li className="social--link">
                        <a href='https://github.com/Xendorr' 
                        target="_blank" rel="noreferrer"
                        aria-label='Github Profile'>
                           # github
                        </a>
                     </li>
                     <li className="social--link">
                        <a href='https://dribbble.com/mariusbobitiu' 
                        target='_blank' 
                        rel='noreferrer'
                        aria-label='Dribbble Profile'>
                           # dribble
                        </a>
                     </li>
                     <li className="social--link">
                        <a href='https://twitter.com/MariusBobitiu' 
                        target="_blank" rel="noreferrer"
                        aria-label='Twitter Profile'>
                           # twitter / X
                        </a>
                     </li>
                     <li className="social--link">
                        <a href='mailto:marius.bobitiu@icloud.com' 
                        target="_blank" rel="noreferrer"
                        aria-label='Contact Me'>
                           # contactMe
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="form--container">
                  <ContactForm />
               </div>
            </div>
    </>
  )
}

export default Contact;
