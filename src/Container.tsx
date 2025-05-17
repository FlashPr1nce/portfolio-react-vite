import styled from 'styled-components';
import {theme} from "./styles/Theme.ts";

export const Container = styled.div`
    max-width: 1100px;
    width: 100%;

    margin: 0 auto;
    padding: 0 15px;
    

    @media ${theme.media.tablet} {
        max-width: 768px;
        padding: 0 15px;
    }

    @media ${theme.media.mobile} {
        max-width: 400px;
        padding: 0 15px;
        
    }
`;
