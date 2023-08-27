import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <p>
        <BiLogoGmail />
      </p>
      <p>
        <AiFillGithub />
      </p>
      <p>
        <AiFillLinkedin />
      </p>
    </div>
  );
};

export default Contact;
