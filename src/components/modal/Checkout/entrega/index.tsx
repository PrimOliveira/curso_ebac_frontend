import React from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'
import { OpenModal } from '../../../../store/slices/ModelManager'
import { EnumAcoes } from '../../../../global/utils/Enum'
import { Field, FormikContextType, FormikErrors, FormikTouched, useFormikContext } from 'formik'
import { FormikValues } from '..'

const ModalEntrega = () => {
    const dispatch = useDispatch()

    const nextStep = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(OpenModal(EnumAcoes.ACAO_PAYMENT))
    }

    const {errors}: FormikContextType<FormikErrors<FormikValues>> = useFormikContext()
    const {touched}: FormikContextType<FormikTouched<FormikValues>> = useFormikContext()
    
    
    const getErroMessage = (fieldname: string, message?:string) => {
        const isTouched = fieldname in touched
        const isErro    = fieldname in errors

        if(isTouched && isErro) return message
        return ''
    }
    return (
        <S.EntregaContainer>
            <h2>Entrega</h2>

            <S.Row>
                <S.InputGroup>
                    <label htmlFor="delivery_fullname">Quem irá receber</label>
                    <Field 
                    placeholder='João Paulo de Souza' 
                    name='delivery_fullname'/>
                    <small>{getErroMessage('delivery_fullname', errors.delivery_fullname)}</small>
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <label htmlFor='delivery_address'>Endereço</label>
                    <Field name='delivery_address'/>
                    <small>{getErroMessage('delivery_address', errors.delivery_address)}</small>
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <label htmlFor='delivery_city'>Cidade</label>
                    <Field name='delivery_city'/>
                    <small>{getErroMessage('delivery_city', errors.delivery_address)}</small>
                </S.InputGroup>
            </S.Row>

            <S.Row>
                <S.InputGroup propswidth={155}>
                        <label htmlFor='delivery_zip'>CEP</label>
                        <Field name='delivery_zip'/>
                        <small>{getErroMessage('delivery_zip', errors.delivery_zip)}</small>
                </S.InputGroup>
                <S.InputGroup propswidth={155}>
                        <label htmlFor='delivery_number'>Número</label>
                        <Field name='delivery_number' type='number'/>
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <label htmlFor='delivery_observe'>Complemento (opcional)</label>
                    <Field name='delivery_observe'/>
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.BotaoGroup>
                    <button type='button' onClick={e => nextStep(e)}>Continuar com o pagamento</button>
                    <button onClick={() => dispatch(OpenModal(EnumAcoes.ACAO_CHECKOUT_ORDER))}>Voltar para o carrinho</button>
                </S.BotaoGroup>
            </S.Row>
    </S.EntregaContainer>
    )
}

export default ModalEntrega