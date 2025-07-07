import React from 'react';
function MyFunComponent(props){
  return (<>
    {/* {console.log("",props)} */}
    <h2>This is Functional Component</h2>
    <p><b>Name : </b>{props.name}</p>
    <p><b>Age : </b>{props.age}</p>
    <p><b>Salary : </b>{props.salary}</p>
    <p><b>Status : </b>{String(props.status)}</p>
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

function App(){
  return (<>
    <MyFunComponent name="Andrew Anderson" age={45} salary="34567" status={true}/>
    <MyClassComponent name="Andrew Anderson" age={45} salary="34567" status={true}/>
  </>);
}
export default App;
