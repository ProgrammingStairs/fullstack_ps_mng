import React from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const result = <div className='container-fluid' style={{backgroundColor:"dodgerblue",color:"white"}}>
    <h1>Welcome to Bootstrap</h1>
    <p>This is an example of bootstrap in react js showing concept of how to implement boostrap This is an example of bootstrap in react js showing concept of how to implement boostrapThis is an example of bootstrap in react js showing concept of how to implement boostrap This is an example of bootstrap in react js showing concept of how to implement boostrapThis is an example of bootstrap in react js showing concept of how to implement boostrap</p>
    <button class="btn btn-success btn-lg">Get More Quote</button>
    <br/><br/>
</div>
createRoot(document.getElementById('root')).render(result);