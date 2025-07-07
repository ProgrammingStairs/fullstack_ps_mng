import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar(){
    const obj = useSelector(state=> state.user);
    const [menuItem,setMenuItem] = useState();
    useEffect(()=>{
        var timer = setInterval(()=>{
            if(obj.navShow=="home"){
                setMenuItem(<div style={{backgroundColor:"black",height:"20px",padding:"15px"}}>
                    <Link style={{textDecoration:"none",color:"white"}} to='/'>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link style={{textDecoration:"none",color:"white"}} to='/addUser'>AddUser</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link style={{textDecoration:"none",color:"white"}} to='/viewUser'>ViewUser</Link>
                </div>);
            }
        },10);
        return ()=> clearInterval(timer);
    },[]);
    return(<>
        {menuItem}
    </>);
}
export default Navbar;