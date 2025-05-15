import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 Must import from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root')); // 👈 React 18 syntax
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
