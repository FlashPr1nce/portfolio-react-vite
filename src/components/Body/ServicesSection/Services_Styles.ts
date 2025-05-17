

//SERVICES SKILL BLOCK STYLES

import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const ServicesSkillBlock = styled.div<{ $isEven: boolean }>`
    position: relative;
    
    border: 3px solid ${({$isEven}) => ($isEven ? theme.colors.accentViol : theme.colors.font)};
    border-radius: 16px;
    width: 330px;
    box-sizing: border-box;
    min-height: 340px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    h3 {
        font-weight: 600;
        margin-top: 10px;
        font-size: 24px;
        color: ${({$isEven}) => ($isEven ? theme.colors.font : theme.colors.accentViol)};
    }

    p {
        margin-top: 6px;
        font-weight: 500;
        font-size: 17px;
        line-height: 28px;
        text-align: center;
        padding: 15px;
    }
    
    @media ${theme.media.mobile} {
        width: 310px;
    }
`
////////////////////////////////////////

//SERVICES SECTION STYLES

const ServiceSection = styled.section`
   padding: 55px 0;
`

const ServicesWrapper = styled.div`
`

const ServicesSkillWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    gap: 20px;

    @media screen and (max-width: 725px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const S = {
    ServicesSkillBlock,
    ServiceSection,
    ServicesWrapper,
    ServicesSkillWrapper,
}