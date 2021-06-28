import { Component } from 'react';
import Particles from 'react-tsparticles';
import './Hero.css';


class Hero extends Component{
    render(){
        return(
            <>
            
            <Particles id="particles"
            params={{
                //background: {
                    //color:{
                        //value: '#000'
                    //},
                //},
                particles: {
                    number: {
                        value: 150,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                       
                    },
                    color: {
                        value: '#fff'
                    },
                    opacity: {
                        value: 0.5,
                        
                    },
                    size: {
                        value: 3.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 3
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance:150,
                        color:'#fff',
                        opacity: 0.5

                       
                    },
                    move: {
                        speed: 1,
                        direction: 'none',
                        outMode: 'bounce',
                        random: false,
                        straight: false, 
                        enable: true,

                        
                        
                    }
                 }, 
                 interactivity: {
                    detectsOn: "canvas",
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                      },
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 75,
                        duration: 0.4,
                      },   
            }}}}
            
            /> 
            <div className='ml-auto' id='hero-wrapper'>
                <h1 className='title'> ACCELERATING REGENERATION</h1> 
                <h4 className='subtitle'>We are changing the standard of care in treating FRDA.</h4>
                <button className='btn btn-outline-light learn-more'>Learn More</button>
            </div>
            
    

            </>
        );
    }
}

export default Hero;
