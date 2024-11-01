import styled from "styled-components";
import { colors } from "../../../global/styles/main.vars";

export const ModalRight =styled.section`
    position: absolute;
    top: 0%;
    right: 0%;
    width: 360px;
    height: 100vh;
    background-color: ${colors.background.quaternary};
    padding: 32px 8px;

    & form {
        
    }
`
export const CheckoutContainer = styled.div`
    color: ${colors.fonts.secondary};    
    & h2 {
        font-size: 16px;
        margin-bottom: 16px;
    }

`

