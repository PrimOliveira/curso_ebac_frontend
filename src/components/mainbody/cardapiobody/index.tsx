import { Prato } from "../../../global/utils/Models/prato";
import Pratocard from "../card/pratocard";
import { MainContainer } from "../style";
import * as S from './styles'

type PropsPrato = {
    pratos?: Prato[]
}

const Cardapiobody = ({pratos}: PropsPrato) => {
    return (
        <>
        <MainContainer maxwidth="1248px">
            <S.Bodywrapper>
                {pratos?.map(row => (
                    <Pratocard 

                    key={`${row.nome}`}
                    id={row.id}
                    nome={row.nome} 
                    descricao={row.descricao} 
                    picture={row.picture}
                    price={row.price}
                    />
                ))
                }
            </S.Bodywrapper>
        </MainContainer>
        </>

        
    )
}

export default Cardapiobody;