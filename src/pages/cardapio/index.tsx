import { useParams } from "react-router-dom"
import Footer from "../../components/footer"
import HeaderCardapio from "../../components/header/Cardapio"
import Cardapiobody from "../../components/mainbody/cardapiobody"
import Modal from "../../components/modal"
import { Container } from "../../global/styles/main.styles"
import { useGetCardapioByRestauranteQuery, useGetRestauranteByIdQuery } from "../../services/api"

const Cardapio = () => {
    const {restauranteid} = useParams()
    let cardapioData;
    let restaurante;
    if(restauranteid) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        cardapioData = useGetCardapioByRestauranteQuery(restauranteid).data;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        restaurante = useGetRestauranteByIdQuery(restauranteid).data;
    }
    return (
        <>
        <Container>
            <HeaderCardapio restaurante={restaurante} />
            <Cardapiobody pratos={cardapioData}/>
            <Footer />
        </Container>
        <Modal />
        </>
    )
}
export default Cardapio