import {createGlobalStyle, styled} from "styled-components";
import { colors, fonts } from "./main.vars";
import { Link } from "react-router-dom";


export const GlobalStyle = createGlobalStyle`
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: ${colors.background.primary};
  }
`

type ContainerProps = {
  maxwidth?: string
}
export const Container = styled.div<ContainerProps>`
    max-width: ${(props) => props.maxwidth || '100%'};
    margin: 0 auto;
`
export const Wrapper = styled.div<ContainerProps>`
    height: 300px;
    background-color: ${colors.background.secondary};
`

export const WrapperFlexCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const ButtonLink = styled(Link)`
    display: block;
    width: 82px;
    height: 26px;
    background: ${colors.background.quaternary};
    color: ${colors.fonts.secondary};
    font-weight: 700;
    border: none;
    font-size: ${fonts.small};
    cursor: pointer;
    text-decoration: none;
    line-height: 26px;
    text-align: center;
`
type ModalProps = {
  isvisible: boolean | undefined;
}
export const ModalContainer = styled.div<ModalProps>`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: ${(props) => props.isvisible ? 5 : -1}; 
  display: ${(props) => props.isvisible ? 'block': 'none'};
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
`
export const ApiMessage = styled.p`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${fonts.big};
  text-align: center;
  color: ${colors.fonts.primary};
`