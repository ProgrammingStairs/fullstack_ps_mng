import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';

function MyFunComponent(){
    const [count,setCount] = useState(0);
    const [title,setTitle] = useState('CounterTitle');
    const [obj,setObj] = useState({count:0,title:''});
    const handleSubmit = (event)=>{
        setObj({
            count,title
        });
    }
    return (<>
        <h1>{title} : {count}</h1>
        <input
            type="text"
            placeholder = "Enter Count"
            onChange={(event)=>{
                setCount(event.target.value);
            }}
        />
        <input
            type="text"
            placeholder = "Enter Title"
            onChange={(event)=>{
                setTitle(event.target.value);
            }}
        />
        <button onClick={handleSubmit}>Submit</button>
        <h1>{obj.count!=0 ? "Count : "+obj.count : ""}</h1>
         <h1>{obj.title!='' ? "Title : "+obj.title : ""}</h1>    
    </>);
}
createRoot(document.getElementById("root")).render(<MyFunComponent/>);