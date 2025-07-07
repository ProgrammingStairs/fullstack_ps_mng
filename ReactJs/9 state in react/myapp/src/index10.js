import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';

function MyFunComponent(){
    const [counter,setCounter] = useState(0);
    const [counterTitle,setCounterTitle] = useState('CounterTitle');
    return (<>
        <h1>{counterTitle} : {counter}</h1>
        <button onClick={()=>{setCounter(counter+1)}}>Increment</button>
        <button onClick={()=>{setCounter(counter-1)}}>Decrement</button>
        <button onClick={()=>{setCounter(0)}}>Reset</button>
        <button onClick={()=>{setCounterTitle("CountTitle")}}>Change Title</button>
    </>);
}
createRoot(document.getElementById("root")).render(<MyFunComponent/>);