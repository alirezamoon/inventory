import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { products } from '../../data'

const initialState = {
  products: products,
  product: {},
  searchedProducts: [],
  searchTerm: '',
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
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },
    editProduct: (state, action) => {
      const products = state.products.filter(
        (product) => product.id !== action.payload?.id
      )
      state.products = [...products, action.payload]
    },
    editSingleProduct: (state, action) => {
      state.product = action.payload
    },
    searchedProducts: (state, action) => {
      state.searchedProducts = state.products.filter((product) =>
        product.name.toLowerCase().includes(action.payload?.toLowerCase())
      )
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
  },
})

export const {
  addProduct,
  getOneProduct,
  deleteProduct,
  editProduct,
  editSingleProduct,
  searchedProducts,
  changeSearchTerm,
} = productsSlice.actions
export default productsSlice.reducer
