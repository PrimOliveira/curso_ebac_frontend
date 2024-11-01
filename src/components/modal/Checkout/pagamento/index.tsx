import * as S from "./style"
import { useDispatch } from "react-redux";
import { OpenModal } from "../../../../store/slices/ModelManager";
import { EnumAcoes } from "../../../../global/utils/Enum";
import { Field, FormikContextType, FormikErrors, FormikTouched, useFormikContext } from "formik";
import { FormikValues } from "..";

type Props = {
    valorTotal: number
}

const ModalPagamento = ({valorTotal}: Props) => {

    const dispatch = useDispatch()

    const {errors}: FormikContextType<FormikErrors<FormikValues>> = useFormikContext()
    const {touched}: FormikContextType<FormikTouched<FormikValues>> = useFormikContext()

    const getErroMessage = (fieldname: string, message?:string) => {
        const isTouched = fieldname in touched
        const isErro    = fieldname in errors

        if(isTouched && isErro) return message
        return ''
    }

    return (

        <S.PagamentoContainer>
            <h2>Pagamento - Valor a pagar R$ <span>{valorTotal}</span></h2>
            <S.Row>
                <S.InputGroup>
                    <label htmlFor="paymentcard_nome">Nome no cartão</label>
                    <Field placeholder='João Paulo de Souza' name='paymentcard_nome'/>
                    <small>{getErroMessage('paymentcard_nome', errors.paymentcard_nome)}</small>
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <label htmlFor="paymentcard_number">Numero do cartão</label>
                    <Field name='paymentcard_number'/>
                    <small>{getErroMessage('paymentcard_number', errors.paymentcard_number)}</small>
                </S.InputGroup>
                <S.InputGroup propswidth={87}>
                    <label htmlFor="paymentcard_code">CVV</label>
                    <Field name='paymentcard_code' type="number"/>
                    <small>{getErroMessage('paymentcard_code', errors.paymentcard_code)}</small>
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <label htmlFor="paymentcard_expiremonth">Mês de Vencimento</label>
                    <Field name='paymentcard_expiremonth' type="number"/>
                    <small>{getErroMessage('paymentcard_code', errors.paymentcard_code)}</small>
                </S.InputGroup>
                <S.InputGroup>
                    <label htmlFor="paymentcard_expireyear">Ano de vencimento</label>
                    <Field name='paymentcard_expireyear' type="number"/>
                    <small>{getErroMessage('paymentcard_expireyear', errors.paymentcard_expireyear)}</small>
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.BotaoGroup>
                    <button type="submit">Finalizar pagamento</button>
                    <button onClick={() => dispatch(OpenModal(EnumAcoes.ACAO_CHECKOUT))}>Voltar para a edição de endereço</button>
                </S.BotaoGroup>
            </S.Row>
        </S.PagamentoContainer>
    )
}

export default ModalPagamento;