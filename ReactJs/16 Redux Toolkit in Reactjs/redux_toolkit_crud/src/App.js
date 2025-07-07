import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import ViewUser from './components/ViewUser.js';
import AddUser from './components/AddUser.js';
import Header from './components/Header.js';
function App() {
  return (<>
    <Router>
      <Header/>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/viewUser' element={<ViewUser/>}/>
          <Route path='/addUser' element={<AddUser/>}/>
        </Routes>
    </Router>    
  </>);
}

export default App;
