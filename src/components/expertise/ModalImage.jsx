import React, { useState } from 'react';
import '../../styles/components/expertise/Modal.css';

import { FiExternalLink } from 'react-icons/fi';
import { IoCopyOutline } from "react-icons/io5";

function ModalImage({certificationImage, onClose}) {
   const [message, setMessage] = useState('');
   if(!certificationImage) return null;

   const {id, name, link, code, cert_image} = certificationImage;

   const copyToClipboard = async (text) => {
      try {
         await navigator.clipboard.writeText(text);
         setMessage('visible');
         setTimeout(()=> {
            setMessage('');
         }, 2000)
      } catch (err) {
         console.error("Failed to copy: ", err);
      }
   };
   return (
    <div className='modal-image visible'>
      <div className="modal-content-image">
         <span className="close" onClick={onClose}>&times;</span>
         <img src={cert_image} loading="lazy" alt={name} />
         <div className="img-flex">
            <a href={link} id={id} target="_blank" rel="noreferrer"> <p className="val-link">Validation Link<FiExternalLink /></p> </a>
            <p className="code">{code} 
               <span 
                  className="copy-icon"
                  onClick={() => copyToClipboard(code)}>
                     <IoCopyOutline />
               </span>
               <span 
                  className={`copy-message ${message}`}
                  >
                     Copied to clipboard!
               </span>
            </p>
         </div>
      </div>
    </div>
   )
}

export default ModalImage
