import {Link, Outlet} from 'react-router-dom';
function ContactComponent(){
    return (<div style={{marginTop:"13px",marginLeft:"150px"}}>
        <Link style={{backgroundColor:"black",color:"white",padding:"20px"}} to='/contact/contactComponent1' >ContactComponent1</Link>
        <br/><br/>
        <Link style={{backgroundColor:"black",color:"white",padding:"20px"}} to='/contact/contactComponent2' >ContactComponent2</Link>
        <Outlet/>
    </div>);
}
export default ContactComponent;