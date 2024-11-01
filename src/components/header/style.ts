import { styled } from "styled-components";
import urlSvg from '../../assets/img/Vector.svg'
import { Wrapper, WrapperFlexCenter } from "../../global/styles/main.styles";
import { colors, fonts } from "../../global/styles/main.vars";

type Props = {
    src?: string
}
export const HeaderWrapper = styled(Wrapper)<Props>`
    position: relative;
    height: 384px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${urlSvg});
      z-index: 0;
      background-size: contain;
    }
`

export const HomeHeader = styled(WrapperFlexCenter)`
    height: 80%;
    justify-content: space-between;
    & img {
        width: 125px;
    }

    & p {        
        text-align: center;
        font-size: ${fonts.big};
        font-weight: 900;
        color: ${colors.fonts.primary};
        inline-size: 85%;
        overflow-wrap: break-word;
    }

`