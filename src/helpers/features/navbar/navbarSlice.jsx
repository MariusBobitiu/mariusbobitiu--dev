import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   isNavbarOpen: false,
   activeSection : 'homepage'
};

export const navbarSlice = createSlice({
   name: 'navbar',
   initialState,
   reducers: {
      toggleNavbar: (state) => {
         state.isNavbarOpen = !state.isNavbarOpen;
      },
      setActiveSection: (state, action) => {
         state.activeSection = action.payload;
      },
   },
});

export const {toggleNavbar, setActiveSection} = navbarSlice.actions;

export default navbarSlice.reducer;