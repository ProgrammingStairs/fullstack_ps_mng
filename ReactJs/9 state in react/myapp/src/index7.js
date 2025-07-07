import React from 'react';
import {createRoot} from 'react-dom/client';

class MyClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            title : "CountingTitle"
        }
    }
    increment(){
        this.setState({count:this.state.count+1});
    }
    decrement = ()=>{
        this.setState({count:this.state.count-1});
    }
    // reset = (value)=>{
    //     this.setState({count:value});
    // }
    reset = ()=>{
        this.setState({count:0});
    }
    changeTitle = ()=>{
        this.setState({title:"CountTitle"});
    }
    render(){
        return(<>
            <h1>{this.state.title} : {this.state.count}</h1>
            <button onClick={()=>{this.increment()}}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            {/* <button onClick={()=>{this.reset(0)}}>Reset</button> */}
            <button onClick={()=>{this.reset()}}>Reset</button>
            <button onClick={this.changeTitle}>Change Title</button>
        </>);
    }
}
createRoot(document.getElementById("root")).render(<MyClassComponent/>);