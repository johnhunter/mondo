import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.module.css';

const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
