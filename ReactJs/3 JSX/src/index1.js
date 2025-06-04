import React from 'react';
import {createRoot} from 'react-dom/client';

const result = "This is an example of React JS";
const res = <del>{result}</del>;

createRoot(document.getElementById('root')).render(res);