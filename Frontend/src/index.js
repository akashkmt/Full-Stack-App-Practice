import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoginContextProvider } from './Context/Login/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginContextProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </LoginContextProvider>
);

