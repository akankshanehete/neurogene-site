import './Mission.css';

import React from 'react'

const Mission = () => {
    return (
        <>
        <div className='row mission-wrapper'>
            <div className='col-sm-6 justify-content-center'>
                <h2 className='mission-title'> OUR MISSION <svg className='right-arrow ' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg></h2>
                
            </div>
            <div className='col-sm-6'>
                <p className='mission-para'>
                neuroGENE’s proposed solution to FRDA is gene editing via CRISPR. An etiological 
                solution will ensure that minimal to no symptomatic treatment will be required 
                throughout the client’s lifetime. CRISPR deletes the mutation and fuses 
                the remaining gene together; in doing so, it goes to the root of the problem 
                and fixes it.
                </p>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#342056" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,234.7C672,224,768,160,864,149.3C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        
        </>
    )
}

export default Mission;
