import React from 'react';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
    return (
        <main aria-label="Contact Page Main Content">
            <Helmet>
                <title>Contact Us</title>
                <meta name="description" content="Get in touch with JunkDog Valet Trash Services." />
            </Helmet>
            <h1>Contact Us</h1>
            <p>Have questions? Reach out to us and we'll be happy to assist you.</p>
            <address>
                <strong>Email:</strong> support@junkdogvalet.com<br />
                <strong>Phone:</strong> (555) 123-4567
            </address>
        </main>
    );
};

export default ContactPage;