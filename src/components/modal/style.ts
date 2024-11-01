import { styled } from "styled-components";
import { colors } from "../../global/styles/main.vars";


export const ModalSections = styled.section`
    width: 80%;
    height: 100%;
    margin: 0 auto;
`

export const CloseModalButton = styled.button`
    position: absolute;
    top: 4px;
    right: 4px;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    border:none;
    & svg {
        font-size: 22px;
        color: ${colors.fonts.secondary};        
    }
`