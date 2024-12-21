import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import './Homepage.css'; 
import logoImage from '../../static/images/logo.png';

const HomePage = React.memo(({ title, setCurrPage, toggleLoginModal }) => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 850);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 665);

    // Function to handle creating a new user
    const handleCreateUser = () => setCurrPage('newUser');

    // Function to handle login
    const handleLogin = () => toggleLoginModal();

    // Handle window resize to toggle mobile view and small screen view
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 850);
            setIsSmallScreen(window.innerWidth <= 665);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <main aria-label="Home Page Main Content" className="home-page">
            <Helmet>
                <title>{title || 'Home Page'}</title>
                <meta name="description" content="Welcome to the Home Page of our Valet Trash App" />
            </Helmet>
            <header className="home-page-header">
                <img src={logoImage} alt="JunkDog Logo" className="logo" />
                <nav>
                    <ul className="navigation">
                        <li><button className="nav-button" onClick={() => window.location.href = '#home'}>Home</button></li>
                        <li><button className="nav-button" onClick={() => window.location.href = '#about'}>About</button></li>
                        <li><button className="nav-button" onClick={() => window.location.href = '#services'}>Services</button></li>
                        <li><button className="nav-button" onClick={() => window.location.href = '#contact'}>Contact</button></li>
                    </ul>
                </nav>
            </header>
            <section className="intro">
                <h1>{title}</h1>
                <p>Welcome to JunkDog Valet Trash Services! We provide professional and efficient trash removal services, your reliable partner in waste management solutions.</p>
                <button onClick={handleCreateUser}>Create New User</button>
                <button onClick={handleLogin}>Login</button>
            </section>
            {/* Additional sections can be added here */}
        </main>
    );
});

HomePage.propTypes = {
    title: PropTypes.string,
    setCurrPage: PropTypes.func.isRequired,
    toggleLoginModal: PropTypes.func.isRequired
};

export default HomePage;
