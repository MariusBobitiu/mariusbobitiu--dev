//CertificationList.jsx

import THM_SOC_lv1 from '../assets/Certifications/TryHackMe - SOC Level 1.png'
import TCP_Dump from '../assets/Certifications/Coursera - TCP Dump.png'
import AWS_SAA_cert from '../assets/Certifications/AWS Certified Solutions Architect - Associate certificate.png'
import AWS_CCP_cert from '../assets/Certifications/AWS Certified Cloud Practitioner certificate.png'
import SecPlus_cert from '../assets/Certifications/CompTIA Security+ ce certificate.png'
import Aplus_cert from '../assets/Certifications/CompTIA A+ ce certificate.png'

export const certification = [
   {
      id: 1,
      badge: '',
      name: 'TryHackMe - SOC Level 1',
      description: '',
      fullDescriptionP1: '',
      fullDescriptionP2: '',
      learningOutcomes: [''],
      learningOutcomesDescription: [''],
      skills: [''],
      link: '',
      cert_image: THM_SOC_lv1,
      code: '',
   },
   {
      id: 2,
      badge: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png',
      name: 'AWS Certified Solutions Architect - Associate',
      date: 'NOV 2023 - JAN 2024',
      description: '"This certification showcases knowledge and skills in AWS technology, across a wide range of AWS services."',
      fullDescriptionP1: 'To deepen my expertise in cloud computing and AWS services, I have embarked on the journey towards earning the {AWS Certified Solutions Architect - Associate (SAA} certification. My motivation behind this certification is rooted in the desire to gain a comprehensive understanding of cloud technologies and, more specifically, how AWS functions as a {leading cloud provider}. As I progress through this certification, my aim is to not only grasp the core AWS services but also to extend my skills to include {Terraform}, a powerful {Infrastructure-As-Code} tool. By incorporating Terraform into my skill set, I intend to develop the capability to {design, build, and manage cloud infrastructures} efficiently and with a high degree of automation.',
      fullDescriptionP2: 'Furthermore, I recognize the critical importance of {security} in today\'s cloud-centric landscape. With AWS\'s robust security features and practices, I aspire to become proficient in {securing cloud infrastructures} effectively. My goal is not only to build cloud environments but also to ensure their {Proactive and Reactive Protection}. In essence, my pursuit of the AWS SAA certification is driven by the ambition to become a well-rounded cloud professional capable of {architecting, building, securing, and maintaining cloud infrastructures} that meet the highest standards of {performance, reliability, and security}. This certification is a {pivotal step} in my journey towards achieving these goals',
      learningOutcomes: ['Design Resilient Architectures', 'Define Performant Architectures', 'Specify Secure Applications and Architectures', 'Design Cost-Optimized Architectures', 'Define Operationally Excellent Architectures'],
      learningOutcomesDescription: ['Develop multi-tier and fault-tolerant architectures with appropriate storage solutions.', 'Implement scalable, high-performing compute, storage, networking and database solutions.', 'Design secure access, application tiers, and data security options', 'Identify cost-effective storage, compute, database, and network solutions.', 'Incorporate design features for operational efficiency and excellence.'],
      skills: ['AWS Service Configuration', 'Cloud Solution Analysis', 'Cost Estimation', 'AWS Security Fundamentals', 'AWS Console Navigation', 'Cloud Resource Monitoring'],
      link: 'https://aws.amazon.com/verification',
      cert_image: AWS_SAA_cert,
      code: 'KKRD98CLSM4EQQKS'
   },
   {
      id: 3,
      badge: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png',
      name: 'AWS Certified Cloud Practitioner',
      date: 'OCT 2023 - NOV 2023',
      description: '"This certification validates foundational, high-level understanding of AWS Cloud, services, and terminology."',
      fullDescriptionP1: 'Realizing the potential of cloud computing in the rapidly evolving tech landscape, particularly after my success with the {Security+ Certification}, I was drawn to further expand my technical horizons. The pull towards this field felt even more compelling considering my academic background in {Cloud Computing} from university, aligning seamlessly with my newfound interest. This convergence of past education and current passion set the stage for my next ambitious goal: pursuing the {AWS Certified Cloud Practitioner Certification} to fully integrate my {cybersecurity expertise} with the dynamic world of {cloud technology}.',
      fullDescriptionP2: 'In the subsequent month, I dedicated myself to an intensive study of {AWS\'s core services} and {Cloud concepts}. My focus extended beyond just the technical aspects of AWS’s cloud platform, including its {security and compliance} features to also embrace the {economic principles} of cloud computing. This diligent effort culminated in my passing the {CCP} after just one month of preparation. Achieving the {AWS Certified Cloud Practitioner Certification} was not only a significant career milestone but also a strategic step in marrying my {cybersecurity knowledge} with my {cloud computing background}. This accomplishment uniquely positioned me in the tech industry, equipped to address the intertwining challenges of cloud technology and security.',
      learningOutcomes: ['Cloud Concepts:', 'Core AWS Services:', 'Security and Compliance:', 'Billing and Pricing:', 'Technology Applications:'],
      learningOutcomesDescription: ['Understanding of the basic concepts of cloud computing and how they apply to AWS.', 'Knowledge of the core AWS services, their use cases, and basic AWS architecture best practices.', 'Familiarity with AWS security and compliance concepts, including the AWS shared responsibility model.' ,'Understanding of AWS pricing, billing, and account management, including cost optimization strategies.', 'Insight into how various technologies are applied on the AWS platform.'],
      skills: ['AWS Service Configuration', 'Cloud Solution Analysis', 'Cost Estimation', 'AWS Security Fundamentals', 'AWS Console Navigation', 'Cloud Resource Monitoring'],
      link: 'https://aws.amazon.com/verification',
      cert_image: AWS_CCP_cert,
      code: 'VBXN8B81V14QQRWC'
   },
   {
      id: 4,
      badge: 'https://cin.comptia.org/media/securityplus-logo-certified-ce-png.8/full',
      name: 'CompTIA Security+ Ce',
      date: 'JUN 2023 - OCT 2023',
      description: '"CompTIA Security+ is a global certification that validates the baseline skills necessary to perform core security functions and pursue an IT Security Career"',
      fullDescriptionP1: 'After obtaining the A+ Certification and beginning my career as a {Level 1 Technical Support Specialist}, my interest in the field of {cybersecurity} grew, particularly influenced by a friend working in the area. Recognizing the critical and evolving nature of cybersecurity, I decided to pursue further specialization in this field. This decision was driven by the desire to expand my knowledge and capabilities beyond general IT support, aiming to {delve deeper} into the security aspects of technology.',
      fullDescriptionP2: 'Balancing my job responsibilities, I embarked on a journey to prepare for the {CompTIA Security+} Certification. My study regimen covered various critical topics, including {network security, threat management, and cryptography}. This rigorous preparation paid off when I successfully passed the {Security+ exam} on my first attempt in October. This {achievement} was not only a significant {career milestone} but also a stepping stone towards a more specialized role in cybersecurity, following the path of my friend and venturing into a field that is increasingly vital in our {technology-dependant world}.',
      learningOutcomes: ['Network Security:', 'Compliance and Operational Security:', 'Threats and vulnerabilities:', 'Application, Data, and Host Security:', 'Access Control and Identity Management:', 'Cryptography:'],
      learningOutcomesDescription: ['Understanding security concepts related to networks, including architecture and design.', 'Knowledge of laws, regulations, policies, and best practices in securing operational environments.', 'Identifying various types of cybersecurity threats and vulnerabilities and understanding how to mitigate them.', 'Learning about security controls for applications, data, and hosts.', 'Understanding the principles of effective access control and identity management.', 'Knowledge of cryptographic principles, techniques, and tools for securing data.'],
      skills: ['Network Security', 'Risk Analysis', 'Security Configuration', 'Incident Response', 'Encryption', 'Access Control'],
      link: 'http://verify.comptia.org/',
      cert_image: SecPlus_cert,
      code: 'R935M6SR1N4417WC'
   },
   {
      id: 5,
      badge: 'https://cdn-ckjba.nitrocdn.com/XvHIXtRQMUYzLjoXbfBpiwAcydcSSOVj/assets/images/optimized/rev-d85625b/www.ciat.edu/wp-content/uploads/2020/12/a-logo-eps.png',
      name: 'CompTIA A+ Ce',
      date: 'APR 2023 - JUN 2023',
      description: '"CompTIA A+ is the industry standard for establishing a career in IT"',
      fullDescriptionP1: 'In April 2023, I embarked on a transformative journey towards a career in technology by beginning my studies for the {CompTIA A+ Certification}. This decision came after completing university in February 2022 and realizing that my initial career path did not align with my true aspirations in the {tech industry}. The A+ certification, known for its comprehensive coverage of {IT Fundamentals}, offered the perfect avenue to update and enhance my technical knowledge. Focusing on {computer systems, hardware and software}, I delved into the essentials of {PC repair, networking and operating systems}. My goal was not just to grasp these technical aspects but to also develop hands-on skills crucial for {troubleshooting and problem-solving} in real-world IT scenarios.',
      fullDescriptionP2: 'This journey into the world of A+ not only rekindled my passion for technology but also highlighted the importance of keeping pace with the {ever-evolving tech landscape}. The curriculum\'s emphasis on {security, networking and operational procedures} equipped me with the necessary skills to tackle current and future technological challenges. As I pursued the {CompTIA A+ certification}, I was driven by a deep ambition to establish myself as a {competent and versatile IT Professional}. This certification marked a significant first step in my renewed journey towards a fulfilling and dynamic career in technology, laying the groundwork for exploring {diverse opportunities} and making a meaningful impact in the tech industry.',
      learningOutcomes: ['Hardware', 'Operating System', 'Networking', 'Security', 'Software Troubleshooting', 'Operational Procedures'],
      learningOutcomesDescription: ['understanding, identifying, and connecting hardware components and devices.', 'Installing, configuring, and troubleshooting operating systems including Windows, macOS, Linux, iOS, and Android.', 'understanding types of networks and connections including TCP/IP, WIFI, and SOHO.', 'Identifying and protecting against vulnerabilities for devices and their network connections.', 'Troubleshooting and resolving software issues on computers and mobile devices.', 'Following best practices for safety, environmental impacts, communication, and professionalism in the workplace.'],
      skills: ['PC Assembly & Repair', 'OS installation & configuration', 'Network Configuration & Troubleshooting', 'Cybersecurity Fundamentals', 'Hardware & Software Troubleshooting'],
      link: 'http://verify.comptia.org/',
      cert_image: Aplus_cert,
      code: 'ELE9E5M532BQQ4GC'
   },

]