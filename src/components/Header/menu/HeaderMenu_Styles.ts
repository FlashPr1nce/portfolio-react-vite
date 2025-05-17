import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const MobileMenu = styled.div`
    width: 100%;
    background: ${theme.colors.secondaryBg};
`

const BurgerButton = styled.button<{ $isOpen: boolean }>`
    position: fixed;
    top: 20px;
    right: 25px;
    z-index: 99999;
    

    width: 40px;
    height: 40px;
    background: transparent;
    padding: 0;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
        position: relative;
        display: block;
        width: 30px;
        height: 3px;
        background-color: ${theme.colors.font};
        transition: background-color 0.3s ease;

        ${props => props.$isOpen && css`
            background-color: transparent;
        `}

        &::before,
        &::after {
            content: '';
            position: absolute;
            width: 30px;
            height: 3px;
            background-color: ${theme.colors.font};
            transition: transform 0.3s ease;
            left: 0
        }

        &::before {
            transform: translateY(-8px);
            ${props => props.$isOpen && css`
                transform: rotate(-45deg);
            `}
        }

        &::after {
            transform: translateY(8px);
            ${props => props.$isOpen && css`
                transform: rotate(45deg);
            `}
        }
    }
`;

const MobileMenuPopup = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: 999;
    background: ${theme.colors.secondaryBg};

    display: flex;
    justify-content: center;
    align-items: center;

    transform: translateY(-100%);
    pointer-events: none;

    transition: opacity 0.8s ease, transform 0.8s ease;

    
    
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        transition: .2s ease-in-out;
        
    }

    ${props => props.$isOpen && css<{ $isOpen: boolean }>`
        opacity: 0.95;
        transform: translateY(0);
        pointer-events: all;
        
        & ul {
            gap: 36px;
        }
    `}

`;

export const S = {
    MobileMenu,
    BurgerButton,
    MobileMenuPopup
}