import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  certificationId: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.certificationId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.certificationId = null; 
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
