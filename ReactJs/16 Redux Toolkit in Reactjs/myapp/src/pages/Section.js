import { useDispatch, useSelector } from 'react-redux';
import '../style.css';
import { useState } from 'react';
import { decrement, increment, setTagLine } from '../store/userSlice.js';
function Section(){
    const [tag,setTag] = useState();
    const userObj = useSelector(state=> state.user);
    const dispatch = useDispatch();
    return (<div id='section'>
        <h1>{userObj.counterTitle} : {userObj.count}</h1> 
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button> <br/>
        <br/>
            <input
                type="text"
                placeholder='Enter Tagline'
                value={tag ?? ''}
                onChange={(event)=>{
                    setTag(event.target.value);
                }}
            />
            <button onClick={()=>{
                dispatch(setTagLine(tag));
                setTag(null);
            }}>Change TagLine</button>
            
    </div>);
}

export default Section;