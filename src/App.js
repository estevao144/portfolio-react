import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import './App.css';
import Image from "./pages/Image";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <NavBar />
          <Image />
         <Content />
      </BrowserRouter>
    );
  }
}

export default App;
