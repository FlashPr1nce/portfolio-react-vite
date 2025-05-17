import styled from "styled-components";

type TextProps = {
    textInfo: React.ReactNode;
}

export const Text = ({textInfo}:TextProps) => {
    return (
        <StyledText>
            {textInfo}
        </StyledText>
    );
};

const StyledText = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 18px;    
`

