import React from 'react';
function MyFunComponent({name="noname",age=0,salary=0,status=false}){
  return (<>
    {/* {console.log("",props)} */}
    <h2>This is Functional Component</h2>
    <p><b>Name : </b>{name}</p>
    <p><b>Age : </b>{age}</p>
    <p><b>Salary : </b>{salary}</p>
    <p><b>Status : </b>{String(status)}</p>
  </>);
}
class MyClassComponent extends React.Component{
  render(){
    return(<>

    { console.log(this)}
    
      <h2>This is Class Component</h2>
      <p><b>Name : </b>{this.props.name}</p>
      <p><b>Age : </b>{this.props.age}</p>
      <p><b>Salary : </b>{this.props.salary}</p>
      <p><b>Status : </b>{String(this.props.status)}</p>
    </>);
  };
} 

// MyFunComponent.defaultProps={
//   name : "noname",
//   age : 0,
//   salary : 0,
//   status : true
// }
MyClassComponent.defaultProps={
  name : "noname",
  age : 0,
  salary : 0,
  status : true
}

function App(){
  return (<>
    <MyFunComponent name="Andrew Anderson" age={45} status={true}/>
    <MyClassComponent salary="34567" status={true}/>
  </>);
}
export default App;
