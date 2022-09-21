import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

import Content from "./components/Content";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <NavBar />
         <Content />
      </BrowserRouter>
    );
  }
}

export default App;
