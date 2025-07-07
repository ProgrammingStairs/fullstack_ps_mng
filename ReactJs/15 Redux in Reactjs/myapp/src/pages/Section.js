import { connect } from 'react-redux';
import '../style.css';
import { counterDecrement, counterIncrement} from '../actions/counterAction.js';
import { setTagLine } from '../actions/headAction.js';
import { useState } from 'react';

function Section(props){
    const [tag,setTag]=useState();
    const {counterObj,counterDecrement,counterIncrement,setTagLine} = props;
    return (<div id='section'>
        <h1>{counterObj.counterTitle}:{counterObj.count}</h1>
        <button onClick={counterIncrement}>Increment</button>
        <button onClick={counterDecrement}>Decrement</button> <br/>
        <br/>
            <input
                type="text"
                placeholder='Enter Tagline'
                onChange={(event)=>{setTag(event.target.value)}}
            />
            <button onClick={()=>{
                setTagLine(tag)
            }}>Change TagLine</button>
            
    </div>);
}
const mapStateToProp = (state)=>{
    return {
        counterObj : state.counter,
    }
}
const mapDispatchToProp = {
    counterIncrement,
    counterDecrement,
    setTagLine
}

export default connect(mapStateToProp,mapDispatchToProp)(Section);