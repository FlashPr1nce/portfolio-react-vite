import { useEffect, useState } from "react";
import { MenuItems } from "../MenuItems.tsx";
import { S } from "./HeaderMenu_Styles.ts";
import { Container } from "../../../Container.tsx";
import { MenuItemPropsType } from "../../../types/MenuItems.ts";

type MenuProps = {
    menuList: MenuItemPropsType[];
};

export const MobileMenu = ({ menuList }: MenuProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isMenuOpen]);

    return (
        <Container>
            <S.MobileMenu>
                <S.BurgerButton $isOpen={isMenuOpen} onClick={toggleMenu}>
                    <span></span>
                </S.BurgerButton>
                <S.MobileMenuPopup $isOpen={isMenuOpen}>
                    <MenuItems menuList={menuList} onItemClick={() => setIsMenuOpen(false)} />
                </S.MobileMenuPopup>
            </S.MobileMenu>
        </Container>
    );
};
