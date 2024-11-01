import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../../assets/img/logo.svg'
import { Container } from '../../../global/styles/main.styles'
import { Restaurant } from '../../../global/utils/Models/restaurants'
import * as S from './styles'
import { RootState } from '../../../store'
import { visualizarCarrinho } from '../../../store/slices/ModelManager'

type RestaurantProps = {
    restaurante?: Restaurant[]
}

const HeaderCardapio = ({restaurante}:RestaurantProps) => {   
    const dispatch = useDispatch() 
    const { carrinho } = useSelector((state:RootState) => state.carrinhoManager)

    const ShowModal = () => {
        dispatch(visualizarCarrinho())
    }
    return (
        <Container>
            <S.Header>
                <S.HeadWrapper>
                    <S.RestaurantLink to='/'>Restaurantes</S.RestaurantLink>
                    <img src={Logo}/>

                    <S.CarrinhoSection>
                        <a onClick={() => ShowModal()}> <span>{carrinho.length}</span> produto&#40;s&#41; no carrinho</a>
                    </S.CarrinhoSection>
                </S.HeadWrapper>
            </S.Header>
            {
                restaurante?.map((row:Restaurant) => (
            <S.HeadHero key={row.nome} restaurantbg={row.urlPortada}>
                <S.HeroWrapper>

                    <p>{row.categories}</p>
                    <h3>{row.nome}</h3>
                </S.HeroWrapper>
            </S.HeadHero>
                ))
            }
            
        </Container>
    )
}

export default HeaderCardapio;