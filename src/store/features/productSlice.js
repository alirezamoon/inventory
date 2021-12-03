import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { products } from '../../data'

const initialState = {
  products: products,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload]
    },
  },
})

export const { addProduct } = productsSlice.actions
export default productsSlice.reducer
