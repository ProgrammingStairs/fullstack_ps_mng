import headerStyle from './header.module.css';
import logo from '../../images/logo.jpg';
function HeaderComponent(){
    return (<>
       <div className={headerStyle.header}>
            <img src={logo} className={headerStyle.logo} alt=""/>
        </div>
    </>);
}

export default HeaderComponent;