import React from 'react';
function MyFunComponent(x){
  return (<>
    {console.log("",x)}
    <h2>This is Functional Component</h2>
    <p><b>Name : </b>{x.obj.name}</p>
    <p><b>Age : </b>{x.obj.age}</p>
    <p><b>Status : </b>{String(x.obj.status)}</p>
  </>);
}
class MyClassComponent extends React.Component{
  render(){
    return(<>

    { console.log(this)}
    
      <h2>This is Class Component</h2>
      <p><b>Name : </b>{this.props.obj.name}</p>
      <p><b>Age : </b>{this.props.obj.age}</p>
      <p><b>Status : </b>{String(this.props.obj.status)}</p>
    </>);
  };
} 

// const obj = {name:"Andrew Andy Anderson",age:45,status:true};

function App(){
const obj = {name:"Andy Anderson",age:45,status:true};
return (<>
    <MyFunComponent obj = {obj} />
    <MyClassComponent obj = {obj}/>
  </>);
}
export default App;
