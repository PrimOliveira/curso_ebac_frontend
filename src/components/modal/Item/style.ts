import { styled } from "styled-components";
import { colors, fonts } from "../../../global/styles/main.vars";

export const ModalCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const ModalPrato = styled.div`
    padding: 32px;
    background-color: ${colors.background.quaternary};
    width: 1024px;
    height: 344px;
`

export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    & img {
        width:280px;
        height: 280px;
        object-fit: cover;
        object-position: center center;
    }
`

export const WrapperContent = styled.section`
    height: 100%;
    margin-left: 24px;
    color: ${colors.fonts.secondary};

    & button {
        padding: 2px;
        width: 218px;
        height: 24px;
        border: none;
        background: ${colors.background.secondary};
        font-weight: 500;
        font-size: ${fonts.small};
        color: ${colors.fonts.primary};
        cursor: pointer;
    }
`
export const Texts = styled.div`
    height: 80%;
    
    margin-bottom: 16px;
    & h4 {
        font-size: 18px;
        margin-bottom: 16px;
    }
    & section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80%;
        font-weight: 300;
        line-height: 22px; 
        font-size: 14px;
    }
`