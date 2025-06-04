import React from 'react';
import {createRoot} from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent.js';
import NavbarComponent from './components/NavbarComponent.js';
import BannerComponent from './components/BannerComponent.js';

// functional component
function MainComponent(){
    return (<>
        <HeaderComponent/>
        <NavbarComponent/>
        <BannerComponent/>
    </>);
}


createRoot(document.getElementById('root')).render(<MainComponent/>);