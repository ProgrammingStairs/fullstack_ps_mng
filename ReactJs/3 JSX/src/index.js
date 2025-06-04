import React from 'react';
import {createRoot} from 'react-dom/client';
import res from './test4.jsx'; // default import 
import { result2, result3 } from './test4.jsx'; // named import 

createRoot(document.getElementById('root1')).render(res);
createRoot(document.getElementById('root2')).render(result2);
createRoot(document.getElementById('root3')).render(result3);