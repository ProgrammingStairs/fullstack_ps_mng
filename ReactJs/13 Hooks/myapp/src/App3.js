import { useCallback, useState } from "react";

function App(){
  const [firstNum,setFirstNumber] = useState();
  const [secondNum,setSecondNumber] = useState();
  const [result,setResult] = useState();
  const res = useCallback(()=>{
      console.log("gets entry inside useCallback");
      const value = parseInt(firstNum)+parseInt(secondNum);
      setResult(value);
  },[firstNum,secondNum]);

  return (<>
    <h2>Example of useCallback</h2>
    <input
      type='text'
      placeholder="Enter First Number"
      onChange={(event)=>{
        setFirstNumber(event.target.value);
      }}
    /><br/>
    <input
      type='text'
      placeholder="Enter Second Number"
      onChange={(event)=>{
        setSecondNumber(event.target.value);
      }}
    /><br/>
    <input
      type='submit'
      onClick={res}
    /><br/>
    <h1>Result : {result}</h1>
  </>);
}

export default App;