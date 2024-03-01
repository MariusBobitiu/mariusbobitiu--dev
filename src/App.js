import React from 'react';
import {Provider} from 'react-redux';
import {store} from './Store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Expertise from './pages/Expertise';
import Policies from './pages/Policies';
import DataRequestForm from './pages/DataRequestForm';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/expertise' element={ <Expertise /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/policies' element={ <Policies /> } />
        <Route path='/policies/dataRequestForm' element={ <DataRequestForm /> } />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
