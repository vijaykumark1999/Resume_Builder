import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import { Route, Routes, Link } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <div>
        <nav class="navbar">
          <ul class="nav-list">
            <li class="nav-item">
              <Link to="/login">Login</Link>
            </li>
            <li class="nav-item"><Link to="/signup">Signup</Link></li>
            <li class="nav-item"><a href="#services" class="nav-link">Services</a></li>
            <li class="nav-item"><a href="#portfolio" class="nav-link">Portfolio</a></li>
            <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>



      <p class="signup-login">Already have an account? <a href="#" class="signup-login-link">Log In</a></p>


    </>

  );
}
export default App;
