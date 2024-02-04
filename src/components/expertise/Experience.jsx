import React from 'react';
import '../../styles/components/expertise/Experience.css';
import { FiExternalLink } from "react-icons/fi";
import { FaImage } from "react-icons/fa6";


function Experience() {
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
                           <h1 className="position">SOC Level 1&nbsp;( <span className="font-edit cert-text ">View Certificate&nbsp;<FaImage /></span> )</h1>
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
                        <span className="close">&times;</span>
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
      {/* <div className="certs-proj-bg">
         <div className="certs-heading">
            <h2> Certifications </h2>
         </div>
         <div className="cert-proj">
            <div className="cert-proj-flex-anim">
               <div className="item-container">
                  <div className="item-card">
                     <div className="face face1">
                        <div className="content">
                              <img src={AWSSAA} />
                              <h3>AWS Certified Solutions Architect Associate</h3>
                              <p className="tap">Tap on the certification logo for more details</p>
                        </div>
                     </div>
                     <div className="face face2">
                        <div className="content">
                              <p className="date item-date"> Nov 2023 - Jan 2024 </p>
                              <p className="item-text"> 
                              'This certification showcases knowledge and skills in AWS technology, across a wide range of AWS services.' <br /> 
                                 To deepen my expertise in cloud computing 
                                 <span className="fadeout-container">
                                    <span className="fadeout-text">and AWS servic </span>
                                    <span className="fadeout-gradient"></span>
                                 </span>
                                 <span className="read-more" onclick="openModal('modalSAA')">Read More&nbsp;<i className="fas fa-arrow-right"></i></span>
                              </p>
                              <p className="font-edit cert-text" onclick="openModal('modalSAAcert')">View Certificate &nbsp;<i className="fas fa-image"></i></p>
                        </div>
                     </div>
                  </div>
                  <div id="modalSAA" className="modal">
                     <div className="modal-content">
                        <span className="close" onclick="closeModal('modalSAA')">&times;</span>
                        <h1> <span className="string">AWS</span> Solutions Architect Associate </h1>
                        <p> 
                              <span className="string"> To deepen my expertise in cloud computing and AWS services</span>, I have embarked on the journey towards earning the <span className="color">AWS Certified Solutions Architect - Associate (SAA) </span> certification. 
                              My motivation behind this certification is rooted in the desire to gain a comprehensive understanding of cloud technologies and, more specifically, how AWS functions as a <span className="color">leading cloud provider</span>. 
                              As I progress through this certification, my aim is to not only grasp the core AWS services but also to extend my skills to include <span className="color">Terraform</span>, a powerful <span className="color">Infrastructure-As-Code</span> tool. 
                              By incorporating Terraform into my skill set, I intend to develop the capability to <span className="color">design, build, and manage cloud infrastructures</span> efficiently and with a high degree of automation. 
                        </p>
                        <p>
                              Furthermore, I recognize the critical importance of <span className="color">security</span> in today's cloud-centric landscape. 
                              With AWS's robust security features and practices, I aspire to become proficient in <span className="color">securing cloud infrastructures</span> effectively. 
                              My goal is not only to build cloud environments but also to ensure their <span className="color">Proactive and Reactive Protection</span>. 
                              In essence, my pursuit of the AWS SAA certification is driven by the ambition to become a well-rounded cloud professional capable of <span className="color">architecting, building, securing, and maintaining cloud infrastructures</span> that meet the highest standards of <span className="color">performance, reliability, and security</span>. 
                              This certification is a <span className="color">pivotal step</span> in my journey towards achieving these goals 
                        </p>
                        <div className="flex-li">
                              <p className="li-title"> Learning Outcomes: </p>
                              <ul>
                                 <li><span className="string">Design Resilient Architectures:</span> Develop multi-tier and fault-tolerant architectures with appropriate storage solutions.</li>
                                 <li><span className="string">Define Performant Architectures:</span> Implement scalable, high-performing compute, storage, networking and database solutions.</li>
                                 <li><span className="string">Specify Secure Applications and Architectures:</span> Design secure access, application tiers, and data security options</li>
                                 <li><span className="string">Design Cost-Optimized Architectures:</span> Identify cost-effective storage, compute, database, and network solutions.</li>
                                 <li><span className="string">Define Operationally Excellent Architectures:</span> Incorporate design features for operational efficiency and excellence.</li>
                              </ul>
                        </div>
                        <div className="cert-skills">
                              <div className="cert-skill no-border">Skills: </div>
                              <div className="cert-skill">Compute Services</div>
                              <div className="cert-skill">Well-Architected Framework</div>
                              <div className="cert-skill">AWS Best Practices</div>
                              <div className="cert-skill">Security Services</div>
                              <div className="cert-skill">AWS Global Infrastructure</div>
                              <div className="cert-skill">Identity and Access Management</div>
                        </div>
                     </div>
                  </div>
                  <div id="modalSAAcert" className="modal-image">
                     <div className="modal-content-image">
                        <span className="close" onclick="closeModal('modalSAAcert')">&times;</span>
                        <img src="ref/Certifications/AWS Certified Solutions Architect - Associate certificate.png" alt="AWS SAA Certificate" />
                        <div className="img-flex">
                              <a href="https://aws.amazon.com/verification" id="CCP val-link" target="_blank"><p className="val-link"> Validation Link&nbsp;<FiExternalLink /></p></a>
                              <p id="code1">KKRD98CLSM4EQQKS&nbsp; <i className="fas fa-copy" onclick="copyToClipboard('KKRD98CLSM4EQQKS', 'message1')"></i><span id="message1" className="copy-message"></span></p>
                        </div>
                     </div>                        
                  </div>
               </div>
               <div className="item-container">
                     <div className="item-card">
                        <div className="face face1">
                           <div className="content">
                                 <img src={AWSCCP} />
                                 <h3>AWS Certified Cloud Practitioner</h3>
                                 <p className="tap">Tap on the certification logo for more details</p>
                           </div>
                        </div>
                        <div className="face face2">
                           <div className="content">
                                 <p className="date item-date"> Oct 2023 - Nov 2023 </p>
                                 <p className="item-text"> 
                                    'This certification validates foundational, high-level understanding of AWS Cloud, services, and terminology.' <br />
                                    Realizing the potential of cloud computing in 
                                    <span className="fadeout-container">
                                       <span className="fadeout-text">the rapidly evolving </span>
                                       <span className="fadeout-gradient"></span>
                                    </span>
                                    <span className="read-more "onclick="openModal('modalCCP')"> Read More&nbsp;<i className="fas fa-arrow-right"></i></span>
                                 </p>
                                 <p className="font-edit cert-text" onclick="openModal('modalCCPcert')">View Certificate &nbsp;<i className="fas fa-image"></i></p>
                           </div>
                        </div>
                     </div>
                     <div id="modalCCP" className="modal">
                        <div className="modal-content">
                           <span className="close" onclick="closeModal('modalCCP')">&times;</span>
                           <h1> <span className="string">AWS</span> Certified Cloud Practitioner </h1>
                           <p> 
                                 <span className="string">Realizing the potential of cloud computing in the rapidly evolving</span> tech landscape, particularly after my success with the <span className="color">Security+ Certification</span>, I was drawn to further expand my technical horizons.
                                 The pull towards this field felt even more compelling considering my academic background in <span className="color">Cloud Computing</span> from university, aligning seamlessly with my newfound interest.
                                 This convergence of past education and current passion set the stage for my next ambitious goal: pursuing the <span className="color">AWS Certified Cloud Practitioner Certification</span> to fully integrate my <span className="color">cybersecurity expertise</span> with the dynamic world of <span className="color">cloud technology</span>.
                           </p>
                           <p>
                                 In the subsequent month, I dedicated myself to an intensive study of <span className="color">AWS's core services</span> and <span className="color">Cloud concepts</span>.
                                 My focus extended beyond just the technical aspects of AWS’s cloud platform, including its <span className="color">security and compliance</span> features to also embrace the <span className="color">economic principles</span> of cloud computing.
                                 This diligent effort culminated in my passing the <span className="color">CCP</span> after just one month of preparation.
                                 Achieving the <span className="color">AWS Certified Cloud Practitioner Certification</span> was not only  a significant career milestone but also a strategic step in marrying my <span className="color">cybersecurity knowledge</span> with my <span className="color">cloud computing background</span>.
                                 This accomplishment uniquely positioned me in the tech industry, equipped to address the intertwining challenges of cloud technology and security.
                           </p>
                           <div className="flex-li">
                                 <p className="li-title"> Learning Outcomes: </p>
                                 <ul>
                                    <li><span className="string">Cloud Concepts:</span> Understanding of the basic concepts of cloud computing and how they apply to AWS.</li>
                                    <li><span className="string">Core AWS Services:</span> Knowledge of the core AWS services, their use cases, and basic AWS architecture best practices.</li>
                                    <li><span className="string">Security and Compliance:</span> Familiarity with AWS security and compliance concepts, including the AWS shared responsibility model.</li>
                                    <li><span className="string">Billing and Pricing:</span> Understanding of AWS pricing, billing, and account management, including cost optimization strategies.</li>
                                    <li><span className="string">Technology Applications:</span> Insight into how various technologies are applied on the AWS platform.</li>
                                 </ul>
                           </div>
                           <div className="cert-skills">
                                 <div className="cert-skill no-border">Skills: </div>
                                 <div className="cert-skill">AWS Service Configuration</div>
                                 <div className="cert-skill">Cloud Solution Analysis</div>
                                 <div className="cert-skill">Cost Estimation</div>
                                 <div className="cert-skill">AWS Security Fundamentals</div>
                                 <div className="cert-skill">AWS Console Navigation</div>
                                 <div className="cert-skill">Cloud Resource Monitoring</div>
                           </div>
                        </div>
                     </div>
                     <div id="modalCCPcert" className="modal-image">
                        <div className="modal-content-image">
                           <span className="close" onclick="closeModal('modalCCPcert')">&times;</span>
                           <img src="ref/Certifications/AWS Certified Cloud Practitioner certificate.png" alt="AWS CCP Certificate" />
                           <div className="img-flex">
                                 <a href="https://aws.amazon.com/verification" id="CCP val-link" target="_blank"><p className="val-link"> Validation Link&nbsp;<FiExternalLink /></p></a>
                                 <p id="code2">VBXN8B81V14QQRWC&nbsp; <i className="fas fa-copy" onclick="copyToClipboard('VBXN8B81V14QQRWC', 'message2')"></i><span id="message2" className="copy-message"></span></p>
                           </div>
                        </div>                        
                     </div>
               </div>
               <div className="item-container">
                     <div className="item-card">
                        <div className="face face1">
                           <div className="content">
                                 <img src={ComptiaSecPlus} /> 
                                 <h3>CompTIA Security+ Ce</h3>
                                 <p className="tap">Tap on the certification logo for more details</p>
                           </div>
                        </div>
                        <div className="face face2">
                           <div className="content">
                                 <p className="date item-date"> Jun 2023 - Oct 2023 </p>
                                 <p className="item-text"> 
                                    'CompTIA Security+ is a global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career.'<br />
                                    After obtaining the A+ certification
                                    <span className="fadeout-container">
                                       <span className="fadeout-text">and beginning my </span>
                                       <span className="fadeout-gradient"></span>
                                    </span>
                                    <span className="read-more "onclick="openModal('modalSECplus')"> Read More&nbsp;<i className="fas fa-arrow-right"></i></span>
                                 </p>
                                 <p className="font-edit cert-text" onclick="openModal('modalSECpluscert')">View Certificate &nbsp;<i className="fas fa-image"></i></p>
                           </div>
                        </div>
                        
                     </div>
                     <div id="modalSECplus" className="modal">
                        <div className="modal-content">
                           <span className="close" onclick="closeModal('modalSECplus')">&times;</span>
                           <h1> <span className="string">CompTIA</span> Security+ </h1>
                           <p> 
                                 <span className="string">After obtaining the A+ Certification and beginning my</span> career as a <span className="color">Level 1 Technical Support Specialist</span>, my interest in the field of <span className="color">cybersecurity</span> grew, particularly influenced by a friend working in the area.
                                 Recognizing the critical and evolving nature of cybersecurity, I decided to pursue further specialization in this field. 
                                 This decision was driven by the desire to expand my knowledge and capabilities beyond general IT support, aiming to <span className="color">delve deeper</span> into the security aspects of technology.
                           </p>
                           <p>
                                 Balancing my job responsibilities, I embarked on a journey to prepare for the <span className="color">CompTIA Security+ Certification</span>.
                                 My study regimen covered various critical topics, including <span className="color">network security, threat management, and cryptography</span>.
                                 This rigorous preparation paid off when I successfully passed the <span className="color">Security+ exam</span> on my first attempt in October. 
                                 This <span className="color">achievement</span> was not only a significant career milestone but also a stepping stone towards a more specialized role in <span className="color">cybersecurity</span>, following the path of my friend and venturing into a field that is increasingly vital in our technology-dependant world.
                           </p>
                           <div className="flex-li">
                                 <p className="li-title"> Learning Outcomes: </p>
                                 <ul>
                                    <li><span className="string">Network Security:</span> Understanding security concepts related to networks, including architecture and design.</li>
                                    <li><span className="string">Compliance and Operational Security:</span> Knowledge of laws, regulations, policies, and best practices in securing operational environments.</li>
                                    <li><span className="string">Threats and vulnerabilities:</span> Identifying various types of cybersecurity threats and vulnerabilities and understanding how to mitigate them.</li>
                                    <li><span className="string">Application, Data, and Host Security:</span> Learning about security controls for applications, data, and hosts.</li>
                                    <li><span className="string">Access Control and Identity Management:</span> Understanding the principles of effective access control and identity management.</li>
                                    <li><span className="string">Cryptography:</span> Knowledge of cryptographic principles, techniques, and tools for securing data.</li>
                                 </ul>
                           </div>
                           <div className="cert-skills">
                                 <div className="cert-skill no-border">Skills: </div>
                                 <div className="cert-skill">Network Security</div>
                                 <div className="cert-skill">Risk Analysis</div>
                                 <div className="cert-skill">Security Configuration</div>
                                 <div className="cert-skill">Incident Response</div>
                                 <div className="cert-skill">Encryption</div>
                                 <div className="cert-skill">Access Control</div>
                           </div>
                        </div>
                     </div>
                     <div id="modalSECpluscert" className="modal-image">
                        <div className="modal-content-image">
                           <span className="close" onclick="closeModal('modalSECpluscert')">&times;</span>
                           <img src="ref/Certifications/CompTIA Security+ ce certificate.png" alt="CompTIA Sec+ Certificate" />
                           <div className="img-flex">
                                 <a href="http://verify.CompTIA.org" id="CCP val-link" target="_blank"><p className="val-link"> Validation Link&nbsp;<FiExternalLink /></p></a>
                                 <p id="code3">R935M6SR1N4417WC&nbsp; <i className="fas fa-copy" onclick="copyToClipboard('R935M6SR1N4417WC', 'message3')"></i><span id="message3" className="copy-message"></span></p>
                           </div>
                        </div>                        
                     </div>
               </div>
               <div className="item-container">
                  <div className="item-card">
                     <div className="face face1">
                        <div className="content">
                              <img src={ComptiaAplus} />
                              <h3>CompTIA A+ Ce</h3>
                              <p className="tap">Tap on the certification logo for more details</p>
                        </div>
                     </div>
                     <div className="face face2">
                        <div className="content">
                              <p className="date item-date"> Apr 2023 - Jun 2023 </p>
                              <p className="item-text"> 
                                 'CompTIA A+ Is the Industry Standard for Establishing a Career in IT.' <br />
                                 In April 2023, I embarked on a <span className="fadeout-container">
                                    <span className="fadeout-text">transformative journey towards</span>
                                    <span className="fadeout-gradient"></span>
                                 </span>
                                 <span className="read-more "onclick="openModal('modalAplus')"> Read More&nbsp;<i className="fas fa-arrow-right"></i></span>
                              </p>
                              <p className="font-edit cert-text" onclick="openModal('modalApluscert')">View Certificate &nbsp;<i className="fas fa-image"></i></p>
                        </div>
                     </div>
                  </div>
                  <div id="modalAplus" className="modal">
                     <div className="modal-content">
                        <span className="close" onclick="closeModal('modalAplus')">&times;</span>
                        <h1> <span className="string">CompTIA</span>  A+</h1>
                        <p>
                           <span className="string">In April 2023, I embarked on a transformative journey towards</span> a career in technology by beginning my studies for the <span className="color">CompTIA A+ Certification</span>.
                           This decision came after completing university in February 2022 and realizing that my initial career path did not align with my true aspirations in the <span className="color">tech industry</span>.
                           The A+ certification, known for its comprehensive coverage of <span className="color">IT Fundamentals</span>, offered the perfect avenue to update and enhance my technical knowledge.
                           Focusing on <span className="color">computer systems, hardware and software</span>, I delved into the essentials of <span className="color">PC repair, networking and operating systems</span>.
                           My goal was not just to grasp these technical aspects but to also develop hands-on skills crucial for <span className="color">troubleshooting and problem-solving</span> in real-world IT scenarios.
                        </p>
                        <p>
                              This journey into the world of A+ not only rekindled my passion for technology but also highlighted the importance of keeping pace with the <span className="color">ever-evolving tech landscape</span>.
                              The curriculum's emphasis on <simport className="color">security, networking and opereational procedures</simport { certification } from './../../helpers/CertificationsList';
pan> equipped me with the necessary skills to tackle current and future technological challenges. 
                              As I pursued the <span className="color">CompTIA A+ certification</span>, I was driven by a deep ambition to establish myself as a <span className="color">competent and versatile IT Professional</span>.
                              This certification marked a significant first step in my renewed journey towards a fulfilling and dynamic career in technology, laying the groundwork for exploring diverse opportunities and making a meaningful impact in the tech industry.
                        </p>
                        <div className="flex-li">
                              <p className="li-title"> Learning Outcomes: </p>
                              <ul>
                                 <li><span className="string">Hardware:</span> understanding, identifying, and connecting hardware components and devices.</li>
                                 <li><span className="string">Operating System:</span> Installing, configuring, and troubleshooting operating systems including Windows, macOS, Linux, iOS, and Android.</li>
                                 <li><span className="string">Networking:</span> understanding types of networks and connections including TCP/IP, WIFI, and SOHO.</li>
                                 <li><span className="string">Security:</span> Identifying and protecting against vulnerabilities for devices and their network connections.</li>
                                 <li><span className="string">Software Troubleshooting:</span> Troubleshooting and resolving software issues on computers and mobile devices.</li>
                                 <li><span className="string">Operational Procedures:</span> Following best practices for safety, environmental impacts, communication, and professionalism in the workplace.</li>
                              </ul>
                        </div>
                        <div className="cert-skills">
                              <div className="cert-skill no-border">Skills: </div>
                              <div className="cert-skill">PC Assembly and Repair</div>
                              <div className="cert-skill">OS Installation and Configuration</div>
                              <div className="cert-skill">Network Configuration and Troubleshooting</div>
                              <div className="cert-skill">Cybersecurity Fundamentals</div>
                              <div className="cert-skill">Hardware and Software Troubleshooting</div>
                              <div className="cert-skill">Mobile Device Management</div>
                        </div>
                     </div>
                  </div>
                  <div id="modalApluscert" className="modal-image">
                     <div className="modal-content-image">
                        <span className="close" onclick="closeModal('modalApluscert')">&times;</span>
                        <img src="ref/Certifications/CompTIA A+ ce certificate.png" alt="CompTIA Aplus Certificate" />
                        <div className="img-flex">
                           <a href="http://verify.compTIA.org" id="CCP val-link" target="_blank"><p className="val-link"> Validation Link&nbsp;<FiExternalLink /></p></a>
                           <p id="code4">ELE9E5M532BQQ4GC&nbsp; <i className="fas fa-copy" onclick="copyToClipboard('ELE9E5M532BQQ4GC', 'message4')"></i><span id="message4" className="copy-message"></span></p>
                        </div>
                     </div>                        
                  </div>
               </div>
            </div>
         </div> 
      </div>  */}
   </>
  )
}

export default Experience
