import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

type TitleProps = {
    title: string;
}

export const Title = ({title}: TitleProps) => {
    return (
        <StyledTitle>
            {title}
        </StyledTitle>
    );
};

const StyledTitle = styled.h2`
    color: ${theme.colors.accentViol};
    font-weight: 600;
    font-size: 32px;
    
    margin-bottom: 15px;
    
    @media ${theme.media.tablet} {
        margin-bottom: 16px;
    }
`
