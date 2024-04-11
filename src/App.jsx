import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Law from "./Components/Services/Law";
import Company from "./Components/Services/Company";
import Astrology from "./Components/Services/Astrology";
import ContactUs from "./Components/ContactUs/ContactUs"

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/company" element={<Company />} />
          <Route path="/astrology" element={<Astrology />} />
          <Route path="/law" element={<Law />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
