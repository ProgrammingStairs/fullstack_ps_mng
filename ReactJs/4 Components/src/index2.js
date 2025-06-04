import React from 'react';
import {createRoot} from 'react-dom/client';

// functional component
// function FirstComponent(){
//     return <div>
//         <div>Hello User, This is an example of Functional Component..!!</div>
//         <div>Hello User, This is an example of Functional Component..!!</div>
//         <div>Hello User, This is an example of Functional Component..!!</div>
//     </div>;
// }

// function FirstComponent(){
//     return <React.Fragment>
//         <div>Hello User, This is an example of Functional Component..!!</div>
//         <div>Hello User, This is an example of Functional Component..!!</div>
//         <div>Hello User, This is an example of Functional Component..!!</div>
//     </React.Fragment>;
// }

function FirstComponent(){
    return <>
        <div>Hello User, This is an example of Functional Component..!!</div>
        <div>Hello User, This is an example of Functional Component..!!</div>
        <div>Hello User, This is an example of Functional Component..!!</div>
    </>;
}


createRoot(document.getElementById('root')).render(<FirstComponent/>);