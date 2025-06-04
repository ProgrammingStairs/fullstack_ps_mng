import React from 'react';
import {createRoot} from 'react-dom/client';
import Footer,{ Banner, Header, Navbar } from './demo.jsx';

function MainComponent(){
    return (<>
        <Header/>
        <Navbar/>
        <Banner/>
        <Footer/>
    </>);
}

createRoot(document.getElementById('root')).render(<MainComponent/>);