import React, { useEffect, useState } from "react";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.jpeg";

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
    <>
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
            <p>ABOUT</p>
            <p>PROJECTS</p>
            <p>RESUME</p>
            <p>CONTACT</p>
          </div>
        </div>
      </div>
      {show && (
        <div className="navbar-list-content">
          <p>ABOUT</p>
          <p>PROJECTS</p>
          <p>RESUME</p>
          <p>CONTACT</p>
        </div>
      )}
    </>
  );
};

export default NavBar;
