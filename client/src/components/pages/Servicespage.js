import React from 'react';
import { Helmet } from 'react-helmet';
import holdtrashImage from '../../static/images/holdingtrash.png';


const ServicesPage = () => {
    return (
        <div>
            <h1>Service Steps</h1>
            <header className="home-page-header">
                <img 
                    src={holdtrashImage} 
                    alt="Holding Trash" 
                    style={{ width: '300px', height: 'auto', border: 'none' }} 
                />
            </header>
            <section className="services-section">
                <article>
                    <h2>Enroll in Our Service</h2>
                    <p>
                        Property managers can enroll in our service by contacting us directly, 
                        requesting a quote, or scheduling an in-person consultation to discuss your specific needs.
                    </p>
                </article>
                <article>
                    <h2>Setup Service Schedule</h2>
                    <p>
                        Choose a flexible service schedule that fits your needs, with options from 5 to 7 days per week. 
                        You can also select your preferred collection time window.
                    </p>
                </article>
                <article>
                    <h2>Prepare for Trash Pickup</h2>
                    <p>
                        On scheduled days, residents place their trash bags outside their doors before the designated 
                        collection time. Our typical collection window is from 7:00 pm to 10:00 pm but can be customized to suit your community.
                    </p>
                </article>
                <article>
                    <h2>Valet Pick-Up</h2>
                    <p>
                        Our professional valet team collects the trash directly from residents' doorstep using tote bags 
                        and collection carts. We offer flexible collection times to ensure a seamless and convenient service.
                    </p>
                </article>
                <article>
                    <h2>Eco-Friendly Disposal</h2>
                    <p>
                        We responsibly transport the collected trash to your complexs's compactor or designated garbage disposal area, 
                        adhering to eco-friendly practices.
                    </p>
                </article>
            </section>
        </div>
    );
};

export default ServicesPage;

