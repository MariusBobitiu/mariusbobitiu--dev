import React from 'react';
import {Provider} from 'react-redux';
import {store} from './Store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Expertise from './pages/Expertise';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <Main /> } />
        <Route path='/expertise' exact element={ <Expertise /> } />
        <Route path='/projects' exact element={ <Projects /> } />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
