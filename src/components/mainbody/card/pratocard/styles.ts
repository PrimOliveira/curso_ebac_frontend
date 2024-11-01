import { styled } from "styled-components";
import { colors, fonts } from "../../../../global/styles/main.vars";


export const Cardcontainer = styled.div`
    background: #E66767;
    padding: 8px;
    display: grid;
    grid-template-rows: 167px 131px;
`

export const HeadSection = styled.div`
    height: 167px;
    overflow: hidden;
    & img {
        width: 100%;
    }
`

export const BodySection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 8px;
    font-size: ${fonts.small};
    color: ${colors.fonts.secondary};
    height: 147px;

    & h3 {
        padding-top: 10px;
    }
    & p {
        font-size: ${fonts.small};
        margin: 5px 0px;
        min-height: 85px;
    }

    & button {
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