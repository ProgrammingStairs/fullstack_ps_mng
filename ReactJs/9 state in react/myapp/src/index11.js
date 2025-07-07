import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';

function MyFunComponent(){
    const [counter,setCounter] = useState(0);
    const [counterTitle,setCounterTitle] = useState('CounterTitle');
    var increment = ()=>{
        setCounter(counter+1)
    }
    const decrement = ()=>{
        setCounter(counter-1)
    }
    const reset = ()=>{
        setCounter(0);
    }
    const changeTitle =()=>{
         setCounterTitle("CountTitle");
    }
    return (<>
        <h1>{counterTitle} : {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={changeTitle}>Change Title</button>
    </>);
}
createRoot(document.getElementById("root")).render(<MyFunComponent/>);