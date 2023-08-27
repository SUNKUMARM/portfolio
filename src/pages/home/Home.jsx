import React from "react";
import NavBar from "../../navbar/NavBar";
import "./home.css";
import { BsChevronDoubleDown } from "react-icons/bs";
const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
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
    </div>
  );
};

export default Home;
