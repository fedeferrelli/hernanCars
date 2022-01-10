import React from 'react';
import Portrait3 from '../../images/pexels-prateek-katyal-2694389.jpg'
import { HeroPortrait, HeroContainer, HeroBG, HeroContent, HeroH1, HeroP, HeroBTNWraper } from './HeroSectionElements';
import { Button } from '../ButtonElement';


const HeroSection = () => {

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
