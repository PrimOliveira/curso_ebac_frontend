import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EnumAcoes } from "../../global/utils/Enum";
import { Prato } from "../../global/utils/Models/prato";

type ManagerProps = {
    isModalOpen: boolean,
    acaoCodigo: number,
    prato?: Prato
}

const initialState: ManagerProps= {
    isModalOpen: false,
    acaoCodigo: EnumAcoes.ACAO_CONSULTA,
    prato: {
        id: 0,
        nome: '',
        descricao: '',
        picture: '',
        price: 0.00
    }
}

const ModalSlice = createSlice({
    name: 'ModalManager',
    initialState, 
    reducers: {
        visualizarPrato: (state, action: PayloadAction<Prato>) => {
            state.isModalOpen = !state.isModalOpen
            if(action.payload) {
                state.acaoCodigo    = EnumAcoes.ACAO_CHECKIN_PRATO
                state.prato         = action.payload

            }
        },
        visualizarCarrinho: (state) => {
            state.isModalOpen = !state.isModalOpen
            state.acaoCodigo    = EnumAcoes.ACAO_CHECKOUT_ORDER
        },
        executarOrder: (state) => {
            state.acaoCodigo    = EnumAcoes.ACAO_CHECKOUT
        },
        OpenModal: (state, action: PayloadAction<number>)  => {
            state.acaoCodigo = action.payload
            if(action?.payload === EnumAcoes.ACAO_CONSULTA && state.isModalOpen !== false) {
                state.isModalOpen = !state.isModalOpen
            }
        }
    }
})

export const { OpenModal, visualizarPrato, visualizarCarrinho } = ModalSlice.actions
export default ModalSlice