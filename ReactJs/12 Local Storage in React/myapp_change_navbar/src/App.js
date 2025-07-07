import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent.js';
import LoginComponent from './components/LoginComponent.js';
import HomeComponent from './components/HomeComponent.js';
import ProfileComponent from './components/ProfileComponent.js';
import RegisterComponent from './components/RegisterComponent.js';

function App() {
  return (<>
    <center>
      <h1>Example of Local Storage in React Js</h1>
    </center>
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/login' element={<LoginComponent/>}/>
        <Route path='/register' element={<RegisterComponent/>}/>
        <Route path='/profile' element={<ProfileComponent/>}/>
      </Routes>
    </Router>
  </>);
}

export default App;
