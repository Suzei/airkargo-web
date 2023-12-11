import { createGlobalStyle } from "styled-components";

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

export default GlobalStyle