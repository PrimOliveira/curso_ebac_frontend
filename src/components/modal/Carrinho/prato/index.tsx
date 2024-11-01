import * as Pi from 'react-icons/pi'
import * as S from "./style"
import type { Prato } from "../../../../global/utils/Models/prato"
import { useDispatch } from 'react-redux'
import { remove } from '../../../../store/slices/CarrinhoManager'


const Prato = ({picture, nome, price, id}:Omit<Prato, 'descricao'>) => {
    const dispatch = useDispatch()
    const executeRemoveAction =() => {
        dispatch(remove({
            nome: nome,
            id: id
        }))
    }
    return (
    <S.PratoContainer>
        <img src={picture} alt={nome} />
        <section>
            <h4>{nome}</h4>
            <p> R$ {price}</p>
        </section>
        <S.RemovePrato onClick={() => executeRemoveAction()}>
            <Pi.PiTrash />
        </S.RemovePrato>
    </S.PratoContainer>
    )
    
}

export default Prato