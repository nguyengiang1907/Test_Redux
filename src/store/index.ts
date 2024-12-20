import { configureStore } from '@reduxjs/toolkit';
import breedsReducer from '../features/breedsSlice';

const store = configureStore({
  reducer: {
    breeds: breedsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;  

export default store;
