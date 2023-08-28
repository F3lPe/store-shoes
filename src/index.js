import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Cart from './components/pages/carrinho';
import App from './App';
import Global from './styles/global'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Global/>
      <App/>
  </React.StrictMode>
);
