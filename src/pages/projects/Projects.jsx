import React from "react";
import "./projects.css";
import netflix from "../../assets/netflix.png";
import portfolio from "../../assets/portfolio.png";
import frenzo from "../../assets/frenzo.png";

const Projects = () => {
  return (
    <div name="/projects" className="project-container">
      <p className="project-title">PROJECTS</p>
      <div className="project-parent">
        <img className="image" src={netflix} alt="netflix" />
        <div className="project-content">
          <p>
            • Implement user registration and login using Firebase Auth for
            personalized experiences. Allow users to mark items as favorites and
            store their lists in a database.
          </p>
          <p>
            • Add a search bar to find movies and TV shows; fetch data from APIs
            like TMDb. Showcase movies and shows with details, images, and
            titles.
          </p>
          <p>
            • Ensure the site is user-friendly and looks good on different
            devices. Create a visually appealing interface inspired by Netflix's
            style.
          </p>
          <p>
            • Integrate the TMDb API to fetch content and search results. Use
            React for efficient component management and state handling.
          </p>
          <p>
            • Connect to a database (e.g., Firebase Firestore) to store user
            data and favorites. Deploy the site to a hosting platform for user
            access.
          </p>
          <ul className="tech">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Firebase</li>
          </ul>
          <a href="https://github.com/SUNKUMARM/Netflix-clone">github Link</a>
        </div>
      </div>
      <div className="project-parent">
        <img className="image" src={portfolio} alt="portfolio" />
        <div className="project-content">
          <p>
            • Introducing myself, I share my background, passions, and career
            aspirations. I list skills and competencies relevant to my field.
          </p>
          <p>
            • A downloadable resume outlines my education, experience, and
            achievements.
          </p>
          <p>
            • Included are my email, LinkedIn, and other professional profiles
            for easy communication.
          </p>
          <p>
            • In the project section, I provide in-depth insights into
            challenges, solutions, and outcomes of each project. The site is
            designed to be user-friendly and visually appealing across various
            devices.
          </p>
          <ul className="tech">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
          <a href="https://github.com/SUNKUMARM/portfolio">Github Link</a>
        </div>
      </div>

      <div className="project-parent">
        <img className="image" src={frenzo} alt="frenzo" />
        <div className="project-content">
          <p>• Interactive Design: Experience a user-friendly interface.</p>
          <p>• Responsive Layout: Seamlessly adapts to all devices.</p>
          <p>• Incorporates the latest web technologies.</p>
          <p>
            •Engrossing courses and dynamic features.Reflects my passion for
            coding.
          </p>
          <ul className="tech">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
          <a href="https://github.com/SUNKUMARM/Frenzo-clone">Github Link</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
