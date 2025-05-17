import React from 'react';
import styled from 'styled-components';

type Props = {
    message: string;
    onClose: () => void;
    type: 'success' | 'error';
};

export const ModalMessage: React.FC<Props> = ({ message, onClose, type }) => {
    return (
        <Overlay onClick={onClose}>
            <ModalContainer onClick={e => e.stopPropagation()} type={type}>
                <p>{message}</p>
                <button onClick={onClose}>OK</button>
            </ModalContainer>
        </Overlay>
    );
};

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div<{ type: 'success' | 'error' }>`
    background-color: white;
    padding: 20px 30px;
    border-radius: 10px;
    min-width: 300px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border: 2px solid ${props => (props.type === 'success' ? 'green' : 'red')};

    p {
        font-size: 18px;
        color: ${props => (props.type === 'success' ? 'green' : 'red')};
        margin-bottom: 20px;
    }

    button {
        padding: 8px 16px;
        background-color: ${props => (props.type === 'success' ? 'green' : 'red')};
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }
`;
