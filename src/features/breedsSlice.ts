import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  breeds: [],
  loading: false,
  error: null,
};

const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: { setData: (state, action) => { state.breeds = action.payload } },
});

export const { setData } = breedsSlice.actions;
export default breedsSlice.reducer;
