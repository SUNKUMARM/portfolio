import React, { useEffect, useState } from "react";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.jpeg";
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
            <NavLink to={"/about"}>ABOUT</NavLink>
            <NavLink to={"/projects"}>PROJECTS</NavLink>
            <NavLink to={"/skills"}>SKILLS</NavLink>
            <NavLink to={"/resume"}>RESUME</NavLink>
            <NavLink to={"/footer"}>CONTACT</NavLink>
          </div>
        </div>
      </div>
      {show && (
        <div className="navbar-list-content">
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to={"/about"}>ABOUT</NavLink>
          <NavLink to={"/projects"}>PROJECTS</NavLink>
          <NavLink to={"/skills"}>SKILLS</NavLink>
          <NavLink to={"/resume"}>RESUME</NavLink>
          <NavLink to={"/footer"}>CONTACT</NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
