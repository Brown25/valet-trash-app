import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async'; 
import { useNavigate } from 'react-router-dom';
import '../../static/styles/HomePage.css'; 
import '../../static/styles/Header.css';
import '../../static/styles/Intro.css';
import '../../static/styles/Button.css';
import logoImage from '../../static/images/logo.png';

const HomePage = ({ title, toggleLoginModal }) => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 850); 
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 665);
    const navigate = useNavigate();


    const handleCreateUser = () => navigate('/signup');
    const handleLogin = () => toggleLoginModal();

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 850);
            setIsSmallScreen(window.innerWidth <= 665);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return ( //define the structure of the ui
        <main aria-label="Home Page Main Content" className="home-page"> 
            <Helmet>
                <title>{title || 'Home Page'}</title>
                <meta name="description" content="Welcome to the Home Page of our Valet Trash App" />
            </Helmet>
            <header className="home-page-header">
                <img src={logoImage} height = "400px" alt="JunkDog Logo" className="logo" />
                <nav>
                    <ul className="navigation">
                        <li><button className="nav-button" onClick={() => navigate('/')}>Home</button></li>
                        <li><button className="nav-button" onClick={() => navigate('/about')}>About</button></li>
                        <li><button className="nav-button" onClick={() => navigate('/services')}>Services</button></li>
                        <li><button className="nav-button" onClick={() => navigate('/contact')}>Contact</button></li>
                    </ul>
                </nav>
            </header>
            <section className="intro">
                <h1>{title}</h1>
                <p>Welcome to JunkDog Valet Trash Services! We provide professional and efficient trash removal services, your reliable partner in waste management solutions.</p>
                <button className="button" onClick={handleCreateUser}>Create New User</button>
                <button className="button" onClick={handleLogin}>Login</button>
            </section>
        </main>
    );
};


export default HomePage;