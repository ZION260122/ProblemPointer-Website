// main.jsx or main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import '@fontsource/raleway'; // Defaults to weight 400

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
