
//PROJECT BLOCK STYLES//

import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const ProjectBlock = styled.div`
    position: relative;
    
    background-color: #31313F;
    border-radius: 8px;
    
    width: 344px;
    min-height: 200px;
    

    img {
        width: 100%;
        height: 180px;

        object-fit: cover;
        
        border-radius: 8px;
        opacity: 20%;
        
        border: 1px solid ${theme.colors.accentViol};
        
        
    }

    :hover{
        opacity: 1;
        transition: ${theme.animations.transition}
    }
    
    h3{
        font-size: 24px;
        color: ${theme.colors.accentViol};
        
        margin-top: 16px;
        padding-bottom: 5px;
    }
    
    p{
        font-size: 18px;
        color: ${theme.colors.font};  
        
        padding-bottom: 24px;
    }
`

const ProjectWrapper = styled.div`
    padding: 20px;
    width: 100%;
`

const ButtonWrapper=styled.div`
    display: flex;
    width: 100%;
    
    a{
        width: 47.6%;
    }
`
/////////////////////////////////////

//PROJECTS SECTION STYLES

const ProjectSection = styled.section`
    padding: 55px 0;
    position: relative;
    background-color: ${theme.colors.secondaryBg};
`

const ProjectCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;

    flex-wrap: wrap;
    gap: 17px;
    
`

export const S = {
    ProjectBlock,
    ProjectWrapper,
    ButtonWrapper,
    ProjectSection,
    ProjectCardWrapper
}


