import styled from "styled-components";
import {MenuItems} from "../MenuItems.tsx";
import {Container} from "../../../Container.tsx";
import {MenuItemPropsType} from "../../../types/MenuItems.ts";
import {LanguageSwitcher} from "../../LanguageSwitcher.tsx";


type MenuProps = {
    menuList: MenuItemPropsType[]
}

export const DesktopMenu = ({menuList}: MenuProps) => {

    return (

        <StyledDesktopMenu>
            <Container>
                <MenuItems menuList={menuList}/>
            </Container>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.div`
   
`;

