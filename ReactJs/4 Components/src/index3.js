import React from 'react';
import {createRoot} from 'react-dom/client';

// functional component
function HeaderComponent(){
    return (<>
        <h1>Header Component</h1>
        <p>This is an example of Header Component</p>
    </>);
}
function NavbarComponent(){
    return (<>
        <h1>Navbar Component</h1>
        <p>This is an example of Navbar Component</p>
    </>);
}
function BannerComponent(){
    return (<>
        <h1>Banner Component</h1>
        <p>This is an example of Banner Component</p>
    </>);
}
function MainComponent(){
    return (<>
        <HeaderComponent/>
        <NavbarComponent/>
        <BannerComponent/>
    </>);
}


createRoot(document.getElementById('root')).render(<MainComponent/>);