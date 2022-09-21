import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

class Content extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/experiences" element={<Contact />} />
        <Route exact path="/about" element={<Contact />} />
      </Routes>
    );
  }
}

export default Content;
