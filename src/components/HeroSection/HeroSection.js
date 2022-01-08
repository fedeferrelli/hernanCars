import React from 'react';
import Video from '../../video/videoCuanteVueltas.mp4'
import Video2 from '../../video/VideoArranque.mp4';
import Portrait from '../../images/pexels-erik-mclean-9966015.jpg'
import Portrait1 from '../../images/pexels-hassan-ouajbir-804129.jpg'
import Portrait2 from '../../images/pexels-sourav-mishra-1231643.jpg'
import Portrait3 from '../../images/pexels-prateek-katyal-2694389.jpg'
import { HeroPortrait, HeroContainer, HeroBG, HeroVideo, HeroContent, HeroH1, HeroP, HeroBTNWraper } from './HeroSectionElements';
import { Button } from '../ButtonElement';


const HeroSection = () => {

    let fede = window.innerWidth;
    console.log(fede)

    return (
        <HeroContainer>
            <HeroBG>

                <HeroPortrait 
                    src= {Portrait3}
           
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
