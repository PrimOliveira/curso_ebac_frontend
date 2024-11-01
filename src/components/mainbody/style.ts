import { styled } from "styled-components";
import { Container } from "../../global/styles/main.styles";

export const MainContainer = styled(Container) `

    display: flex;
    justify-content: center;
`
export const Bodywrapper = styled.div`
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 472px);
    grid-auto-rows: 398px;
    gap: 25px;
`