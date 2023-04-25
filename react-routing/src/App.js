import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/contact" element={<Contact/>}></Route>
              <Route exact path="/about" element={<About/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


