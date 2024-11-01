import { configureStore } from '@reduxjs/toolkit'
import servicesEndpoint from '../services/api'
import ModalSlice from './slices/ModelManager'
import CarrinhoSlice from './slices/CarrinhoManager'

export const store = configureStore({
  reducer: {
    [servicesEndpoint.reducerPath]: servicesEndpoint.reducer,
    modalManager: ModalSlice.reducer,
    carrinhoManager: CarrinhoSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(servicesEndpoint.middleware),
})

export type RootState = ReturnType<typeof store.getState>
