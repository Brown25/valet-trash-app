import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './components/pages/HomePage.js';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
