import React, { useEffect, useState } from "react";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.jpeg";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScreen = () => {
      const element = document.getElementById("myElement");
      const screenWidth = window.innerWidth;

      if (screenWidth < 760) {
        element.style.display = "none";
      } else {
        element.style.display = "flex";
      }
    };
    handleScreen();
    window.addEventListener("resize", handleScreen);
  }, []);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-parent">
          <img className="navbar-logo" src={logo} alt="logo" />
          <p className="navbar-title">SUNKUMAR</p>
        </div>
        <div className="navbar-list">
          <div onClick={() => setShow(!show)} className="navbar-icon-parent">
            <AiOutlineMenu className="navbar-icon" />
          </div>
          <div id="myElement">
            <NavLink to={"/"}>HOME</NavLink>
            <Link to={"/about"} smooth={true} duration={500}>
              ABOUT
            </Link>
            <Link to={"/projects"} smooth={true} duration={500}>
              PROJECTS
            </Link>
            <Link to={"/skills"} smooth={true} duration={500}>
              SKILLS
            </Link>
            <NavLink to={"/resume"}>RESUME</NavLink>
            <Link to={"/footer"} smooth={true} duration={500}>
              CONTACT
            </Link>
          </div>
        </div>
      </div>
      {show && (
        <div className="navbar-list-content">
          <NavLink to={"/"}>HOME</NavLink>
          <Link to={"/about"} smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link to={"/projects"} smooth={true} duration={500}>
            PROJECTS
          </Link>
          <Link to={"/skills"} smooth={true} duration={500}>
            SKILLS
          </Link>
          <NavLink to={"/resume"}>RESUME</NavLink>
          <Link to={"/footer"} smooth={true} duration={500}>
            CONTACT
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
