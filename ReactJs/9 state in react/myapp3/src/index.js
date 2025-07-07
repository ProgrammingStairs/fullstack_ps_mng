import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Display from './Display.js';

class ClassComponent extends React.Component{
    state={
        userObj:{},
        userArray:[],
        index:-1
    }
    getData = (event)=>{
        const {name,value} = event.target;
        this.setState({
            userObj : {
                ...this.state.userObj,
                [name] : value
            } 
        });
    }
    updateData = (userObject)=>{
        this.setState({
            userObj : userObject.obj
        });
        this.setState({
            index : userObject.index
        });
    }
    deleteData = (index)=>{
        // {console.log("received index : ",index);}
       this.state.userArray.splice(index,1);
       this.setState({
            userArray:[...this.state.userArray]
       });
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        // console.log(this.state.userObj);
        if(this.state.index==-1){
            this.setState({
                userArray : [...this.state.userArray,this.state.userObj]
            });
        }else{
            this.state.userArray.splice(this.state.index,1);
            this.state.userArray.splice(this.state.index,0,this.state.userObj);
            this.setState({
                userArray:[...this.state.userArray]
            })
            this.setState({
                index:-1
            });
        }
        event.target.reset();
        this.setState({
            userObj : {
                username:'',
                email:'',
                password:'',
                address:''
            }
        });
    }
    render(){
    return(<>
        <center><h1>Example of State in Rect Js | Class Component</h1></center>
        <div id="outerDiv">
            <div id="leftDiv">
                <center>    
                    <h2>Fill Form Details</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        required
                        placeholder='Enter Username'
                        name='username'
                        id='username'
                        value={this.state.userObj.username ?? ''}
                        onChange={this.getData}
                    />
                    <input
                        type='email'
                        required
                        placeholder='Enter Email'
                        name='email'
                        value={this.state.userObj.email ?? ''}
                        id='email'
                        onChange={this.getData}
                    />
                    <input
                        type='password'
                        required
                        placeholder='Enter Password'
                        name='password'
                        id='password'
                        value={this.state.userObj.password ?? ''}
                        onChange={this.getData}
                    />
                    <input
                        type='text'
                        required
                        placeholder='Enter Address'
                        name='address'
                        id='address'
                        value={this.state.userObj.address ?? ''}
                        onChange={this.getData}
                    />
                    <input
                        type='submit'
                        value='Submit Details'
                    />
                    <input
                        type='reset'
                        value='Reset Details'
                    />
                </form>
                </center>
            </div>
            <div id="rightDiv">
                <Display userArray={this.state.userArray} update={this.updateData} delete={this.deleteData}/>
            </div>
        </div>
    </>);
    }

}
createRoot(document.getElementById("root")).render(<ClassComponent/>);

