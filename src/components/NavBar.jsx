import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  
  
  render() {
  
    return (
      <nav id="menu">
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/experiences"> Experiences </Link></li>
        <li><Link to="/projects"> projects </Link></li>
        <li><Link to="/about"> About </Link></li>
        <li><Link to="/contact"> Contact </Link></li>
      </nav>
    );
  }
}

export default NavBar;
