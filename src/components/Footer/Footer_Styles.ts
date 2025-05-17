import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


const Footer = styled.footer`
    position: relative;
    
    background: ${theme.colors.primaryBg};

    p {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 50px;
    }

    span {
        font-size: 16px;
        color: #939499;
    }
`;

const TextTech = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  
  @media ${theme.media.mobile} {
    flex-direction: column;
  }
`

const NetworksLinkWrapper=styled.div`
  display: none;
    @media ${theme.media.mobile} {
        display: block;
    }
`

const TextCapture = styled.p`
  padding: 36px 0 0;
  @media ${theme.media.mobile} {
    margin-top:40px;
  }
`

export const S = {
    Footer,
    TextTech,
    NetworksLinkWrapper,
    TextCapture,
}