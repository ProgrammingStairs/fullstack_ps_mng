import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name
        }
    }
    render(){
        return(<>
            {console.log(this.state.name)}
        </>);
    }
}
createRoot(document.getElementById("root")).render(<MyComponent name="Andrew Andy Anderson"/>);
reportWebVitals();
