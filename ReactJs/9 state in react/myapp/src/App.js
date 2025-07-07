import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component {
  stateDemo = {
    address : "Indore"
  }
  state = {
    name : "Andrew Anderson"
  }
  render(){
  return (<>
    {console.log(this)}
  </>);
 }}

export default App;
