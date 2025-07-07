import React from 'react';
import {createRoot} from 'react-dom/client';

class MyClassComponent extends React.Component{
    state = {
            count : 0,
            title : "",
            obj : {}    
    }
    handleSubmit = ()=>{
        this.setState({
            obj : {
                count : this.state.count,
                title : this.state.title
            }
        });
    }
    render(){
        return(<>
            <h2>State in ReactJs (Class Component)</h2>
            <input
                placeholder='Enter Counter Number'
                type='text'
                onChange={(event)=>{
                    this.setState({count:event.target.value})
                }}    
            /> <br/>
            <input
                placeholder='Enter Counter Title'
                type='text'
                onChange={(event)=>{
                    this.setState({title:event.target.value})
                }}    
            /><br/>
            <button onClick={this.handleSubmit}>Print Changes</button> <br/>
            {this.state.obj ? this.state.obj.count : ""}<br/>
            {this.state.obj ? this.state.obj.title : ""}<br/>
                
        </>);
    }
}
createRoot(document.getElementById("root")).render(<MyClassComponent/>);

