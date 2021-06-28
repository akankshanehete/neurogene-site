
import "./Impact.css";
import {ReactComponent as BedPatient} from './imgs/bedpatient.svg';


const Impact = () => {
    return (
        <>
        <div className='row impact-wrapper' >
            <div className='col-sm-6 '>
                <h2 className='left-col impact-tit ' id='impact'>FRDA IS A FATAL DISEASE WITH SIGNIFICANT UNMET MEDICAL NEED.</h2>
                <p className='left-col para'>Friedreich’s ataxia (or FRDA) is a rare genetic disease caused 
                by mutations in the Frataxin gene. This disease is characterized by neuron degeneration 
                and is eventually fatal. FRDA will usually confine 
                individuals to a wheelchair after the first onset of symptoms, and the most common cause of death 
                in sufferers are heart problems. 
                </p>
            </div>

            <div className='col-sm-6 '>
            <BedPatient className='wheelchair-img' />
            </div>


        </div>
            
        </>
    )
}

export default Impact;
