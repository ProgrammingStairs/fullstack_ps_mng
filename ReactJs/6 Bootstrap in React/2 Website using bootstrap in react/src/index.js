import React from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeaderComponent from './components/HeaderComponent.js';
import AccordianComponent from './components/AccordianComponent.js';
import SliderComponent from './components/SliderComponent.js';
function MyComponent(){
    return (<>
        <HeaderComponent/>
        <div className='row'> 
            <AccordianComponent/>
            <SliderComponent/>
        </div>
    </>);
} 
createRoot(document.getElementById('root')).render(<MyComponent/>);