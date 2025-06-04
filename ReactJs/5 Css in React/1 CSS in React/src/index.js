import React from 'react';
import {createRoot} from 'react-dom/client';

/*
const result = <div style={{backgroundColor:"black",color:"white"}}>
    <h1>This is an example of CSS in React JS</h1>
</div>
createRoot(document.getElementById("root")).render(result);
*/

/*
const myStyle = {
        backgroundColor:"green",
        color:"whitesmoke"
    };

const result = <div style={myStyle}>
    <h1>This is an example of CSS in React JS</h1>
</div>
createRoot(document.getElementById("root")).render(result);
*/ 

/*
const myStyle = {
        style1 : {
            backgroundColor:"green"
        },
        style2 : {
            color:"whitesmoke"
        }
    };

const result = <div style={myStyle.style1}>
    <h1 style={myStyle.style2}>This is an example of CSS in React JS</h1>
</div>
createRoot(document.getElementById("root")).render(result);
*/

/*
import './style.css';
const result = <div>
    <h1>This is an <span id='myId'>example</span> of CSS in <span className='myClass' >React JS</span></h1>
</div>
createRoot(document.getElementById("root")).render(result);
*/ 

import styled from 'styled-components';
const MyParagraph = styled.p`
    color:white;
    background-color:blue;
    font-family:candara;
    text-decoration:underline;
`;
const result = <MyParagraph>
        <p>
            This is an example of CSS in React js.
        </p>
        <div>
            This is an example of CSS in React js.
        </div>
</MyParagraph>
createRoot(document.getElementById('root')).render(result);