import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Login from "./Login";
import SignUp from "./SignUp";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
