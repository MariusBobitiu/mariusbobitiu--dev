import React, { useState } from 'react';
import '../styles/Pages/Policies.css';
import Navbar from '../components/policies/Navbar';
import PrivacyPolicy from '../components/policies/PrivacyPolicy';
import CookiesPolicy from '../components/policies/CookiesPolicy';
import TermsAndConditions from '../components/policies/TermsAndConditions';

function Policies() {
   const [policySection, setPolicySection] = useState('privacy');

  return (
    <div className='policies'>
      <Navbar />
      <div className='policy--header'>
         <p>Your privacy in a nutshell</p>
      </div>
      <div className="policies--top-side">
         <ul className="policies--list">
            <li className={`policies-items ${policySection === 'privacy' ? 'active' : ''}`}
               onClick={() => setPolicySection('privacy')}
            > Privacy Policy </li>
            <li className={`policies-items ${policySection === 'cookies' ? 'active' : ''}`}
               onClick={() => setPolicySection('cookies')}
            > Cookies Policy </li>
            <li className={`policies-items ${policySection === 'tc' ? 'active' : ''}`}
               onClick={() => setPolicySection('tc')}
               > Terms and Conditions </li>
         </ul>
      </div>
      <div className="policies--bottom-side">
         <section className={`privacy--policy ${policySection === 'privacy' ? '' : 'privacy--policy--invisible'}`}>
            <PrivacyPolicy />
         </section>
         <section className={`cookies--policy ${policySection === 'cookies' ? '' : 'cookies--policy--invisible'}`}>
            <CookiesPolicy />
         </section>
         <section className={`tc--policy ${policySection === 'tc' ? '' : 'tc--policy--invisible'}`}>
            <TermsAndConditions />
         </section>
      </div>
    </div>
  )
}

export default Policies
