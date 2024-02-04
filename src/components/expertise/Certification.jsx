import React from 'react';
import '../../styles/components/expertise/Certification.css';
import { FaImage } from 'react-icons/fa6';

function Certification({ badge, name, date, description, id, onClick, onClickImage }) {

   return (
      <div className='card'>
         <div className='card--image'>
            <div className="card--image-img" style={{ backgroundImage: `url('${badge}')`}}></div>
            <p className="card--title"> {name} </p>
         </div>
         <div className="card--content">
            <p className="card--title">{name}</p>
            <p className="card--date">{date}</p>
            <p className="card--description">{description} 
               <button 
                  className='button button-outline'
                  onClick={onClick}
               > Read More </button>
            </p>
            
            <button className='btn button-filled'
               onClick={onClickImage}
            
            > View Certificate <FaImage /> </button>
         </div>
      </div>
   );
};

export default Certification
