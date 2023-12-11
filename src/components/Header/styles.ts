import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 1.3rem;
    background-color: #FFF3B1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderControls = styled.div`
display: flex;
align-items: center;
gap: 1.3rem;
`

export const HeaderQuotation = styled.form`
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 1rem 12px;

    input[type="text"] {
        max-width: 80px;
        border-radius: 16px;
        font-size: 0.5rem;
        height: 20px;
        padding: 0.5rem;
        border: 1px solid #1A1A1A;

    }

    label {
        font-size: 0.5rem;
    }

    span {
        white-space: nowrap;
        font-size: 0.5rem;
    }

    button {
        padding: 1px 10px;
        font-size: 0.5rem;
        min-width: 60px;
    }
`


export const HeaderFields = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

`

export const HeaderFieldsContainer = styled.div`
    display: flex;
    gap: 1rem;
`