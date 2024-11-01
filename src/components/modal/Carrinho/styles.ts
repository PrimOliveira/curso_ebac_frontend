import styled from "styled-components";
import { colors, fonts } from "../../../global/styles/main.vars";

export const ModalRight =styled.section`
    position: absolute;
    top: 0%;
    right: 0%;
    width: 360px;
    height: 100vh;
    background-color: ${colors.background.quaternary};
    padding: 32px 8px;

`


export const CarrinhoPrato = styled.div`
    min-height: 100px;
    max-height: 80vh;
    overflow: hidden auto;
`

export const CarrinhoOrder = styled.div`
    margin-top: 16px;
    min-height: 56px;

    & :first-child {
        display: flex;
        justify-content: space-between;
        color: ${colors.fonts.secondary};        
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
    }

    & button {
        margin-top: 16px;
        padding: 2px;
        width: 100%;
        height: 24px;
        border: none;
        background: ${colors.background.secondary};
        font-weight: 700;
        font-size: ${fonts.small};
        color: ${colors.fonts.primary};
        cursor: pointer;
    }
`