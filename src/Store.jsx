import {configureStore} from '@reduxjs/toolkit';
import navbarReducer from './helpers/features/navbar/navbarSlice';
import formReducer from './helpers/features/form/formSlice';
import projectsReducer from './helpers/features/projects/projectSlice';
import modalReducer from './helpers/features/certifications/modalSlice';

export const store = configureStore({
   reducer: {
      navbar: navbarReducer,
      form: formReducer,
      projects: projectsReducer,
      modal: modalReducer,
   }
})

export default store;