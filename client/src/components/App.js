import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/Servicespage';
import ContactPage from './pages/Contactpage';
import SignupPage from './pages/SignupPage';



/**
 * 
The App component acts as the main entry point for the application, handling:
		The integration of the Header component.
		The configuration of routes using react-router-dom.

Key Features:
	1.	Router and Routing:
	•	Wraps the app with routing functionality via <Routes> and <Route> components from react-router-dom.
	•	Routes determine which component to render based on the current URL.
	2.	Dynamic Props:
	•	Passes dynamic props like title and toggleLoginModal to certain components (e.g., HomePage).
	3.	Page Rendering:
	•	Each <Route> defines a path (URL) and the element (component) to render when the path matches.
	4.	Header Integration:
	•	The Header is included above the <Routes> component, ensuring it’s visible on every page.

    * @returns {JSX.Element} The rendered App component.
 */
const App = () => {
    //const setCurrPage = (page) => console.log(`Navigating to page: ${page}`);
    const toggleLoginModal = () => console.log('Login modal toggled');

    return (
        <>
            <Header /> {/* Header is rendered above <Routes>, ensuring it appears on all pages. */}
            <Routes> {/* The <Routes> component wraps all <Route> components to enable routing functionality.
            	        Based on the current URL, the Routes component renders the corresponding route. */}
                <Route path="/" element={<HomePage title="Home" toggleLoginModal={toggleLoginModal} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </>
    ); 
};

export default App;