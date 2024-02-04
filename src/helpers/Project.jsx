import React from 'react';
import { IconContext } from 'react-icons';
import { FaDribbble, FaGithub } from 'react-icons/fa';
import { FiGlobe } from "react-icons/fi";


function Project({ image, name, startDescription, description, github, dribbble, website }) {
  
  return (
  <>
    <div className='project--card'>
      <div className='project--image'
           style={{ backgroundImage: `url(${image})`}}
           onMouseEnter={(e) => e.currentTarget.classList.add('hovered--project')}
           onMouseLeave={(e) => e.currentTarget.classList.remove('hovered--project')}
      >
        <IconContext.Provider value={{ size: '35px' }} >
          <div className='project--links'>
            { github ? (
              <a href={github}>
                <FaGithub />
              </a>
            ) : null }
            { dribbble ? (
              <a href={dribbble}>
                <FaDribbble />
              </a>
            ) : null }
            { website ? (
              <a href={website}>
                <FiGlobe />
              </a>
            ) : null }
          </div>
        </IconContext.Provider>
      </div>
      <h3><span className="ubuntu">~$</span> {name} </h3>
      <p>{startDescription} <span>{description}</span></p>
    </div>
  </>
  )
}

export default Project;
