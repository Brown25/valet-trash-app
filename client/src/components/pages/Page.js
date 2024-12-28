/*
This component determines which page to display based on the current state (currPage).
It includes a Titlebar and dynamically renders the appropriate page component 

        (Home, Game, Settings, NewUser, LoggedIn).
 */


/*
This component determines which page to display based on the current state (currPage).
It includes a Titlebar and dynamically renders the appropriate page component 
        (Home, Game, Settings, NewUser, LoggedIn).
 */
import React, { useState } from 'react';
import TitlebarAbove from './TitlebarAbove';
import Home from './pages/Home';
import About from './pages/Aboutpage';
import Services from './pages/Servicespage';
import ContactPage from './pages/Contactpage';
        
        export default function Page(props) {
            const [currPage, setCurrPage] = useState("home");
        
            const pageProps = {
                showMessage: props.showMessage,
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