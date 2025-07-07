import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';

function MyFunComponent(){
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [obj,setObj] = useState({username:'',email:'',password:''});
    const userFun = (event)=>{
                setUsername(event.target.value);
            }
    const emailFun = (event)=>{
                setEmail(event.target.value);
            }
    const passFun = (event)=>{
                setPassword(event.target.value);
            }
    const handleSubmit = (event)=>{
        setObj({
            username,
            email,
            password    
        });
    }
    return (<>
        <input
            type="text"
            name = "username"
            placeholder = "Enter Username"
            onChange={userFun}
        /><br/>
        <input
            type="email"
            name = "email"
            placeholder = "Enter Email"
            onChange={emailFun}
        /><br/>
        <input
            type="password"
            name = "password"
            placeholder = "Enter Password"
            onChange={passFun}
        /><br/>
        <button onClick={handleSubmit}>Submit</button>
        <h1>{obj.username!='' ? "Username : "+obj.username : ""}</h1>
        <h1>{obj.email!='' ? "Email : "+obj.email : ""}</h1>
        <h1>{obj.password!='' ? "Password : "+obj.password : ""}</h1>
    </>);
}
createRoot(document.getElementById("root")).render(<MyFunComponent/>);


