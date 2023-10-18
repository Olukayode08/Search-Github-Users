import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Context } from './context/Context';
import { AlertContext } from './context/AlertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <AlertContext>
          <App />
        </AlertContext>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
)
