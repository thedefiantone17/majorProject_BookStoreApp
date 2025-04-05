import { configureStore } from '@reduxjs/toolkit'
import CartReducer from "../redux/features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
})