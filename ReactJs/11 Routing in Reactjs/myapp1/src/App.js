import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
// import { Route, HashRouter as Router, Routes} from 'react-router-dom';
// import { Route, MemoryRouter as Router, Routes} from 'react-router-dom';
import HomeComponent from './components/HomeComponent.js';
import NavbarComponent from './components/NavbarComponent.js';
import AboutComponent from './components/AboutComponent.js';
import ContactComponent from './components/ContactComponent.js';
import LoginComponent from './components/LoginComponent.js';
import ContactComponent1 from './components/ContactComponent1.js';
import ContactComponent2 from './components/ContactComponent2.js';

function App() {
  return (<>
    <Router>
        <NavbarComponent/>
        <Routes>
          <Route path='/home' element={<HomeComponent/>}/>
          <Route path='/about' element={<AboutComponent/>}/>
          <Route path='/contact' element={<ContactComponent/>}>
            <Route path='contactComponent1' element={<ContactComponent1/>}/>
            <Route path='contactComponent2' element={<ContactComponent2/>}/>
          </Route>
          <Route path='/login' element={<LoginComponent/>}/>
          
        </Routes>
    </Router>
  </>);
}

export default App;
