import React from 'react';
import {createRoot} from 'react-dom/client';

// functional component
function FirstComponent(){
    // return "Hello User, This is an example of Functional Component";    
    return <div>
        Hello User, This is an example of Functional Component..!!
    </div>;
}

createRoot(document.getElementById('root')).render(<FirstComponent/>);