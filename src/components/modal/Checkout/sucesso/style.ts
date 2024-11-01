import styled from "styled-components";
import { CheckoutContainer } from "../style";
import * as Entrega from '../entrega/style'
import { colors } from "../../../../global/styles/main.vars";
export const SucessoContainer = styled(CheckoutContainer)``;

export const Row = styled(Entrega.Row)``;

export const SucessoText = styled.p `
    color: ${colors.fonts.secondary};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; 
`;
export const BotaoGroup = styled(Entrega.BotaoGroup)``;
