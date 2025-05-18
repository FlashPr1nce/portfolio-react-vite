import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


const FormSection = styled.section`
    position: relative;
    padding: 55px 0 260px;
    min-height: 100vh;
    
`

const FormWrapper = styled.div`
    display: flex;
    
    @media ${theme.media.mobile} {
        align-items: center;
        flex-direction: column;
    }
`

const NetworksBlock = styled.div`
    flex-grow: 1;
    width: 350px;
    p{
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        margin-bottom: 18px;

        @media ${theme.media.mobile} {
            display: none;
        }
    }
`






const NetworksLinkWrapper=styled.div`
    @media ${theme.media.mobile} {
        display: none;
    }
`

const FormBlock = styled.div`
    width: 330px;
    flex-grow: 1;
    
    p{
        font-size: 24px;
        margin-bottom: 24px;
    }
    
`

const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;

    input {
        background-color: ${theme.colors.font};
        width: 472px;
        height: 62px;

        border-radius: 8px;
        margin-bottom: 16px;

        opacity: 25%;

        @media screen and (max-width: 936px) {
            width: 380px;
        }

        @media ${theme.media.tablet} {
            width: 315px;
        }
    }

    textarea {
        background-color: #F5F5F5;
        width: 472px;
        min-height: 98px;

        border-radius: 8px;
        margin-bottom: 16px;

        color: black;
        opacity: 25%;

        padding: 43px 0 16px;

        @media screen and (max-width: 936px) {
            width: 380px;
        }

        @media ${theme.media.tablet} {
            width: 315px;
        }
    }

    ::placeholder {
        color: #31313F;
        opacity: 1;
    }

    button {
        color: ${theme.colors.font};
        background-color: ${theme.colors.accentViol};
        border-radius: 8px;
        width: 174px;
        height: 50px;
        transition: ${theme.animations.transition};
        font-weight: 600;
    }
`

export const S = {
    FormSection,
    FormWrapper,
    NetworksBlock,
    NetworksLinkWrapper,
    FormBlock,
    Form
}