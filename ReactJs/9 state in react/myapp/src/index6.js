import React from 'react';
import {createRoot} from 'react-dom/client';

class MyClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            title : "CountingTitle"
        }
        this.increment = this.increment.bind(this);
    }
    increment(){
        this.setState({count:this.state.count+1});
    }
    render(){
        return(<>
            <h1>{this.state.title} : {this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
        </>);
    }
}
createRoot(document.getElementById("root")).render(<MyClassComponent/>);