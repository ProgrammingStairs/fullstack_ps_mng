// program showing the concept of useMemo
import {memo, useMemo, useState } from "react";
const Memoized = memo((props)=>{
  console.log("gets entry | memoized");
  return (<>
      Hello {props.fname} {props.lname}, your count is {props.age}
  </>);
});
function UnMemoized(props){
  console.log("gets entry | unmemoized");
  return (<>
      Hello {props.fname} {props.lname}, your age is {props.age}
  </>);
}
function App(){
  const [fname,setFirstName] = useState('Andrew');
  const [lname,setLastName] = useState('Anderson');
  
  const [count,setCount] = useState(0);
  const memoizedComponent = useMemo(()=> <Memoized fname={fname} lname={lname} age={count}/>,[fname,lname,count]);
  return (<>
    <h1>Count : {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Click</button>
    <h1>Memoized Function</h1>
    {memoizedComponent}    
    
    <h1>UnMemoized Function</h1>
    <UnMemoized fname={fname} lname={lname} age={56}/>
  </>);
}
export default App;
