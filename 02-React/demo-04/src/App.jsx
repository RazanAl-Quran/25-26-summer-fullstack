import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// npm i react-router-dom
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Digimons from './components/Digimons';
import NotFound from './components/NotFound';

import './App.css'

function App() {


  return (
    <>

      <Router>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1>🔀 React Router Demo</h1>

          {/* Navigation Links */}

          <nav style={{ marginBottom: "20px" }}>
            <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
            <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
            <Link to="/profile/Razan" style={{ margin: "0 10px" }}>My Profile</Link>
            <Link to="/digimons" style={{ margin: "0 10px" }}>Digimons</Link>
          </nav>

          {/* Routes */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/digimons" element={<Digimons />} />
            <Route path="*" element={<NotFound />} />

          </Routes>

          {/* footer */}
          <h3>Footer</h3>

        </div>
      </Router>

    </>
  )
}

export default App
