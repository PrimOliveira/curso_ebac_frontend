import { useDispatch } from 'react-redux'
import * as S from './style'
import { OpenModal } from '../../../../store/slices/ModelManager'
import { EnumAcoes } from '../../../../global/utils/Enum'
import { reset } from '../../../../store/slices/CarrinhoManager'
import { useNavigate } from 'react-router-dom'

type Props = {
    orderId: string
}

const ModalSucesso = ({orderId}: Props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const resetApp = () => {
        dispatch(reset())
        dispatch(OpenModal(EnumAcoes.ACAO_CONSULTA))
        navigate('/');
    }
    return (
        <S.SucessoContainer>
            <h2>Pedido Realizado - {orderId}</h2>
            <S.Row>
                <S.SucessoText>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
                <br/>
                <br />
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                </S.SucessoText>
            </S.Row>
            <S.Row>
                <S.BotaoGroup>
                    <button onClick={() => resetApp()}>Concluir</button>
                </S.BotaoGroup>
            </S.Row>
        </S.SucessoContainer>
    )
}

export default ModalSucesso