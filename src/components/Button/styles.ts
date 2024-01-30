import styled, { css } from "styled-components";

interface ButtonContainerProps {
    buttonType?: 'primary' | 'secondary'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    padding: 6px;
    white-space: nowrap;
    border-radius: 16px;
    border: 0;
    min-height: 1.7rem;
    font-weight: 500;

    ${(props => props.buttonType === 'primary'
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