import logo from './logo.svg';
import './App.css';
import Header from './pages/Header.js';
import Footer from './pages/Footer.js';
import Sidebar from './pages/Sidebar.js';
import Section from './pages/Section.js';

function App() {
  return (<>
    <Header/>
      <div className="row">
        <Sidebar/>
        <Section/>
      </div>
    <Footer/>
  </>);
}

export default App;
