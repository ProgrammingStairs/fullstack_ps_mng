// program showing the concept of prop drilling
import {useState } from "react";

function App(){
  const [firstName,setFirstName] = useState('Andrew');
  const [lastName,setLastName] = useState('Anderson');
  return (<>
        <ChildA firstName={firstName} lastName={lastName}/>
  </>);
}
function ChildA(props){
  return (<>
    <ChildB firstName={props.firstName} lastName={props.lastName}/>
  </>);
}
function ChildB(props){
  return (<>
    <ChildC firstName={props.firstName} lastName={props.lastName}/>
  </>);
}
function ChildC(props){
  return (<>
    <h2>First Name : {props.firstName}</h2>
    <h2>Last Name : {props.lastName}</h2>
  </>);
}

export default App;