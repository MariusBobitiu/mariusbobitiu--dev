import React from 'react';
import '../styles/Pages/DataRequestForm.css';
import { BiSolidTrafficBarrier } from "react-icons/bi";
import { LuMailPlus } from "react-icons/lu";
import { HiOutlinePencilAlt } from "react-icons/hi";

const DataRequestForm = () => {
  return (
    <div className='dataForm--container'>
        <div className='main--container'>
            <div>
                <h1 className='f-title'><span className='accent'>Notice: </span>Data Subject Access Request Form Under Construction</h1>
            </div>

            <div>
                <h2 className='f-subtitle'><BiSolidTrafficBarrier /> We're making improvements! <BiSolidTrafficBarrier /></h2>
                <br />
                <p className='f-text'>Our Data Access Request page is currently being upgraded to enhance your experience. We apologize for any inconvenience and appreciate your patience during this process.</p>
                <p className='f-text'><span className='bold'>Need data now?</span> No problem! Please reach out directly, and I'll personally assist you with your request.</p>
                <br />
                <ul className='f-list'>
                    <li className='f-list-item'><LuMailPlus /> Email me at: <a href='mailto:contact@mariusbobitiu.dev' aria-label='Link to email'> contact@mariusbobitiu.dev </a></li>
                    <li className='f-list-item'><HiOutlinePencilAlt /> Or use the <a href='https://mariusbobitiu.dev/contact' aria-label='Contact page'> contact Form </a></li>
                </ul>
                <br />
                <p className='f-text sm-text'>Thank you for your understanding. I'm excited to bring you a better service soon!</p>
            </div>
            <br />
            <div>
                <p className='f-b-text first-child'>- Marius Bobitiu</p>
                <p className='f-b-text'>Portfolio Owner</p>
                <p className='f-b-text'><a href='https://mariusbobitiu.dev' aria-label='Marius Bobitiu Developer Portfolio link'>mariusbobitiu--dev</a></p>
                <p className='f-b-text'>Last updated: 01-Mar-2024</p>
            </div>
            <a href='/' aria-label='Home page' className='button'>Go Home</a>
        </div>
    </div>
  )
}

export default DataRequestForm
