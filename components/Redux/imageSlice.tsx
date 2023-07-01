import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    Products: [] as any[],
    isLoading: true,
    favoriteImages: [] as any[],
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
export const markAsFavorite = createAction('products/markAsFavorite', (itemId: string) => {
  return {
    payload: itemId,
  };
});

const imageSlice = createSlice({
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
        })
        .addCase(markAsFavorite, (state, action) => {
          const itemId = action.payload;
          const updatedProducts = state.Products.map((item) => {
            if (item.id === itemId) {
              return {
                ...item,
                isFavorite: !item.isFavorite,
              };
            }
            return item;
          });
          state.Products = updatedProducts;
        });
    },
  });
  
  export default imageSlice.reducer;