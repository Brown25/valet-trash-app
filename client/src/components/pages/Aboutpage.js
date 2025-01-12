import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
    return (
        <main aria-label="About Page Main Content">
            <Helmet>
                <title>About Us</title>
                <meta name="description" content="Learn more about JunkDog Valet Trash Services." />
            </Helmet>
            <h1>About Us</h1>
            <p>At JunkDog Valet Trash Services, we are committed to providing exceptional waste management solutions to our clients 24/7 !</p>
        </main>
    );
};

export default AboutPage;