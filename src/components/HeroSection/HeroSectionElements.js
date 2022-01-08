import styled from "styled-components";

let height = window.innerHeight;

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: ${height}px;
    position: relative;
    z-index: 1

`

export const HeroBG = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left:0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HeroVideo = styled.video`
    width: 100%;
    height: 100%;
    background: #232a34;
    -o-object-fit: cover;
    object-fit: cover
`

export const HeroPortrait = styled.img`
    width: 100%;
    height: 100%;
    background: #232a34;
    -o-object-fit: cover;
    object-fit: cover
`

export const HeroContent = styled.div`
    z-index:3;
    max-width: 1200px;
    position: absolute;
    padding: 50px 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0,0,0, 0.3);
    border-radius: 5px;
   

    @media screen and (max-width: 768px){
        bottom: 10px;
        padding: 10px 30px;
        box-shadow: none;
       
    }
   
`
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    font-family: monospace; 

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const HeroP = styled.p`
    margin-top: 10px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    font-family: monospace;
    
    @media screen and (max-width: 768px){
        font-size: 24px;
        margin-top: 16px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
        margin-top: 14px;
    }

`

export const HeroBTNWraper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 99

`