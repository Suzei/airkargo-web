import styled, { css } from "styled-components";

interface ButtonContainerProps {
    type: 'primary' | 'secondary'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    padding: 6px;
    font-size: 0.5rem;
    border-radius: 16px;
    border: 0;
    min-height: 1.7rem;
    font-weight: 500;

    ${(props => props.type === 'primary'
        ? css`
            border: 1px solid #100636;
            color: #100636;
            background: none;
        `
        : css`
            background-color: #321E80; 
            color: #FFF3B1;
            `
    )}
`