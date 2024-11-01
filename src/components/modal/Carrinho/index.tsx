
import { useDispatch, useSelector } from "react-redux"
import * as S from "./styles"
import { RootState } from "../../../store"
import Prato from "./prato"
import { OpenModal } from "../../../store/slices/ModelManager"
import { EnumAcoes } from "../../../global/utils/Enum"

const ModalCarrinho = () => {
    const dispatch = useDispatch()
    const { carrinho } = useSelector((state: RootState) => state.carrinhoManager)
    
    const getValorTotal = () => {
        return carrinho.reduce((acumulator, currentRow) => {
            return acumulator += currentRow.price
        }, 0)
    }
    
    return (
        <S.ModalRight>
            <S.CarrinhoPrato>
                {carrinho.map(row => (
                    <Prato key={`${row.nome}${row.id}`} nome={row.nome} picture={row.picture} price={row.price} id={row.id}/>
                ))
                }
            </S.CarrinhoPrato>
            <S.CarrinhoOrder>
                <div>
                    <h4>Valor Total</h4>
                    <h4>{getValorTotal().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
                </div>
                <button onClick={() => dispatch(OpenModal(EnumAcoes.ACAO_CHECKOUT))}>Continuar com a entrega</button>
            </S.CarrinhoOrder>
        </S.ModalRight>
    )
}

export default ModalCarrinho