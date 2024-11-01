import {ModalContainer} from '../../global/styles/main.styles'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { EnumAcoes } from '../../global/utils/Enum';
import { ModalItem } from './Item';
import { ModalSections } from './style';
import ModalCarrinho from './Carrinho';
import { OpenModal } from '../../store/slices/ModelManager';
import React from 'react';
import ModalCheckout from './Checkout';

const Modal = () => {
    const dispatch = useDispatch()
    
    const {isModalOpen, acaoCodigo} = useSelector((state: RootState) => state.modalManager)

    const onCloseModal = (e: React.SyntheticEvent<EventTarget>) => {
        const {target} = e

        if((target as HTMLElement).ariaModal != null) {
            dispatch(OpenModal(EnumAcoes.ACAO_CONSULTA))
        }
    }
    return (
        <ModalContainer isvisible={isModalOpen}>
            <ModalSections aria-modal={true} onClick={(e) => onCloseModal(e)}>
                
                {acaoCodigo === EnumAcoes.ACAO_CHECKIN_PRATO && (<ModalItem />)}

                {acaoCodigo === EnumAcoes.ACAO_CHECKOUT_ORDER && (<ModalCarrinho />)}

                {acaoCodigo === EnumAcoes.ACAO_CHECKOUT || acaoCodigo === EnumAcoes.ACAO_PAYMENT ?(<ModalCheckout />):''}

                {
                    acaoCodigo === EnumAcoes.ACAO_CHECKOUT ||
                    acaoCodigo === EnumAcoes.ACAO_PAYMENT  ||
                    acaoCodigo === EnumAcoes.ACAO_SUCESS ? (<ModalCheckout />): ''
                }
            </ModalSections>            
        </ModalContainer>
    )
}

export default Modal;