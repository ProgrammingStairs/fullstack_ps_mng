import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';

function MyFunComponent(){
    const [dummy,setDummy] = useState({username:'',email:'',password:''});
    const [obj,setObj] = useState({username:'',email:'',password:''});
    
    const getData = (event)=>{
        const {name,value} = event.target;
        setDummy({
            ...dummy,
            [name] : value
        });   
    }
    
    const handleSubmit = (event)=>{
        setObj(dummy);
    }
    return (<>
        <input
            type="text"
            name = "username"
            placeholder = "Enter Username"
            onChange={getData}
        /><br/>
        <input
            type="email"
            name = "email"
            placeholder = "Enter Email"
            onChange={getData}
        /><br/>
        <input
            type="password"
            name = "password"
            placeholder = "Enter Password"
            onChange={getData}
        /><br/>
        <button onClick={handleSubmit}>Submit</button>
        <h1>{obj.username!='' ? "Username : "+obj.username : ""}</h1>
        <h1>{obj.email!='' ? "Email : "+obj.email : ""}</h1>
        <h1>{obj.password!='' ? "Password : "+obj.password : ""}</h1>
    </>);
}
createRoot(document.getElementById("root")).render(<MyFunComponent/>);


