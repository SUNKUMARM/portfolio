import React from "react";
import "./home.css";
import About from "../about/About";
import { BsChevronDoubleDown } from "react-icons/bs";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Footer from "../footer/Footer";
import NavBar from "../../navbar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div name="/" className="home-container">
        <div className="home-parent">
          <div className="home-content">
            <p>Hi, my name is </p>
            <h1>Sunkumar M.</h1>
            <h1>Front End Developer/React Js. </h1>
            <div id="intro">
              Hello and welcome to my portfolio! I'm a front-end developer
              passionate about crafting exceptional user experiences using
              React.js.
            </div>
            <BsChevronDoubleDown className="home-icon" />
          </div>
        </div>
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
};

export default Home;

// <Link to={"/"} smooth={true} duration={500}>
// HOME
// </Link>
// <Link to={"/about"} smooth={true} duration={500}>
// ABOUT
// </Link>
// <Link to={"/projects"} smooth={true} duration={500}>
// PROJECTS
// </Link>
// <Link to={"/skills"} smooth={true} duration={500}>
// SKILLS
// </Link>
// <NavLink to={"/resume"} smooth={true} duration={500}>
// RESUME
// </NavLink>
// <Link to={"/footer"} smooth={true} duration={500}>
// CONTACT
// </Link>
