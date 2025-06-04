import React from 'react';
import {createRoot} from 'react-dom/client';
import Header, { Navbar,Banner } from './demo1.jsx';

function MainComponent(){
    return (<>
        <Header/>
        <Navbar/>
        <Banner/>
    </>);
}

createRoot(document.getElementById('root')).render(<MainComponent/>);