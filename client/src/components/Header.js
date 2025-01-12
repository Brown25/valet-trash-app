import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Represents the Header static component.
 * The Header component represents a reusable navigation bar displayed across all pages of your application.
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => {
    return (
        <header className="header">  {/* Pass props to the Header component
            •A <header> element contains a <nav> element for semantic clarity.
	       •inside the <nav>, an unordered list (<ul>) organizes the links for easy styling. */}
            <nav>
                <ul className="header-navigation"> {
                /* A <ul> is used to create a navigation menu with clickable links.
                Contains <Link> components from react-router-dom to enable client-side navigation without full-page reloads.
	            Each <Link> defines a to attribute that corresponds to a route in the app.*/}
                    <li><Link className="header-link" to="/">Home</Link></li>
                    <li><Link className="header-link" to="/about">About</Link></li>
                    <li><Link className="header-link" to="/services">Services</Link></li>
                    <li><Link className="header-link" to="/contact">Contact</Link></li> {/* Clicking a link in Header updates the URL. 
                    The router (via Routes) checks the new URL, matches the appropriate route, and renders the corresponding component. */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;