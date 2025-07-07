import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import jsonData from './data.json'; 
import './style.css';
function FunctionalComponent(){
    const [userObj,setUserObj] = useState({});
    const [userArray, setUserArray] = useState([]);
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        })  
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        setUserArray([
            ...userArray,
            userObj
        ]);
        event.target.reset();
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
                 <center>
                    <h2>Form Details</h2>
                    <table border={1} cellSpacing={0} cellPadding={10} width="80%">
                        <tr>
                            <th>S.No</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Address</th>
                        </tr>
                        {
                            userArray.map((obj,index)=>{
                                return(<>
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{obj.username}</td>
                                        <td>{obj.email}</td>
                                        <td>{obj.password}</td>
                                        <td>{obj.address}</td>
                                    </tr>
                                </>);
                            })
                        }
                    </table>
                 </center>
            </div>
        </div>
    </>);
}
createRoot(document.getElementById("root")).render(<FunctionalComponent/>);