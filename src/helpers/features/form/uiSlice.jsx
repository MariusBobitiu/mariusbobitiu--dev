import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   loaderVisible: false,
};

export const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      showLoader: (state) => {
         state.loaderVisible = true;
      },
      hideLoader: (state) => {
         state.loaderVisible = false;
      },
   },
});

export const { showLoader, hideLoader } = uiSlice.actions;

export default uiSlice.reducer;