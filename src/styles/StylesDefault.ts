// styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';
import {theme} from "./Theme.ts";

const GlobalStyle = createGlobalStyle`
    
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: ${theme.colors.font};
    }
    
    section {
        background-color: ${theme.colors.primaryBg};
    }
    
    ul, ol {
        list-style: none;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    button {
        border: none;
        background: none;
        font: inherit;
        cursor: pointer;
    }

    input, textarea {
        font: inherit;
        border: none;
        background: none;
        outline: none;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    html {
        -webkit-text-size-adjust: 100%;
    }
`;

export default GlobalStyle;
