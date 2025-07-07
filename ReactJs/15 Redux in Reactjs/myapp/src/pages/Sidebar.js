import { connect } from 'react-redux';
import '../style.css';
import { reset } from '../actions/counterAction.js';
function Sidebar(props){
    const {counterObj,reset} = props;
    return (<div id="sidebar">
        <h1>{counterObj.counterTitle}:{counterObj.count}</h1>
        <button onClick={reset}>Reset</button>
    </div>);
}

const mapStateToProp = (state)=>{
    return {
        counterObj : state.counter
    }
}
const mapDispatchToProp = {
    reset
}
export default connect(mapStateToProp,mapDispatchToProp)(Sidebar);