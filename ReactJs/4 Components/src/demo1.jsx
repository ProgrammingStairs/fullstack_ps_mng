import React from 'react';

class Header extends React.Component{
    render(){
        return (<>
            <h1>Header Component</h1>
            <p>This is an example of Header Component</p>
        </>);
    }
}
class Navbar extends React.Component{
    render(){
        return (<>
            <h1>Navbar Component</h1>
            <p>This is an example of Navbar Component</p>
        </>);
    }
}
class Banner extends React.Component{
    render(){
        return (<>
            <h1>Banner Component</h1>
            <p>This is an example of Banner Component</p>
        </>);
    }
}

export {Navbar,Banner};
export default Header;
