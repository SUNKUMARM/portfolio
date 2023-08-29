import React from "react";
import profile from "../../assets/profile.jpeg";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-parent">
        <p className="title"> A LITTLE BIT ABOUT ME</p>
        <img className="profile" src={profile} alt="profile" />
        <div className="paragraph">
          <p>
            I am a dedicated and passionate web developer with a strong focus on
            front-end development. I am driven by my desire to create
            captivating user experiences that are both functional and visually
            appealing.
          </p>
          <p>
            I have a Master's degree from Chikkana Government Arts College and I
            also have experience working as an online maths tutor.
          </p>
          <p>
            I am always eager to learn new things and embrace new challenges. I
            am confident that my dedication to creativity and technical
            excellence will enable me to contribute effectively to a
            collaborative development environment.
          </p>
          <p>
            Thank you for delving into my story. I'm genuinely excited about the
            prospect of connecting, collaborating, and making a tangible impact
            on innovative projects that drive change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
