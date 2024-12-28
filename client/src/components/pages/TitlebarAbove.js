/**
 * @description This component provides navigation and login functionality.
 * It includes buttons to navigate to the home and game pages, and a login dropdown.
 */
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useServerSettings } from '../hooks/useServerSettings';
import TitlebarAbove from './TitlebarAbove';
import Home from './pages/Home';
import About from './pages/Aboutpage';
import Services from './pages/Servicespage';
import ContactPage from './ContactPage';

export default function Page(props) {
    const [serverSettings, processServerConfigSuccess] = useServerSettings(props.showMessage);
    const [currPage, setCurrPage] = useState("home");

    const pageProps = {
        showMessage: props.showMessage,
        serverSettings: serverSettings,
        processServerConfigSuccess: processServerConfigSuccess,
        currPage: currPage,
        setCurrPage: setCurrPage
    };

    const whichPage = () => {
        switch (currPage) {
            case "home":
                return <Home {...pageProps} />;
            case "about":
                return <About {...pageProps} />;
            case "services":
                return <Services {...pageProps} />;
            case "contact":
                return <ContactPage {...pageProps} />;
            default:
                return <Home {...pageProps} />;
        }
    };

    return (
        <div>
            <TitlebarAbove {...pageProps} />
            {whichPage()}
        </div>
    );
}