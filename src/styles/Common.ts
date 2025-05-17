import {theme} from "./Theme.ts";

type FontProps = {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: string;

    Fmin?: number;
    Fmax?: number;
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}:FontProps) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 600} ;
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1280 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`