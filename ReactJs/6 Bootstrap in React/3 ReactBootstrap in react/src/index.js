import React from 'react'
import {createRoot} from 'react-dom/client';
import NavbarComponent from './components/NavbarComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SliderComponent from './components/SliderComponent.js';
/*
    Breaking change : needs to remove type="module" from package.json
*/
function MainComponent(){
    return (<>
        <NavbarComponent/>
        <SliderComponent/>
    </>);
}

createRoot(document.getElementById("root")).render(<MainComponent/>);