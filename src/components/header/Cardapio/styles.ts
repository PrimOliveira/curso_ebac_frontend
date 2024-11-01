import { styled } from "styled-components";
import { HeaderWrapper } from "../style";
import { WrapperFlexCenter } from "../../../global/styles/main.styles";
import { Link } from "react-router-dom";
import { colors, fonts } from "../../../global/styles/main.vars";

export const Header = styled(HeaderWrapper)`
    height: 186px;
`
export const HeadWrapper = styled(WrapperFlexCenter)`
    margin: 0 auto;
    max-width: 1024px;
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    z-index: 3;
`

export const RestaurantLink = styled(Link)`
    color: ${colors.fonts.primary};
    font-weight: 700;
    font-size: ${fonts.medium};
    text-decoration: none;
    cursor: pointer;
`

export const CarrinhoSection = styled.div`
    color: ${colors.fonts.primary};
    font-weight: 700;
    font-size: ${fonts.medium};
    cursor: pointer;
`
type HeroProps = {
    restaurantbg: string
}
export const HeadHero = styled.section<HeroProps>`
    position: relative;
    width: 100%;
    height: 280px;
    background: linear-gradient(45deg, rgba(0,0,0,0.50), rgba(0,0,0,0.50)), url(${(props)=>props.restaurantbg});
    background-size: cover;
`

export const HeroWrapper = styled(WrapperFlexCenter)`
    margin: 0 auto;
    max-width: 1024px;
    width: 80%;
    height: 70%;    
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: ${colors.fonts.ternary};

    & p {
        font-size: ${fonts.medium};        
        font-weight: 100;
    }

    & h3 {
        font-size: ${fonts.big};
        font-weight: 900;
        letter-spacing: 2px;
    }
`