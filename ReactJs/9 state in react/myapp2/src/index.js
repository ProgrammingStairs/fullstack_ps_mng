import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Display from './Display.js';
function FunctionalComponent(){
    const [userObj,setUserObj] = useState({});
    const [userArray, setUserArray] = useState([]);
    const [index,setIndex] = useState(-1);
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        })  
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(index==-1){
            setUserArray([
                ...userArray,
                userObj
            ]);
        }else{
            userArray.splice(index,1);
            userArray.splice(index,0,userObj);
            setUserArray([...userArray]);
            setIndex(-1);
        }

        event.target.reset();
        setUserObj({
            username:'',
            email:'',
            password:'',
            address:''
        });
    }
    const updateData = (userObject)=>{
        // console.log("userObject : ",userObject.obj);
        // console.log("userIndex : ",userObject.index);
        setUserObj(userObject.obj);
        setIndex(userObject.index);
    }
    const deleteData = (index)=>{
        // {console.log("received index : ",index);}
       userArray.splice(index,1);
       setUserArray([...userArray]);
    }
    return(<>
        <center><h1>Example of State in Rect Js | Functional Component</h1></center>
        <div id="outerDiv">
            <div id="leftDiv">
                <center>    
                    <h2>Fill Form Details</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        required
                        placeholder='Enter Username'
                        name='username'
                        id='username'
                        value={userObj.username ?? ''}
                        onChange={getData}
                    />
                    <input
                        type='email'
                        required
                        placeholder='Enter Email'
                        name='email'
                        value={userObj.email ?? ''}
                        id='email'
                        onChange={getData}
                    />
                    <input
                        type='password'
                        required
                        placeholder='Enter Password'
                        name='password'
                        id='password'
                        value={userObj.password ?? ''}
                        onChange={getData}
                    />
                    <input
                        type='text'
                        required
                        placeholder='Enter Address'
                        name='address'
                        id='address'
                        value={userObj.address ?? ''}
                        onChange={getData}
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
                <Display userArray={userArray} delete={deleteData} update={updateData}/>
            </div>
        </div>
    </>);
}
createRoot(document.getElementById("root")).render(<FunctionalComponent/>);