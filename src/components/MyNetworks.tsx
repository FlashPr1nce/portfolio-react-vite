import {Icon} from "./Icon.tsx";
import styled from "styled-components";
import {theme} from "../styles/Theme.ts";
import 'animate.css';

type NetworksPropsType = {
    id: number
    imgSvgId: string
    linkNetworks: string
}

export const MyNetworks = () => {

    const networks:NetworksPropsType[] = [
        {
            id: 1,
            imgSvgId: 'instagram',
            linkNetworks: 'https://www.instagram.com/masakhiros/'
        },
        {
            id: 2,
            imgSvgId: 'telegram',
            linkNetworks: 'https://t.me/masakhiros'
        },
        {
            id: 3,
            imgSvgId: 'vkontakte',
            linkNetworks: 'https://vk.com/masakhiros'
        },
        {
            id: 4,
            imgSvgId: 'linkedin',
            linkNetworks: 'https://www.linkedin.com/in/%D0%B0%D1%80%D1%82%D1%83%D1%80-%D0%B7%D0%B0%D0%BB%D1%8F%D1%82%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2-678b26217/'
        }
    ]

    return (
            <NetworksList>
                    {
                        networks.map((network) => (
                            <li key={network.id} className="animate__animated animate__bounceInLeft">
                                <a href={network.linkNetworks} target="_blank" rel="noopener noreferrer">
                                        <Icon iconId={network.imgSvgId} width={'50px'} height={'50px'} viewBox={'0 0 32 25'}/>
                                </a>
                            </li>
                        ))
                    }
            </NetworksList>
    )
}




const NetworksList = styled.ul`
    display: flex;
    gap: 16px;
    
    a { 
        display: block;
        transition: ${theme.animations.transition};

        &:hover {
            transform: translateY(-4px);
        }
        
        
   
    }

    
`;

