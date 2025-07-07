// program showing the solution of prop drilling by context api
import {createContext, useContext, useState } from "react";
const context1 = createContext(null);
// console.log(context1);

function App(){
  const [firstName,setFirstName] = useState('Peter');
  const [lastName,setLastName] = useState('Parker');
  return (<context1.Provider value={{firstName,lastName}}>
        <ChildA/>
  </context1.Provider>);
}
function ChildA(){
  return (<>
    <ChildB/>
  </>);
}
function ChildB(){
  return (<>
    <ChildC/>
  </>);
}
function ChildC(){
  const {firstName,lastName} = useContext(context1);
  return (<>
    <h2>First Name : {firstName}</h2>
    <h2>Last Name : {lastName}</h2>
  </>);
}

export default App;