import React, { useState } from 'react';
import '../../styles/components/expertise/Experience.css';
import { FiExternalLink } from "react-icons/fi";
import { FaImage } from "react-icons/fa6";
import ModalImage from '../../components/expertise/ModalImage';
import { certification } from '../../helpers/CertificationsList';


function Experience() {

   const [selectedCertificationImage, setSelectedCertificationImage] = useState(null);

   const handleCertificationImageClick = (certificationId) => {
      console.log('pressed')
      const certificationDetails = certification.find(cert => cert.id === certificationId);
      // setSelectedCertification(null);
      setSelectedCertificationImage(certificationDetails);
   }

   const handleCloseModal = () => {
      // setSelectedCertification(null);
      setSelectedCertificationImage(null);
   }

  return (
   <>
      <div className="exp-edu">
         <div className="experience">
            <div className="exp-edu-h-container">
               <h2 className="exp-edu-h">Work Experience</h2>
            </div>
            <div className="border--container">
               <div className="resume-container">
                  <h1 className="company"><a href='https://meter-macs.com' target="_blank" className="company-link" id="Meter-Macs" rel='noreferrer'>Meter Macs Ltd&nbsp;<FiExternalLink /></a></h1>
                  <div className="job-container">
                        <h1 className="position">Level 2 Technical Support Specialist</h1>
                        <p className="date">Dec 2023 - Present</p>
                        <p className="more-info">As a recent promotee to Level 2 Technical Support Specialist, I am currently in the process of settling into my new role and acquiring a wealth of experience. 
                           Updates on my journey and detailed insights into this position will be shared soon. 
                           Stay tuned for more information on my professional growth and achievements in this advanced capacity.</p>
                        {/* <!-- <ul>
                           <li> 1st skill learned </li>
                           <li> 2nd skill learned </li>
                           <li> 3rd skill learned </li>
                           <li> 4th skill learned </li>
                        </ul> --> */}
                  </div>
               </div>
            </div>
               <div className="resume-container no-company">
                  {/* <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeInLeft"> */}
                     <div className="job-container">
                           <h1 className="position">Level 1 Technical Support Specialist</h1>
                           <p className="date">Jun 2023 - Dec 2023</p>
                           <ul>
                              <li><strong className="accent">Effective Product Release Management:</strong> Successfully led testing for a new product version, ensuring a 15% reduction in post-release issues.</li>
                              <li><strong className="accent">Security Expertise and Incident Resolution:</strong> Utilized Security+ knowledge to investigate and resolve a Windows Defender alert, achieving a 20% decrease in false positives.</li>
                              <li><strong className="accent">PCI DSS Compliance Leadership:</strong> Played a pivotal role in documenting PCI DSS Compliance requirements, leading to the successful certification and enabling secure online payments.</li>
                              <li><strong className="accent">Rapid Learning and Certification Attainment:</strong> Demonstrated exceptional adaptability, mastering in-house technology within a month and a half.</li>
                           </ul>
                     </div>
                  {/* </ScrollAnimation> */}
               </div>
               <div className="border--container">
                  <div className="resume-container">
                     <h1 className="company no-link" id="CED">CED Services And Logistic Ltd</h1>
                     <div className="job-container">
                           <h1 className="position">Same-Day Delivery Courier</h1>
                           <p className="date">Sep 2022 - Mar 2023</p>
                           <ul>
                              <li><strong className="accent">Efficient Courier Operations:</strong> Achieved a 100% on-time delivery rate through timely and secure package delivery.</li>
                              <li><strong className="accent">Adaptable Remote Management:</strong> Successfully managed remote courier tasks, showcasing adaptability in diverse work environments.</li>
                              <li><strong className="accent">Optimized Delivery Processes:</strong> Collaborated with the logistics team to enhance efficiency by optimizing delivery routes and adhering to company policies, contributing to a 20% improvement in overall delivery processes.</li>
                           </ul>
                     </div>
                  </div>
               </div>
               <div className="border--container">
                  <div className="resume-container">
                     <h1 className="company no-link" id="Camara-Dacilor">Camara Dacilor Ltd</h1>
                     <div className="job-container">
                           <h1 className="position">Assistant Manager</h1>
                           <p className="date">May 2021 - Aug 2022</p>
                           <ul>
                              <li><strong className="accent">Secure Point of Sale (POS) Operations:</strong> Ensured secure transactions and maintained data integrity within the Point of Sale system, contributing to a 0% incidence of transaction-related security issues.</li>
                              <li><strong className="accent">Network Security Enhancement:</strong> Implemented basic security measures to safeguard the local network, resulting in a 15% reduction in potential vulnerabilities.</li>
                              <li><strong className="accent">Proactive Incident Response Leadership:</strong> Developed and communicated swift incident response procedures, enhancing the team's readiness to handle unforeseen events, reducing incident resolution time by 20%.</li>
                           </ul>
                     </div>
                  </div>
               </div>
               <div className="resume-container no-company">
                  <div className="job-container">
                        <h1 className="position">Sales Assistant</h1>
                        <p className="date">May 2020 - May 2021</p>
                        <ul>
                           <li><strong className="accent">Customer Data Protection:</strong> Ensured 100% compliance with privacy guidelines, safeguarding customer data.</li>
                           <li><strong className="accent">Security-Conscious Sales Approach:</strong> Implemented measures increasing customer trust by 30%.</li>
                           <li><strong className="accent">Proactive Privacy Initiatives:</strong> Conducted effective privacy training, improving team awareness by 20%.</li>
                           <li><strong className="accent">Holistic Security Measures:</strong> Instituted proactive security measures, resulting in a 15% reduction in data-related incidents.</li>
                        </ul>
                  </div>
               </div>
               <div className="exp-edu-h-container">
                  <h2 className="exp-edu-h"> Practical Knowledge </h2>
               </div>
               <div className="border--container">
                  <div className="resume-container">
                     <h1 className="company"><a href="https://skillbuilder.aws" target="_blank" rel='noreferrer'>AWS Skill Builder&nbsp;<FiExternalLink /></a></h1>
                     <div className="job-container">
                           <h1 className="position">Cloud Practitioner ( <a href="https://www.credly.com/badges/b000570e-c447-4265-8c19-58b3be5cf7ec/public_url" target="_blank" rel='noreferrer'>Verify Credential <FiExternalLink /></a> )</h1>
                           <p className="date">Oct 2023 - Nov 2023</p>
                           <ul>
                              <li><strong className="accent">AWS Core Services: </strong>Gaining practical experience with key AWS services like EC2, S3, and IAM through interactive labs.</li>
                              <li><strong className="accent">Cloud architecture: </strong>Developing a solid understanding of AWS cloud architecture principles, including scalability and security.</li>
                              <li><strong className="accent">Cost Management: </strong>Learning to manage and optimize AWS costs with tools like AWS Cost Explorer and AWS Budgets.</li>
                              <li><strong className="accent">Security and Compliance: </strong>Hands-on Practice with AWS security services and understanding AWS compliance frameworks.</li>
                              <li><strong className="accent">Data Analytics and Management: </strong>Working with AWS data storage and analytics services for real-world data handling scenarios.</li>
                           </ul>
                           <p className="more-info">
                              Each module in the AWS CloudQuest Certified Cloud Practitioner course is meticulously designed to ensure immersive, real-world application, equipping aspiring cloud professionals with essential, hands-on AWS skills. For comprehensive details, explore the <a href="https://aws.amazon.com/training/digital/aws-cloud-quest/" target="_blank" id="soclevel1" rel='noreferrer'>AWS CloudQuest Certified Cloud Practitioner course</a>.
                           </p>
                     </div>
                  </div>
               </div>
               <div className="border--container">
                  <div className="resume-container">
                     <h1 className="company"><a href="https://tryhackme.com" target="_blank" rel='noreferrer'>TryHackMe&nbsp;<FiExternalLink /></a></h1>
                     <div className="job-container">
                           <h1 className="position">SOC Level 1&nbsp;( <span className="font-edit cert-text " onClick={() => handleCertificationImageClick(1)}>View Certificate&nbsp;<FaImage /></span> )</h1>
                           <p className="date">Sep 2023 - Nov 2023</p>
                           <ul>
                              <li><strong className="accent">SIEM Tools Proficiency: </strong>Enhanced real-time security alert analysis using cutting-edge SIEM tools.</li>
                              <li><strong className="accent">Incident Response Expertise: </strong>Developed rapid detection and response skills through simulated cybersecurity incidents.</li>
                              <li><strong className="accent">Network Traffic Analysis: </strong>Acquired in-depth ability to monitor and analyze network activities for security threats.</li>
                              <li><strong className="accent">Threat Intelligence Application: </strong>Learned to proactively identify and mitigate evolving cyber threats.</li>
                              <li><strong className="accent">Best Practices in Cybersecurity: </strong>Emphasized adherence to industry-standard cybersecurity strategies against common threats.</li>
                           </ul>
                           <p className="more-info">Each module in the SOC Level 1 Training Course at TryHackMe is crafted for practical, hands-on learning, making it invaluable for cybersecurity professionals. For more details, visit <a href="https://tryhackme.com/path/outline/soclevel1" target="_blank" id="soclevel1" rel='noreferrer'>SOC Level 1 Training</a>.
                           </p>
                     </div>
                  </div>
               </div>
               <div id="modalTHMcert" className="modal-image">
                  <div className="modal-content-image">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <img src="ref/Certifications/TryHackMe - SOC Level 1.png" alt="THM Certificate" />
                  </div>                        
               </div>
            </div>
            <div className="education">
               <div className="exp-edu-h-container">
                  <h2 className="exp-edu-h"> Courses </h2>
               </div>
               <div className="border--container">
                  <div className="resume-container">
                     <h1 className="company no-link">Amazon Web Services</h1>
                     <div className="job-container">
                           <h1 className="position">AWS Knowledge: Cloud Essentials ( <a href="https://www.credly.com/badges/01d722e3-dbb2-4ff6-911e-b34a22239917/public_url" target="_blank" rel='noreferrer'>Verify Credential <FiExternalLink /></a> )</h1>
                           <p className="date">Oct 2023 - Oct 2023</p>
                           <p className="modules"> Modules Covered: </p>
                           <ul>
                              <li>Introduction to Amazon Web Services (AWS)</li>
                              <li>AWS Compute</li>
                              <li>AWS Networking</li>
                              <li>AWS Storage</li>
                              <li>Databases on AWS</li>
                              <li>Monitoring, Load Balancing, and Scaling</li>
                           </ul>
                     </div>
                  </div>
               </div>
               <div className="border--container">
                  <div className="resume-container">
                     <h1 className="company no-link">Coursera Project Network</h1>
                     <div className="job-container">
                           <h1 className="position">Analyze traffic with TCP Dump ( <a href="https://www.coursera.org/account/accomplishments/verify/V8GAFLVVKBHN" target="_blank" rel='noreferrer'>Verify Credential <FiExternalLink /></a> )</h1>
                           <p className="date">Oct 2023 - Oct 2023</p>
                           <p className="modules"> Modules Covered: </p>
                           <ul>
                              <li>Governance and Compliance</li>
                              <li>Network Security Testing</li>
                              <li>Threat Intelligence</li>
                              <li>Endpoint Vulnerability Assessment</li>
                              <li>Risk Management and Security Controls</li>
                              <li>Digital Forensics and Incident Analysis and Response</li>
                           </ul>                      
                     </div>
                  </div>
               </div>
               <div className="border--container">
                  <div className="resume-container">
                     <h1 className="company no-link">IBM</h1>
                     <div className="job-container">
                           <h1 className="position">Cybersecurity Fundamentals ( <a href="https://www.credly.com/badges/266cfd69-cdf9-40d6-ac1a-a1f62e740f5d/public_url" target="_blank" rel='noreferrer'>Verify Credential <FiExternalLink /></a> )</h1>
                           <p className="date">Sep 2023 - Oct 2023</p>
                           <p className="modules"> Modules Covered: </p>
                           <ul>
                              <li>Overview of Cybersecurity</li>
                              <li>Cybersecurity: On the Offense</li>
                              <li>Cybersecurity: On the Defense</li>
                              <li>A Career in Cybersecurity</li>
                           </ul>
                     </div>
                  </div>
               </div>
               <div className="border--container">
                  <div className="resume-container">
                     <h1 className="company no-link">Cisco</h1>
                     <div className="job-container">
                           <h1 className="position">Cyber Threat Management ( <a href="https://www.credly.com/badges/9c56e1b7-dde8-41cc-8808-1e108efea66b/public_url" target="_blank" rel='noreferrer'>Verify Credential <FiExternalLink /></a> )</h1>
                           <p className="date">Jul 2023 - Jul 2023</p>
                           <p className="modules"> Modules Covered: </p>
                           <ul>
                              <li>Governance and Compliance</li>
                              <li>Network Security Testing</li>
                              <li>Threat Intelligence</li>
                              <li>Endpoint Vulnerability Assessment</li>
                              <li>Risk Management and Security Controls</li>
                              <li>Digital Forensics and Incident Analysis and Response</li>
                           </ul>                      
                     </div>
                  </div>
               </div>
               <div className="resume-container no-company">
                  <div className="job-container">
                        <h1 className="position">Introduction to Cybersecurity ( <a href="https://www.credly.com/badges/41e404a8-e8b0-4736-b971-86a2b213ae11/public_url" target="_blank" rel='noreferrer'>Verify Credential <FiExternalLink /></a> )</h1>
                        <p className="date">Jul 2023 - Jul 2023</p>
                        <p className="modules"> Modules Covered: </p>
                        <ul>
                           <li>Introduction to Cybersecurity</li>
                           <li>Attacks, Concepts and Techniques</li>
                           <li>Protecting your Data and Privacy</li>
                           <li>Protecting the Organization</li>
                        </ul>     
                  </div>
               </div>
               <div className="exp-edu-h-container">
                  <h2 className="exp-edu-h">Education</h2>
               </div>
               <div className="border--container">
                  <div className="resume-container">
                     <h1 className="company"><a href="https://www.uwtsdlondon.ac.uk" target="_blank" rel='noreferrer'>University Of Wales Trinity Saint David - London&nbsp;<FiExternalLink /></a></h1>
                     <div className="job-container">
                           <h1 className="position">Bachelor of Science (BSc) Cloud Computing</h1>
                           <p className="date">Feb 2019 - Feb 2022</p>
                           <ul>
                              <li><strong className="accent">Software Engineering Principles and Testing: </strong>Focuses on software development methodologies, design techniques, and software testing principles.</li>
                              <li><strong className="accent">Data Security and Compliance: </strong>Focuses on software development methodologies, design techniques, and software testing principles.</li>
                              <li><strong className="accent">Network Operating System and Services: </strong>Involves deploying, managing, and maintaining network services and resources, including security audit and disaster recovery strategy.</li>
                              <li><strong className="accent">Web and Mobile Technologies: </strong>Addresses the development of web and mobile applications using client-side and server-side programming languages.</li>
                              <li><strong className="accent">Databases and Application Development: </strong>Evaluates design and development of databases and backend data applications, implementing solutions for real-world scenarios.</li>
                           </ul>
                     </div>
                  </div>
               </div>
               <div className="border--container">
                  <div className="resume-container">
                     <h1 className="company"><a href="https://www.lucian-blaga.ro" target="_blank" rel='noreferrer'>'Lucian Blaga' High-school, Romania&nbsp;<FiExternalLink /></a></h1>
                     <div className="job-container">
                           <h1 className="position">Romanian Baccalaureate (AAB equivalent) </h1>
                           <p className="date">Sep 2014 - Jun 2018</p>
                           <ul>
                              <li><strong className="accent">Advanced IT Coursework: </strong>Comprehensive study in C++ programming, establishing a strong foundation in object-oriented programming concepts and practical applications.</li>
                              <li><strong className="accent">Web Development Fundamentals: </strong>Acquired basic knowledge in HTML, laying the groundwork for web page structure and design.</li>
                              <li><strong className="accent">Digital Competence Proficiency: </strong>Demonstrated high-level digital skills with an impressive score of 89 points in the digital competences evaluation.</li>
                              <li><strong className="accent">English Language Proficiency: </strong>Achieved B2 level in the English language exam, reflecting a strong command of English in both written and verbal communication.</li>
                           </ul>
                     </div>
                  </div>
               </div>
         </div>
      </div>

      {selectedCertificationImage && (
        <ModalImage
          certificationImage={selectedCertificationImage}
          onClose={handleCloseModal}
        />
      )}

   </>
  )
}

export default Experience
