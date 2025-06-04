import React from 'react';
import {createRoot} from 'react-dom/client';

/*
const message = "This is an example of React Js";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(message);
*/ 

/*
const message = "This is an example of React Js..!!!!";
createRoot(document.getElementById("root")).render(message);
*/

/*
createRoot(document.getElementById("root")).render("This is an example of React Js");
*/

const section = <div>
    <h2>This is an example of React</h2>
    <blockquote>
        This is an example of blockqote, inside react js. This is an example of blockqote, inside react js. This is an example of blockqote, inside react js. This is an example of blockqote, inside react js. This is an example of blockqote, inside react js. This is an example of blockqote, inside react js. This is an example of blockqote, inside react js. This is an example of blockqote, inside react js. This is an example of blockqote, inside react js. 
    </blockquote>
</div>
createRoot(document.getElementById("root")).render(section);
