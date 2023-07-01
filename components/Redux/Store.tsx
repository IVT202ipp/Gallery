import { configureStore } from '@reduxjs/toolkit';
import imageSlice from './imageSlice';

export const store = configureStore({
  reducer: {
    img: imageSlice,
  },
});
