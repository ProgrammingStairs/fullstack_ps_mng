import {Link} from 'react-router-dom';
function NavbarComponent(){
    return (<div style={{backgroundColor:"black",padding:"10px"}}>
        <Link style={{color:"white",fontSize:"20px"}} to='/home'>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",fontSize:"20px"}} to='/about'>About</Link> &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",fontSize:"20px"}} to='/contact'>Contact</Link> &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",fontSize:"20px"}} to='/login'>Login</Link>
    </div>);
}
export default NavbarComponent;