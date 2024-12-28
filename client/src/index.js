import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './components/pages/HomePage.js';

const setCurrPage = (page) => console.log(`Navigating to page: ${page}`);
const toggleLoginModal = () => console.log('Login modal toggled');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <HomePage
        title="Welcome to JunkDog Valet Trash Services"
        setCurrPage={setCurrPage}
        toggleLoginModal={toggleLoginModal}
      />
    </HelmetProvider>
  </React.StrictMode>
);