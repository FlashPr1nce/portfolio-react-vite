import styled from "styled-components";
import {Icon} from "./Icon.tsx";
import {theme} from "../styles/Theme.ts";

export type ButtonPropsType = {
    title?: string;
    icon?: string;
    isActive?: boolean;
    href?: string;
    onClick?: () => void;
    target?: string;
    rel?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = ({
                           title,
                           icon,
                           isActive,
                           href,
                           onClick,
                           target = "_blank",
                           rel = "noopener noreferrer",
                           ...rest
                       }: ButtonPropsType) => {
    return (
        <StyledLink
            href={href}
            onClick={onClick}
            $isActive={isActive}
            target={target}
            rel={rel}
            {...rest}
        >
            {title}
            {icon && <Icon iconId={icon} />}
        </StyledLink>
    );
};

const StyledLink = styled.a<{ $isActive?: boolean }>`
    width: 160px; 
    height: 48px;
    flex-shrink: 0;
    cursor: pointer;
    
    border: 2px solid ${theme.colors.accentViol};
    border-radius: 8px;
    color: ${theme.colors.font};
    margin-right: 15px;
    font-weight: 600;

    background-color: ${({ $isActive }) =>
            $isActive ? theme.colors.accentViol : "transparent"};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-decoration: none;
    transition: ${theme.animations.transition};

    &:hover {
        transform: translateY(-4px);
    }
`;

