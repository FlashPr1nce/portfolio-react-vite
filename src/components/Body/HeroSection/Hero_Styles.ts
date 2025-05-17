import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

const HeroSection = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeroSectionWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    
    

    @media screen and (max-width: 950px) {
        flex-direction: column;
    }
    
`

const HeroSectionInfo = styled.div`
    max-width: 440px;

    h1 {
        ${font({Fmax: 52, Fmin: 38})}
        margin-bottom: 18px;
        white-space: nowrap;

        display: inline-block;
        position: relative;
        z-index: 0;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 20px; /* толщина линии */
            background: ${theme.colors.accentViol}; /* цвет линии */
            z-index: -1;
            
        }
    }

    h2 {
        ${font({Fmax: 24, Fmin: 32})}
        margin-bottom: 18px;
    }

    h3 {
        font-size: 32px;
        margin-bottom: 30px;
        white-space: nowrap;
    }

    p {
        ${font({Fmax: 18, Fmin: 38, lineHeight: '27px', weight: 500})}
        font-size: 18px;
        margin-bottom: 30px;
    }


`

const HeroSectionPhoto = styled.div`
    position: relative;
    z-index: 1;
    
    &::before {
        content: '';
        position: absolute;
        
        border: 5px solid ${theme.colors.accentViol};
        width: 350px;
        height: 430px;
        
        top: -25px;
        left: 35px;
        z-index: -1;

     

        @media ${theme.media.mobile} {
            width: 240px;
            height: 320px;
            top: -25px;
            left: 35px;
        }
    }
    
    img {
        width: 350px;
        height: 430px;
        object-fit: cover;
        
        @media ${theme.media.mobile} {
            margin-top: 76px;
            width: 240px;
            height: 320px;
        }

        @media screen and (max-width: 950px) {
            margin-top: 76px;
        }
    }
`

const ButtonFlexWrapper = styled.div`
    display: flex;
    
    Button{
        
        @media ${theme.media.tablet} {
            width: 150px;
        }

        @media ${theme.media.mobile} {
            width: 150px;
            margin: 0 auto;
        }
    }
`

const BackgroundBlock = styled.div`
    position: relative;
    z-index: 10;
    background-color: ${theme.colors.secondaryBg};
    width: 100%;
    height: 128px;
    
    @media ${theme.media.mobile} {
        height: 85px;
    }
`

export const S = {
    HeroSection,
    HeroSectionWrapper,
    HeroSectionInfo,
    HeroSectionPhoto,
    ButtonFlexWrapper,
    BackgroundBlock
}