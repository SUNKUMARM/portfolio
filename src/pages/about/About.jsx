import React from "react";
import profile from "../../assets/profile.jpeg";
import "./about.css";

const About = () => {
  return (
    <div name="/about" className="about-container">
      <div className="about-parent">
        <p className="title"> A LITTLE BIT ABOUT ME</p>
        <img className="profile" src={profile} alt="profile" />
        <div className="paragraph">
          <p>
            Hello, I'm Sunkumar. I hold a Bachelor's degree in BSc Mathematics
            from Chikkana Government Arts and Science College, where I also
            pursued my Master's degree in MSc Mathematics. My educational
            journey began at Kadri Mills HR Secondary School.
          </p>
          <p>
            After completing my Master's degree, I embarked on a career in
            education as an online tutor for 1.5 years at Focus Edumatics.During
            this time, I made the exciting decision to transition into the field
            of web development. To equip myself for this new endeavor, I
            enrolled in a Frontend Development with React course. This immersive
            experience allowed me to acquire proficiency in various
            technologies, including HTML, CSS, JavaScript, React, as well as Git
            and GitHub.
          </p>
          <p>
            I'm consistently eager to learn and thrive on new challenges. My
            dedication to creativity and technical excellence equips me to
            contribute effectively in collaborative development environments.
            I'm excited about this new phase in my web development career, where
            I anticipate taking on exciting challenges and crafting innovative
            web solutions.
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
