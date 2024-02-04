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
        }
    }
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
