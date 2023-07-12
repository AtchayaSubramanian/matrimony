import React from 'react';
import '../css/nav.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavigationBar() {
  return (
    
    <nav className="navbar">
       {/* <Navbar.Brand href="#"> */}
          <img src={require("../logo1.jpg")} alt="Logo" id="logo-image" />
        {/* </Navbar.Brand> */}
      <a  className="logo">SoulSearch</a>
     
      <ul className="nav-menu">
        <Link to="/about" className="as"><li><a href="#home">About</a></li></Link>
        <Link to="/contact" className="as"><li><a href="#home">Contact</a></li></Link>
        {/* <li><a href="#profile"><Link to="/Register">Login</Link></a></li>
        <li><a href="#home"><Link to="/">Register</Link></a></li> */}
        {/* <li><a href="#home">profile</a></li> */}
        <Link to="/profile" className="as1"><li><a href="#home">profile</a></li></Link>
        {/* <Link to ="/profile"><button>profile</button></Link> */}
      </ul>
    </nav>

  );
}

export default NavigationBar;
