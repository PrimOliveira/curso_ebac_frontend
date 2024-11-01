import Logo from '../../assets/img/logo.svg'
import * as S from "./style"

const Header = () => {
    return (
        <S.HeaderWrapper>
            <S.HomeHeader>
                <img src={Logo}/>
                <p>Viva experiências gastronômicas no conforto da sua casa</p>
            </S.HomeHeader>
        </S.HeaderWrapper>
    )
}
export default Header