import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

var initialState = {
  counter : 0
};
const reducer = (state,action)=>{
  switch(action.type){
    case 'increment':
        return {...state,counter:state.counter+action.value};
    case 'decrement':
        return {...state,counter:state.counter-action.value};
    case 'reset':
        return {...state,counter:action.value};
    default:
        return initialState;
  }
}
function App() {
  const [count,dispatch] = useReducer(reducer,initialState);
  return (<>
    <h1>Count : {count.counter}</h1>
    <button onClick={()=>{dispatch({type:'increment',value:1})}}>Increment By 1</button>
    <button onClick={()=>{dispatch({type:'decrement',value:3})}}>Decrement by 3</button>
    <button onClick={()=>{dispatch({type:'reset',value:0})}}>Reset</button>
  </>);
}

export default App;
