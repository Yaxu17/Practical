import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

import React, { useState } from "react";

function event() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Live Input</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>{name}</h2>
    </div>
  );
}

export default event;
export default App;