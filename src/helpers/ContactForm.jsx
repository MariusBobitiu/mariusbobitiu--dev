import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm, resetForm } from './features/form/formSlice';
import useSubmitForm from './SubmitForm';
import DOMPurify from 'dompurify';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { hideLoader, showLoader } from './features/form/uiSlice';


function ContactForm() {
   const dispatch = useDispatch();
   const form = useSelector(state => state.form);
   const submitForm = useSubmitForm();
   const [sentMessage, setSentMessage] = useState('');
   const loaderVisible = useSelector(state => state.ui.loaderVisible);

   const handleInputChange = (event) => {
       const { name, value } = event.target;
   
       const decodeValue = (val) => {
           // Decode hexadecimal characters
           return val.replace(/\\x([0-9A-Fa-f]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16)));
       };
   
       // Decode and then sanitize the input value
       const decodedValue = decodeValue(value);
       const sanitizedValue = DOMPurify.sanitize(decodedValue);
   
       // Dispatch the action to update the form in the Redux state
       dispatch(updateForm({ ...form, [name]: sanitizedValue }));
   };
   
   const sentMessageHandler = () => {
      setSentMessage('visible');
      setTimeout(() => {
         setSentMessage('');
      }, 3500);
   }

   const onSubmit = (e) => {
      e.preventDefault();
      dispatch(showLoader());
      submitForm(form).then(() => {
         dispatch(hideLoader());
         sentMessageHandler();
         dispatch(resetForm());
      });
   }

   return (
      <div className='form'>
         <p><span className="ubuntu"> ~$ </span> nano /dev/send_message<span className='flashing-character'>|</span></p>
         <form onSubmit={onSubmit}>
            <div className="form-control--row">
               <input 
                  name="name" 
                  id="name"
                  value={form.name} 
                  onChange={handleInputChange} 
                  placeholder=" " 
                  className='form-control'
                  autoComplete='name'
                  required
               />
               <label htmlFor="name" className="form-label">name</label>
            </div>
            <div className="form-control--row">
               <input 
                  name="email" 
                  id="email"
                  value={form.email} 
                  onChange={handleInputChange} 
                  placeholder=" " 
                  className='form-control'
                  autoComplete='email'
                  spellCheck='false'
                  required
               />
               <label htmlFor="email" className="form-label">email</label>                           
            </div>
            <div className="form-control--row">
               <input
                  name="subject"
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleInputChange}
                  placeholder=" "
                  className='form-control'
                  required
               />
               <label htmlFor="subject" className="form-label">subject</label>
            </div>
            <div className="form-control--row">
               <textarea
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder=" "
                  className='form-control'
                  rows='4'
                  required
               />
               <label htmlFor="message" className="form-label">message</label>
            </div>
            <button type="submit" className='btn submit--btn'>
               <span><span className="ubuntu"> ~$ </span> send </span>
               {loaderVisible && <div className='btn-loader'><div className="spinner"></div></div> }
               <div className={`sent-message ${sentMessage}`}><IoMdCheckmarkCircleOutline /> sent</div>
            </button>
         </form>
      </div>
   );
}

export default ContactForm;
