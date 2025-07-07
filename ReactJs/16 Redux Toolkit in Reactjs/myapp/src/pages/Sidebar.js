import { useDispatch, useSelector } from 'react-redux';
import '../style.css';
import { reset } from '../store/userSlice.js';
function Sidebar(){
    const userObj = useSelector(state=> state.user);
    const dispatch = useDispatch();
    return (<div id="sidebar">
        <h1>{userObj.counterTitle} : {userObj.count}</h1>    
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>);
}

export default Sidebar;