import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // Main App component
import './static/styles/global.scss'; // Global styles

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root DOM element
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);