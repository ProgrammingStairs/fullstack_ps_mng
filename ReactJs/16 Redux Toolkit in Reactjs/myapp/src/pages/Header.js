import { useSelector } from 'react-redux';
import '../style.css';

function Header(){
    const userObj = useSelector(state=> state.user);
    return (<div id="header">
        <h1>Redux Example</h1>
        <h2>{userObj.tagLine}</h2>    
    </div>);
}
export default Header;