import React from 'react';
import Video from '../../video/videoCuanteVueltas.mp4'
import Video2 from '../../video/VideoArranque.mp4';
import { HeroContainer, HeroBG, HeroVideo, HeroContent, HeroH1, HeroP, HeroBTNWraper } from './HeroSectionElements';
import { Button } from '../ButtonElement';


const HeroSection = () => {

    let fede = window.innerWidth;
    console.log(fede)

    return (
        <HeroContainer>
            <HeroBG>

                <HeroVideo 
                    src= {fede>768 ? Video2 : Video}
                    type='video/mp4'
                    //controls
                    autoplay
                    autoPlay
                    
                    //loop 
                    //muted 
                    />               
            </HeroBG>

            <HeroContent>
                <HeroH1>¿Buscas un auto?</HeroH1>
                <HeroP>Este es el lugar indicado</HeroP>
            

            <HeroBTNWraper>
                <Button to='/otra'> Ver autos </Button>
            </HeroBTNWraper>

            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
