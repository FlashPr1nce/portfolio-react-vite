import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Header = styled.nav`
    width: 100%;
    background: ${theme.colors.primaryBg};

    position: sticky;
    top: 0;
    right: 0;
    z-index: 1000;
`;

const HeaderMenuWrapper = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
`

const Logo = styled.a`
    color: ${theme.colors.accentViol};
    font-size: 50px;
    white-space: nowrap;
    font-weight: bold;
`;

export const S = {
    Header,
    HeaderMenuWrapper,
    Logo
}