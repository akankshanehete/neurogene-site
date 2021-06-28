import './CRISPR.css';
import { BiDna } from 'react-icons/bi';
import { ReactComponent as Doctors } from './imgs/doctorsss.svg';
import {ReactComponent as LayeredWaves} from './imgs/layeredwaves.svg';


const CRISPR = () => {
    return (
        <div>
            <svg className='wave'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,256L34.3,261.3C68.6,267,137,277,206,250.7C274.3,224,343,160,411,144C480,128,549,160,617,165.3C685.7,171,754,149,823,149.3C891.4,149,960,171,1029,154.7C1097.1,139,1166,85,1234,85.3C1302.9,85,1371,139,1406,165.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
             <div className='row mission-wrapper crispr'>
            <div className='col-sm-6 justify-content-center'>
                <h2 className='mission-title'> CRISPR CAS-9 <BiDna className='dna-img' /></h2>
                
            </div>
            <div className='col-sm-6'>
                <p className='mission-para'>
                CRISPR Cas9 is a gene editing tool that consists of 2 components, the Cas9 protein that 
                cuts DNA and a guide RNA that can recognize the sequence of DNA that needs to be edited.

                First, the sequence in the Frataxin gene that is causing problems is identified. The guide RNA is 
                then attached to Cas9 and introduced to the identified target cells 
                where it locates the targeted letter sequence and cuts the DNA. 

                </p>

            </div>
            <Doctors className='doctors' />
            <LayeredWaves className='layered-waves' />
        </div>
        </div>
    )
}

export default CRISPR;
