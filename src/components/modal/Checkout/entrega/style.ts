import styled from "styled-components"
import { colors } from "../../../../global/styles/main.vars"
import { CheckoutContainer } from "../style";

export const EntregaContainer = styled(CheckoutContainer)``;

export const Row = styled.div`
 width: 100%;
 margin: 8px 0px;
 display: flex;
 gap: 34px;
`

type InputProps = {
    propswidth?: number
}
export const InputGroup = styled.div<InputProps>`
    width: ${(props)=> (props.propswidth ? `${props.propswidth}px` : `100%`)};

    & label, & input {
        font-weight: 700;
        font-size: 14px;
    }

    & label {
        display: block;
        color: ${colors.background.secondary};
        margin-bottom: 8px;
    }
    & input {        
        background: ${colors.background.secondary};
        color: ${colors.fonts.quaternary};
        width: 100%;
        height: 32px;
        border: none;
        outline: none;
        padding: 8px;
    }
`


export const BotaoGroup = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    & button {
        background: ${colors.background.secondary};
        font-weight: 700;
        font-size: 14px;
        color: ${colors.fonts.primary};
        width: 100%;
        height: 24px;
        cursor: pointer;
        border: none;
        outline: none;
    }
`