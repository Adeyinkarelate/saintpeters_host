import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Current from "./pages/Current";
import Active from "./pages/Active";
import Past from './pages/Past';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current" element={<Current />} />
        <Route path="/active" element={<Active />} />
        <Route path="/past" element={<Past />} />
      </Routes>
    </>
  );
};

export default App;
