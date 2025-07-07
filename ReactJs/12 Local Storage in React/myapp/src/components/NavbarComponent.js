import {Link} from 'react-router-dom';
function NavbarComponent(){
    return (<div style={{backgroundColor:"black",padding:"10px"}}>
        <Link to='/' style={{color:"white"}}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/login' style={{color:"white"}}>Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/register' style={{color:"white"}}>Register</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>);
}
export default NavbarComponent;