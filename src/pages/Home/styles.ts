import styled, { css } from "styled-components";
import HeroBackground from '../../assets/hero.png'
import { Button } from "../../components/Button";


export const HomeContainer = styled.div`
    button {
        font-size: 1.3rem;
        margin-top: 80px;
;
    }
`

export const HeroContainer = styled.div`
    display: grid;
    flex-direction: column;
    align-items: center;
    background: ${css`url(${HeroBackground})`} center no-repeat;
    background-attachment: fixed;
    image-rendering: optimizeQuality;
    background-size: cover;
    margin: 0 auto;
    min-height: 563px;
    color: white;

    span {
        font-weight: 400;

    }

    h2 {
        font-weight: 400;
    }
`

export const HeroPhrase = styled.div`
text-align: center;

    @media (min-width: 600px) {
        padding: 0 0 0 167px;
        text-align: left;
    }
`

export const Cards = styled.div`
display: grid;
justify-content: center;
    text-align: center;
    gap: 20px;
    margin-top: 40px;
`

export const CardContainer = styled.div`
    display: grid;
    margin-top: 80px;
    gap: 50px;
    grid-template-columns: repeat(2, 386px);

    @media (max-width: 880px) {
        grid-template-columns: 228px;
    }
`

export const QuotationButton = styled(Button)`
    font-size: 2.25rem;
    margin-top: 80px;
    padding: 20px;
    
`