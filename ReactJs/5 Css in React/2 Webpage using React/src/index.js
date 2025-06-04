import React from 'react';
import {createRoot} from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent.js';
import NavbarComponent from './components/NavbarComponent.js';
import BannerComponent from './components/BannerComponent.js';
import MarqueeComponent from './components/MarqueeComponent.js';
import ContentComponent from './components/ContentComponent.js';
import BoxComponent from './components/BoxComponent.js';
import AboutComponent from './components/AboutComponent.js';
import ContactComponent from './components/ContactComponent.js';
import FooterComponent from './components/FooterComponent.js';
function MyPage(){
    return (<>
        <HeaderComponent/>
        <NavbarComponent/>
        <BannerComponent/>
        <MarqueeComponent/>
        <ContentComponent/>
        <BoxComponent/>
        <AboutComponent/>
        <ContactComponent/>
        <FooterComponent/>
    </>);
}
createRoot(document.getElementById('root')).render(<MyPage/>);