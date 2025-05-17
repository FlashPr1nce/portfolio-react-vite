import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

//INFO HERO STYLES

const InfoHeroSection = styled.section`
    position: relative;
    
    padding: 55px 0;
    
    background-color: ${theme.colors.secondaryBg};
    
    
    @media ${theme.media.tablet} {
    }
`



const SkillWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    
    
`;
const InfoHeroWrapper = styled.div`
 
`

const TextExpWrapper = styled.div`
    display: flex;
    align-items: center;
    
    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: start;
    }
`

const NoteSpan = styled.span`
    font-weight: 600;
    font-size: 96px;
    color: ${theme.colors.accentViol};
    margin-right: 22px;
    
   
`


const TextExp = styled.p`
    font-weight: 500;
    font-size: 24px;
    
;
    
`
/////////////////////////////////////////////////

//BLOCK SKILL STYLES

const BlockSkill = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    
    width: 170px;
    height: 170px;
    transition: transform 0.2s ease;

    @media ${theme.media.mobile} {
        width: 150px;
        height: 150px;
        
    }
    

    color: ${theme.colors.font};

    &:hover {
        transform: translateY(-5px);
    }

    p {
        font-size: 24px;
        font-weight: 600;
    }
`


export const S = {
    InfoHeroSection,
    SkillWrapper,
    NoteSpan,
    TextExpWrapper,
    InfoHeroWrapper,
    TextExp,
    BlockSkill
}
