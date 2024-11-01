import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurant } from '../global/utils/Models/restaurants'
import { Prato } from '../global/utils/Models/prato';

export type Product = {
  id: string,
  price: number
}
type PurchaseType = {
  products: Product[],
  delivery:{
    receiver: string,
    address: {
      description: string,
      city: string,
      zipCode: string,
      number: number,
      complement: string,
    }},
    payment: {
      card: {
        name: string, 
        number: string, 
        code: number,
        expires: {
          month: number,
          year: number
        }
      }
    }
}

const servicesEndpoint = createApi({
    reducerPath: 'servicesEndpoint',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://my-fake-api-v1.vercel.app/' }),
    endpoints: (builder) => ({
      getAllRestaurants: builder.query<Restaurant[], void>({
        query: () => `restaurantes`,
      }),
      getCardapioByRestaurante: builder.query<Prato[], string>({
        query: (restauranteid) => `cardapio?id=${restauranteid}`,
      }),
      getRestauranteById: builder.query<Restaurant[], string>({
        query: (restauranteid) => `restaurantes?id=${restauranteid}`,
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sendPurchaseOrder: builder.mutation<any, PurchaseType>({
        query: (body) => ({
          url: `https://fake-api-tau.vercel.app/api/efood/checkout`,
          method: 'POST',
          body
        })
      })
    }),
})


export default servicesEndpoint;
export const { 
  useGetAllRestaurantsQuery, 
  useGetCardapioByRestauranteQuery, 
  useGetRestauranteByIdQuery,
  useSendPurchaseOrderMutation } = servicesEndpoint