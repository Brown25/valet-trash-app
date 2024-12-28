import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/Servicespage';
import ContactPage from './pages/Contactpage';
import SignupPage from './pages/SignupPage';

const App = () => {
    const setCurrPage = (page) => {
        console.log(`Navigating to page: ${page}`);
    };

    const toggleLoginModal = () => {
        console.log('Login modal toggled');
    };

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage setCurrPage={setCurrPage} toggleLoginModal={toggleLoginModal} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </>
    );
};

export default App;