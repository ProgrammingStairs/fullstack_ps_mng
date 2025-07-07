import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [counter,setCounter] = useState(0);  
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCounter(counter+1);
      console.log(counter);  
    },1000);
    return ()=> clearInterval(timer);
  });
  return (<>
    <h1>Counter : {counter}</h1>
  </>);
}

export default App;
