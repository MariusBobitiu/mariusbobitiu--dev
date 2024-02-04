import React from 'react';
import '../../styles/components/expertise/Modal.css'
import { parseAndStyleText } from './../../helpers/parseText';

function Modal({ certification, onClose }) {
    if (!certification) return null; // Just a safety check

    // Destructuring for easier access
    const { name, fullDescriptionP1, fullDescriptionP2, learningOutcomes, learningOutcomesDescription, skills } = certification;

    return (
        <div className="modal visible"> {/* Assuming you handle visibility through CSS or conditional rendering */}
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{name}</h2>
                <p>{parseAndStyleText(fullDescriptionP1)}</p>
                <p>{parseAndStyleText(fullDescriptionP2)}</p>
                <div className="flex-li">
                    <p className="li-title"> Learning Outcomes: </p>
                    <ul>
                        {learningOutcomes.map((outcome, index) => (
                            <li key={index}><span className='string'>{outcome}</span> {learningOutcomesDescription[index]}</li>
                        ))}
                    </ul>
                </div>
                <div className='cert-skills'>
                    <div className='cert-skill no-border'>Skills: </div>
                    {skills.map((skill, index) => (
                        <div key={index} className='cert-skill'>{skill}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Modal;
