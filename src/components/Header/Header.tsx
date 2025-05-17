import {Container} from "../../Container.tsx";
import {DesktopMenu} from "./menu/DesktopMenu.tsx";
import {MobileMenu} from "./menu/MobileMenu.tsx";
import {S} from "./Header_Styles.ts"
import React, {useEffect, useMemo} from "react";
import {animateScroll as scroll} from "react-scroll";
import {Icon} from "../Icon.tsx";
import { useTranslation } from "react-i18next";


export const Header = () => {
    const { t } = useTranslation();

    const menuList = useMemo(() => [
        { title: t('header.home'), href: 'home' },
        { title: t('header.about'), href: 'about' },
        { title: t('header.projects'), href: 'projects' },
        { title: t('header.contacts'), href: 'contacts' }
    ], [t]);

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakPoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <S.HeaderMenuWrapper>
                    <S.Logo href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                scroll.scrollToTop();
                            }}>
                        <Icon iconId={'Code'} width={'50px'} height={'50px'} viewBox={'0 0 50 50'} />
                    </S.Logo>

                    {width > breakPoint
                        ? <DesktopMenu menuList={menuList} />
                        : <MobileMenu menuList={menuList} />
                    }
                </S.HeaderMenuWrapper>
            </Container>
        </S.Header>
    );
};
