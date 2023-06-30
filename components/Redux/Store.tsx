import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartReducer';
import ProductsReducer from './ProductsReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: ProductsReducer,
  },
});
