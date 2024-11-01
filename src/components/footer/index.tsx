import Logo from '../../assets/img/logo.svg'
import * as Fa from 'react-icons/fa'
import * as S from "./styles"


const Footer = () => {
    return (
        <S.FooterWrapper>
            <S.FooterFlex>
                <img src={Logo}/>
                <S.FooterIcons>
                    <a href="#"><Fa.FaInstagram /></a>
                    <a href="#"><Fa.FaFacebook /></a>
                    <a href="#"><Fa.FaTwitter /></a>
                </S.FooterIcons>
                <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
            </S.FooterFlex>
        </S.FooterWrapper>
    )
}

export default Footer