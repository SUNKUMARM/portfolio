import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Skills from "../pages/skills/Skills";
import Resume from "../pages/resume/Resume";
// import NavBar from "../navbar/NavBar";
import Footer from "../pages/footer/Footer";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
