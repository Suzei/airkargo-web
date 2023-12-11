import styled from "styled-components";
import CloudedBackground from '../../assets/cloud-background.png'


export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 20px 35px;
    background: rgba(9, 3, 31, 0.95);
    min-height: 420px;
    
    img {
        max-height: 70px;
    }
`

export const FooterContacts = styled.div`
    display: grid;
    margin-top: 30px;
    padding: 1rem 0;
    grid-template-columns: 1fr 1fr;
    border-bottom: 3px solid #1E0F56;
    border-top: 3px solid #1E0F56;
    text-align: justify;
    gap: 1.625rem;
    font-weight: 400;
    font-size: 0.75rem;
    color: #D3C8FF;
`

export const FooterSocials = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 21px;
    margin-left: 57px;
    span {
        font-size: 0.75rem;  
        color: #D3C8FF;  
    }
`

export const FooterInc = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 30px;
color: #6E53DD;
    span {
        font-size: 8px;
        &:nth-child(1) {
            font-size: 10px;
        }
    }
`