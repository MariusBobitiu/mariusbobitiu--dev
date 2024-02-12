import React from 'react';
import '../styles/Pages/DataRequestForm.css';

// TODO finish the form

function DataRequestForm() {
  return (
   <div className='dataForm--container'>
      <br />
      <h1 className="f-title">Data Subject Access Request Form</h1>
      <br />
      <h2 className="f-description">Please fill in the information bellow. The website administrator or data protection officer will be notified of your request within 24 hours, and will need an appropriate amount of time to respond.</h2>
      <br />
      <br />
      <div className="request--form">
         <label className='label--request-form'>Website</label>
         <div className="input--container">
            <label htmlFor="website" className="label--input">
               <input name="website" type="text" placeholder='mariusbobitiu.dev' className='input--request-form' />
            </label>
         </div>
         <label className="label--request-form">Your Name</label>
         <div className="input--container">
            <label htmlFor="name" className="label--input">
               <input name="name" type="text" placeholder='Enter your name' className='input--request-form' />
            </label>
         </div>
         <label className="label--request-form">Email address</label>
         <div className="input--container">
            <label htmlFor="email" className="label--input">
               <input name="email" type="email" placeholder='Enter your email address' className='input--request-form' />
            </label>
         </div>
         <label className="label--request-form">You are submitting this request as</label>
         <div className="input--container-radio">
            <label htmlFor="request_as" className="label--input-radio">
               <input name="request_as" hidden type="radio" value="personal"/>
               <div className="checkmark"></div>
               The person, or the parent/guardian of the person, whose name appears above.
            </label>
            <label htmlFor="request_as" className="label--input-radio">
               <input name="request_as" hidden type="radio" value="agent"/>
               <div className="checkmark"></div>
               An agent authorized by the consumer to make this request on their behalf.
            </label>
         </div>

      </div>
   </div>
  )
}

export default DataRequestForm;
