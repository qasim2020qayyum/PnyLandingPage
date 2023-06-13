import React from "react";
import Navbar from "./components/layout/Navbar";
import './components/layout/navbar.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>

    </>
  );
};

export default App;
