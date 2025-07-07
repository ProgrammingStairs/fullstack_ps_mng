import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import HomeComponent from './components/HomeComponent.js';
import NavbarComponent from './components/NavbarComponent.js';
import AboutComponent from './components/AboutComponent.js';
import ContactComponent from './components/ContactComponent.js';
import LoginComponent from './components/LoginComponent.js';

function App() {
  return (<>
    <Router>
        <NavbarComponent/>
        <Routes>
          <Route path='/home' element={<HomeComponent/>}/>
          <Route path='/about' element={<AboutComponent/>}/>
          <Route path='/contact' element={<ContactComponent/>}/>
          <Route path='/login' element={<LoginComponent/>}/>
          
        </Routes>
    </Router>
  </>);
}

export default App;
