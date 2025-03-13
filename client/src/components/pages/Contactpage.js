import React from 'react';
import { Helmet } from 'react-helmet';
import '../../static/styles/Header.css';
import '../../static/styles/contact.css'; // Import the contact.css file
import logoImage from '../../static/images/logo.png';

const ContactPage = () => {
    return (
        <main aria-label="Contact Page Main Content">
            <Helmet>
                <title>Contact Us</title>
                <meta name="description" content="Get in touch with JunkDog Valet Trash Services." />
            </Helmet>
            <header className="home-page-header">
                <img src={logoImage} height="200px" width="40px" alt="JunkDog Logo" className="logo" />
                <h1>Contact Us</h1>
                <h4>Have questions? Reach out to us and we'll be happy to assist you.</h4>
                <address className="contact-ourcompany">
                <div>    
                    <strong>Email:</strong> support@junkdogvalet.com<br />
                    <strong>Phone:</strong> (555) 123-4567<br />
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                            <br/>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" />
                            <br/>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4"></textarea>
                            <br/>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </address>
            </header>
        </main>
    );
};

export default ContactPage;