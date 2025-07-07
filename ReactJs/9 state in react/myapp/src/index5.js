import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "Andrew Anderson"
        }
    }
    render(){
        return(<>
            <h2>{this.state.name}</h2>
            {console.log(this)}
            <button onClick={()=>{this.setState({name:"Peter Parker"})}}>Change Name</button>
        </>);
    }
}
createRoot(document.getElementById("root")).render(<MyComponent name="Andrew Andy Anderson"/>);
reportWebVitals();
