import React from 'react';
import {createRoot} from 'react-dom/client';

// class component
class HeaderComponent extends React.Component{
    render(){
        return (<>
        <h1>Header Component..!!</h1>
        <p>This is an example of Header Component</p>
    </>)
    };
}
class NavbarComponent extends React.Component{
    render(){
        return (<>
        <h1>Navbar Component</h1>
        <p>This is an example of Navbar Component</p>
    </>)
    };
}
class BannerComponent extends React.Component{
    render(){
        return (<>
        <h1>Banner Component</h1>
        <p>This is an example of Banner Component</p>
    </>)
    };
}
class MainComponent extends React.Component{
    render(){
        return (<>
        <HeaderComponent/>
        <NavbarComponent/>
        <BannerComponent/>
    </>)
    };
}

createRoot(document.getElementById('root')).render(<MainComponent/>);