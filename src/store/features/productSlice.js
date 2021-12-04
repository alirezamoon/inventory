import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { products } from '../../data'

const initialState = {
  products: products,
  product: {},
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload]
    },
    getOneProduct: (state, action) => {
      state.product = state.products.filter(
        (product) => product.id === action.payload
      )[0]
    },
    deleteProduct: (state, action) => {
      // state.products = state.products.reduce((obj, product) => {
      //   if (product.id != action.payload) {
      //     obj.push(product)
      //   }
      //   return obj
      // }, [])
      let newProducts = state.products.filter(
        (product) => product.id !== action.payload
      )
      console.log(newProducts)
      state.products = newProducts
    },
  },
})

export const { addProduct, getOneProduct, deleteProduct } =
  productsSlice.actions
export default productsSlice.reducer
