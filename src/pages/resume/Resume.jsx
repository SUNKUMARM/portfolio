import React from "react";
import "./resume.css";
import Download from "../resume/download/Download";
import logo from "../../assets/logo.jpeg";
import { NavLink } from "react-router-dom";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="res-nav">
        <div className="resume-nav">
          <div className="logo-parent">
            <img className="navbar-logo" src={logo} alt="logo" />
            <p className="navbar-title">SUNKUMAR</p>
          </div>
          <div>
            <NavLink className="nav-col" to={"/"}>
              HOME
            </NavLink>
          </div>
        </div>
      </div>
      <div className="resume-parent">
        <div className="download-parent">
          <Download />
        </div>
        <div>
          <h1 className="resume-name role-hover">Sunkumar M</h1>
          <h3 className="resume-role role-hover">
            Frontend Developer - React.js
          </h3>
          <div className="resume-contact font">
            <p>Mobile: +91-9786297723</p>
            <p>Website:</p>
            <p>Email: sunkumar.mayilvel@gmail.com</p>
            <p>LinkedIn: https://www.linkedin.com/in/sunkumar-m-41298b286/</p>
            <p>Github: https://github.com/SUNKUMARM</p>
            <p>Adders: Coimbatore, Tamil Nadu, India.</p>
          </div>
        </div>
        <div className="resume-content-parent">
          <h3 className="sub-title hover">Objective</h3>
          <p className="font objective">
            Driven and enthusiastic, React.js web developer with a passion for
            creating userfriendly and engaging web applications using React.js.
            Seeking a challenging position as a front-end developer at React.js,
            where I can apply my skills and knowledge to create user-friendly
            and engaging web applications.
          </p>
        </div>
        <div className="resume-content-parent">
          <h3 className="sub-title hover">Work Experience</h3>
          <div className="education-content font">
            <p>
              Online Tutor • Focus Edumatics Private Limited, Coimbatore March
              2022 - July 2023.
            </p>
            <br />
            <p>
              • Provide online tutoring services, delivering engaging and
              comprehensive math lessons to students.
            </p>
          </div>
        </div>
        <div className="resume-content-parent">
          <h3 className="sub-title hover">Skills</h3>
          <div className=" skill font">
            <p>• HTML5</p>
            <p>• CSS3</p>
            <p>• Tailwind CSS</p>
            <p>• JavaScript</p>
            <p>• React.js</p>
            <p>• Redux</p>
            <p>• React Query</p>
            <p>• Git and Github</p>
            <p>• APIs</p>
            <p>• REST</p>
          </div>
        </div>
        <div className="resume-content-parent">
          <h3 className="sub-title hover">Education</h3>
          <div className="education-content font">
            <p>
              Master's and Bachelor's degree from Chikkana Government Arts
              College in 2016 - 2021.
            </p>
            <p>• M.Sc Mathematics - CGPA: 8.0/10</p>
            <p>• B.Sc Mathematics - CGPA: 6.1/10</p>
          </div>
          <div className="education-content font">
            <p>HSC from Kadri Mills Hr Sec School - 2015 - 2016</p>
            <p>• HSC - Percentage: 69.58%</p>
          </div>
          <div className="education-content font">
            <p>SSLC from Government High school</p>
            <p>• SSLC - Percentage: 89.8%</p>
          </div>
          <div className="education-content font">
            <p>
              Frontend Development with React.Js from Frenzo.io - Jan 2023 - Aug
              2023
            </p>
          </div>
        </div>
        <div className="resume-content-parent">
          <h3 className="sub-title hover">Projects</h3>
          <div>
            <h5 className="project-name hover">Netflix clone</h5>
            <p className="font objective">
              Build a Netflix-inspired site using HTML, CSS, JavaScript, React,
              and Firebase for auth and database. Including user authentication,
              favorite lists, and a search function for movies and TV shows.
            </p>
            <br />
            <p className="font objective">
              • Github: https://github.com/SUNKUMARM/Netflix-clone
            </p>
          </div>
          <div>
            <h5 className="project-name hover">Portfolio</h5>
            <p className="font objective">
              I've crafted a portfolio using HTML, CSS, JavaScript, and React,
              showcasing my latest project. Explore my work in a sleek and
              interactive design, highlighting my skills and accomplishments.
            </p>
            <br />
            <p className="font objective">
              • Github: https://github.com/SUNKUMARM/portfolio
            </p>
          </div>
        </div>
        <div className="">
          <h3 className="sub-title hover">Languages</h3>
          <p className="education-content font objective">
            Tamil — Native or Bilingual
          </p>
          <p className="education-content font objective">
            English — Intermediate
          </p>
        </div>
        <Download />
      </div>
    </div>
  );
};

export default Resume;
