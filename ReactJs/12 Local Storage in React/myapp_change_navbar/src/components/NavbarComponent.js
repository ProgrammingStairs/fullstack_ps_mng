import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function NavbarComponent(){
    const [menuItem,setMenuItem] = useState();
    useEffect(()=>{
        const timer = setInterval(()=>{
            var navShow = localStorage.getItem("navShow");
           // console.log("----------",navShow);
            if(navShow==="null"){
                setMenuItem(<div>
                <Link to='/' style={{color:"white"}}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/login' style={{color:"white"}}>Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/register' style={{color:"white"}}>Register</Link>
                </div>);
            }else if(navShow==="login"){
                setMenuItem(<>
                <Link to='/' style={{color:"white"}}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/register' style={{color:"white"}}>Register</Link>
                </>);
            }else if(navShow==="register"){
                setMenuItem(<>
                <Link to='/' style={{color:"white"}}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/login' style={{color:"white"}}>Login</Link>
                </>);
            }else if(navShow==="profile"){
                setMenuItem(<>
                <Link to='/' style={{color:"white"}}>Home</Link>
                </>);
            }
        });
        return ()=> clearInterval(timer);
    },[]);
    return (<div style={{backgroundColor:"black",padding:"10px"}}>
        {menuItem}
    </div>);
}
export default NavbarComponent;