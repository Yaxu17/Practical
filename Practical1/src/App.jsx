import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"
import pr2 from "./components/pr2"

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/components/about">About</Link> | 
        <Link to="/components/contact">Contact</Link> | 
        <Link to="/components/pr2">pr2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/about" element={<About />} />
        <Route path="/components/contact" element={<Contact />} />
        <Route path="/components/pr2" element={<pr2 />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;