import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class MyComponent extends React.Component{
    state ={
        name : this.props.name
    }
    render(){
        return(<>
            {console.log(this)}
        </>);
    }
}
createRoot(document.getElementById("root")).render(<MyComponent name="andrew anderson"/>);
reportWebVitals();
