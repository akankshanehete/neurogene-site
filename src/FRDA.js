import './FRDA.css';
import {ReactComponent as FirstAid} from './imgs/xray.svg';

const FRDA = () => {
    return (
        <div>
            <div className='row frda-wrapper'>
            <div className='col-sm-6 '>
                <h2 className='left-col impact-tit'>FRDA: HERE'S WHAT HAPPENS.</h2>
                <p className='left-col para'>Friedreich’s ataxia (or FRDA) is a rare genetic disease caused 
                by mutations in the Frataxin gene. This disease is characterized by neuron degeneration 
                and is eventually fatal. FRDA will usually confine 
                individuals to a wheelchair after the first onset of symptoms, and the most common cause of death 
                in sufferers are heart problems. 
                </p>
            </div>

            <div className='col-sm-6 '>
            <FirstAid className='firstaid-img' />
            </div>


        </div>
        
        </div>
    )
}

export default FRDA;
