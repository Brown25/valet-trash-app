import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import pages
import AboutPage from './pages/Aboutpage'; 
import ServicesPage from './pages/Servicespage';
import ContactPage from './pages/Contactpage';

const App = () => {
    // Snackbar functionality or any global methods
    const setCurrPage = (page) => {
        console.log(`Current page set to: ${page}`);
    };

    const toggleLoginModal = () => {
        console.log('Login modal toggled');
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage title="Welcome to JunkDog Valet Trash Services" setCurrPage={setCurrPage} toggleLoginModal={toggleLoginModal} />}
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default App;