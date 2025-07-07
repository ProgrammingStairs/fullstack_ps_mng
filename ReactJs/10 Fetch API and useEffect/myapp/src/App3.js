import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [counter,setCounter] = useState(0);  
  useEffect(()=>{
    if(counter<10){
      var timer = setInterval(()=>{
        setCounter(counter+1);
        console.log(counter+1);  
      },1000);
      return ()=> clearInterval(timer);
    }else{
      clearInterval(timer);
    }
  },[counter]);
  return (<>
    <h1>Counter : {counter}</h1>
  </>);
}

export default App;
