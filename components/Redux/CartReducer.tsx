import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as any[],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.push(product);
    },
    removeFromCart: (state, action) => {
        const productId = action.payload;
        return state.filter((item) => item.id !== productId);
      },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;