import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    Products: [] as any[],
    isLoading: true,
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      try  {
        const res = await axios('https://dummyjson.com/products')
        const data = await res.data.products
        return data
      } catch (error) {
        throw new Error('Unable data');
      }
      
    }
    
)

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {          
          state.isLoading = false;
          state.Products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state) => {
          state.isLoading = false;
        });
    },
  });
  
  export default productSlice.reducer;