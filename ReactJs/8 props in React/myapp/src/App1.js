import logo from './logo.svg';
import './App.css';

function FunComponent1(props){
  // console.log(props);
  return (<>
    Hello {props.name}
  </>);
}
function App() {
  return (<FunComponent1 name="Andrew Anderson"/>);
}

export default App;
