import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Link to="/"> Home </Link>
        <Link to="/experiences"> Experiences </Link>
        <Link to="/projects"> projects </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/about"> About </Link>
      </>
    );
  }
}

export default NavBar;
