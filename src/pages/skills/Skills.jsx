import React from "react";
import "./skills.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/js.png";
import react from "../../assets/react.png";
import git from "../../assets/github.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigator = useNavigate();
  return (
    <div name="/skills" className="skill-container">
      <div className="skill-parent">
        <p className="skill-title">SKILLS</p>
        <p className="skill-content">
          I've been doing web development for about 8 months now, and I'm always
          eager to learn more in this fast paced industry.
        </p>
        <p className="skill-content">SOME TECHNOLOGIES I'VE WORKED WITH:</p>
        <div className="skill-tech">
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={javascript} alt="javascript" />
          <img src={react} alt="react" />
          <img src={git} alt="git" />
        </div>
      </div>
      <div className="resume-page" onClick={() => navigator("/resume")}>
        <p>
          CHECK OUT MY RESUME!
          <AiOutlineArrowRight className="skill-icon" />
        </p>
      </div>
    </div>
  );
};

export default Skills;
