import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { theme } from "../styles/Theme.ts";

// Используем $active — транзиентный пропс
const Button = styled.button<{ $active: boolean }>`
    position: relative;
    color: ${theme.colors.font};
    border: none;
    font-size: 1.2rem;
    margin: 0 0.25rem;
    opacity: ${({ $active }) => ($active ? 1 : 0.4)};
    cursor: pointer;
    transition: opacity 0.2s;
    font-weight: 700;
    padding: 0;
    line-height: 1;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 6px;
        background-color: ${({ $active }) => $active ? theme.colors.accentViol : 'transparent'};
        transition: background-color 0.3s ease;
        z-index: -1; /* линия под текстом */
    }

    &:hover {
        opacity: 1;
    }
`;

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
    };

    return (
        <div>
            <Button onClick={() => changeLanguage('en')} $active={currentLang === 'en'}>EN</Button>
            /
            <Button onClick={() => changeLanguage('ru')} $active={currentLang === 'ru'}>RU</Button>
        </div>
    );
};
