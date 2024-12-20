import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import './Homepage.css'; // Assuming you have a CSS file for styling
import ErrorBoundary from './ErrorBoundary.js'; // Importing the Error Boundary component

const HomePage = React.memo(({ title }) => {
    return (
        <ErrorBoundary>
            <main aria-label="Home Page Main Content" className="home-page">
                <Helmet>
                    <title>{title || 'Home Page'}</title>
                    <meta name="description" content="Welcome to the Home Page of our Valet Trash App" />
                </Helmet>
                <header className="home-page-header">
                    <img src="path-to-your-logo.png" alt="JunkDog Logo" className="logo" />
                    <nav>
                        <ul className="navigation">
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="intro">
                    <h1>{title}</h1>
                    <p>Welcome to the Valet Trash App, your reliable partner in waste management solutions.</p>
                </section>
                {/* Additional sections can be added here */}
            </main>
        </ErrorBoundary>
    );
});

HomePage.propTypes = {
    title: PropTypes.string
};

export default HomePage;