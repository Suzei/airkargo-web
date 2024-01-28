import styled, { createGlobalStyle, css } from "styled-components";

interface ThreeDots {
    color?: string;
    size?: string;

}

const GlobalStyle = createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Poppins;

    }

    :focus {
        outline: 0;
    }
    

`

export const ThreeDots = styled.span<ThreeDots>`
        font-weight: 400;
        color: ${props => props.color ? props.color : css`white`};
        font-size: ${props => props.size ? css`${props.size}rem` : css`1rem`};
`

export default GlobalStyle