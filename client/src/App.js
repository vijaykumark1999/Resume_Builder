import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import { Route, Routes, Link } from 'react-router-dom';
import Resumed from './pages/resumedata';


function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resumed" element={<Resumed />} />
      </Routes>
      
      <div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/login"><button className="clear" id="clear" type="clear" >Login</button></Link>
            </li>
            <li className="nav-item"><Link to="/signup">Signup</Link></li>
            <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="#portfolio" className="nav-link">Portfolio</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>



     


    </>

  );
}
export default App;
