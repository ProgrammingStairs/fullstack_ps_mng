import '../css/style.css';
import logo from '../images/logo.jpg';
function HeaderComponent(){
    return (<>
       <div id="header">
            <img src={logo} id="logo" alt=""/>
        </div>
    </>);
}

export default HeaderComponent;