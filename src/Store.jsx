import {configureStore} from '@reduxjs/toolkit';
import navbarReducer from './helpers/features/navbar/navbarSlice';
import formReducer from './helpers/features/form/formSlice';
import projectsReducer from './helpers/features/projects/projectSlice';
import modalReducer from './helpers/features/certifications/modalSlice';
import uiReducer from './helpers/features/form/uiSlice'

export const store = configureStore({
   reducer: {
      navbar: navbarReducer,
      form: formReducer,
      projects: projectsReducer,
      modal: modalReducer,
      ui: uiReducer,
   }
})

export default store;