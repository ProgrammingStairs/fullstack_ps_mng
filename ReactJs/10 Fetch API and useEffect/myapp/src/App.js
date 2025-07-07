import React, { useEffect, useState } from 'react';
import './style.css';
import Display from './Display.js';
function App(){
    const [userObj,setUserObj] = useState({});
    const [userArray, setUserArray] = useState([]);
    const [status,setStatus] = useState(false);
    const getJsonServerData = async ()=>{
    try{
        const response = await fetch("http://localhost:3000/profile");
        const arr = await response.json();
        setUserArray(arr);
    }catch(error){
      console.log("Error occured : "+error);
    }
  }
  useEffect(()=>{
    getJsonServerData();   
  },[status]);
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        })  
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        await fetch("http://localhost:3000/profile",{
              method:'POST',
              headers :{
                'content-type':'application/json'
              },
              body:JSON.stringify(userObj)
        });
        setStatus(true);
        event.target.reset();
    }

    return(<>
        <center><h1>Example of Local json server in React Js | Functional Component</h1></center>
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
                        onChange={getData}
                    />
                    <input
                        type='email'
                        required
                        placeholder='Enter Email'
                        name='email'
                        id='email'
                        onChange={getData}
                    />
                    <input
                        type='password'
                        required
                        placeholder='Enter Password'
                        name='password'
                        id='password'
                        onChange={getData}
                    />
                    <input
                        type='text'
                        required
                        placeholder='Enter Address'
                        name='address'
                        id='address'
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
                <Display userArray={userArray}/>
            </div>
        </div>
    </>);
}
export default App;