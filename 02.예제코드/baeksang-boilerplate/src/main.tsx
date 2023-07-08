import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Tailwind CSS Base Utilities
import '@styles/index.css';
import '@styles/test.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
