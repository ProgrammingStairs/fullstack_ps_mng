import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class MyComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            name : "Andrew Anderson"
        }
    }
    render(){
        return(<>
            {console.log(this.state.name)}
        </>);
    }
}
createRoot(document.getElementById("root")).render(<MyComponent/>);
reportWebVitals();
