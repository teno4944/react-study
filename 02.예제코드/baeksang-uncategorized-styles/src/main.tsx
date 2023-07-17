// reference: https://www.npmjs.com/package/react-animate-on-scroll
// https://animate.style/
import 'animate.css/animate.min.css';

// Tailwind CSS Base Utilities
import '@styles/index.css';

// Basic Styles
import '@styles/style.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
