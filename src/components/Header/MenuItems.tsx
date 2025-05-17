import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {MenuItemPropsType} from "../../types/MenuItems.ts";
import {Link} from 'react-scroll'
import {LanguageSwitcher} from "../LanguageSwitcher.tsx";


type MenuProps = {
    menuList: MenuItemPropsType[]
    onItemClick?: () => void

}



export const MenuItems: React.FC<MenuProps>  = ({menuList, onItemClick}: MenuProps) => {

    return (
        <MenuList>
            {menuList.map((it, index) => (
                <MenuItem key={index}>
                    <MenuLink
                        onClick={onItemClick}
                        spy={true}
                        activeClass='active'
                        smooth={true}
                        to={it.href}
                        offset={-80} // отступ для компенсации высоты header
                        duration={500}
                    >
                        {it.title}
                    </MenuLink>

                </MenuItem>

            ))}
            <LanguageSwitcher />

        </MenuList>
    );
};

const MenuList = styled.ul`
    display: flex;
`;

const MenuItem = styled.li`

    transition: ${theme.animations.transition};

    &:hover {
        transform: translateY(-4px);
        transition: ${theme.animations.transition}
    }`;

const MenuLink = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  padding: 25px;
  cursor: pointer;
  transition: 0.3s;
    
    
    &:hover, &.active {
    color: ${theme.colors.accentViol};
  }
`;

