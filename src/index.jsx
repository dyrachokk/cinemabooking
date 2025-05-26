import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // <-- Імпорт
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>       {/* <-- Огортаємо App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
