import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateForm: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        },
        resetForm: () => {
            // Reset state to initial state
            return initialState;
          },
    }
});

export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
