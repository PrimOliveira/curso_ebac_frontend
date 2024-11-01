import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Prato } from "../../global/utils/Models/prato";

type PratoState ={
    carrinho: Prato[]
}

const initialState: PratoState = {
    carrinho: []   
}

const CarrinhoSlice = createSlice({
    name: 'Carrinho',
    initialState,
    reducers: {
        add: (state, actions: PayloadAction<Prato | undefined>) => {
            if(actions.payload !== undefined) {
                state.carrinho.push(actions?.payload)
            }
        },
        remove: (state, actions: PayloadAction<Omit<Prato, 'descricao' | 'picture' | 'price'>>) => {            
            state.carrinho = state.carrinho.filter((p) => p.nome !== actions.payload.nome)            
        },
        reset: (state) => {            
            state.carrinho = []            
        }
    }
})



export const { add, remove, reset } = CarrinhoSlice.actions
export default CarrinhoSlice