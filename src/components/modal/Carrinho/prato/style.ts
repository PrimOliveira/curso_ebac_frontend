import styled from "styled-components";
import { colors } from "../../../../global/styles/main.vars";

export const PratoContainer = styled.div `
    position: relative;
    width: 344px;
    height: 100px;
    background-color: ${colors.background.secondary};
    padding: 8px;
    display: flex;
    color: ${colors.fonts.primary};
    margin-bottom: 16px;

    & img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }

    & section {
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 8px;
        & h4 {
            font-size: 18px;
        }
        & p {
            font-size: 14px;
        }
    }
`

export const RemovePrato = styled.button`
    position: absolute;
    bottom: 2%;
    right: 2%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    color: ${colors.fonts.primary};
    cursor: pointer;
`