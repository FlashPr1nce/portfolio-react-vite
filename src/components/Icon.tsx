import iconSprite from '../assets/sprites.svg'


type IconProps = {
    iconId: string;
    width?: string
    height?: string
    viewBox?: string;
}

export const Icon = ({iconId, width, height, viewBox}:IconProps) => {
    return (
        <svg  width={width || '24'}
              height={height || '24'}
              viewBox={viewBox || '0 0 24 24'}
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
            <use xlinkHref={`${iconSprite}#${iconId}`} />
        </svg>
    );
};

