import React from "react";
import { Link } from "react-router-dom";
class About extends React.Component {
  render() {
    return (
      <>
        <footer className="contato">
          <h3> Contato</h3>
          <ul className="nav-links">
            <a href="https://github.com/estevao144">GitHub</a>
            <li>
              <Link to="https://www.linkedin.com/in/estevaomarqueso/">
                {" "}
                Linkedin{" "}
              </Link>
            </li>
          </ul>
        </footer>
      </>
    );
  }
}

export default About;
