import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage'; // Import AboutPage
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Page from './Page'; 

/**
 * The main component of the application.
 * The root component that sets up the application’s routing, context providers (if any), and the general layout.
 * @returns {JSX.Element} The rendered component.
 */
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
                    element={
                        <Page
                            title="Welcome to JunkDog Valet Trash Services"
                            setCurrPage={setCurrPage}
                            toggleLoginModal={toggleLoginModal}
                        />
                    }
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default App;