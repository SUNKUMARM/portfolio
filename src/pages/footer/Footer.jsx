import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { PiPhoneCallFill } from "react-icons/pi";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contact-parent">
        <p className="footer-title">GET IN TOUCH!</p>
        <p className="footer-content">
          Whether you have an idea for a project or just want to chat, feel free
          to shoot me an email!
        </p>
        <div>
          <a
            className="hello"
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftMSsbgZrCWJZTzhThltTzmRKJfLBrbHBkSCvLDclpdWfqrDcqmFdrsfxdZhgzHLTWmjV"
          >
            Say Hello
            <FiSend className="send-icon" />
          </a>
        </div>
      </div>
      <div className="contact-icons-parent">
        <p className="contact-icons flex">
          <PiPhoneCallFill className="bold" />
          <b className="bold">+91-9786297723</b>
        </p>
        <p className="flex">
          <BiLogoGmail className="footer-icon" />
          <a
            className="contact-icons"
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftMSsbgZrCWJZTzhThltTzmRKJfLBrbHBkSCvLDclpdWfqrDcqmFdrsfxdZhgzHLTWmjV"
          >
            <b className="bold">E-mail</b>
          </a>
        </p>
        <p className="flex">
          <AiFillGithub className="footer-icon" />
          <a className="contact-icons" href=" https://github.com/SUNKUMARM">
            <b className="bold">Github</b>
          </a>
        </p>
        <p className="flex">
          <AiFillLinkedin className="footer-icon" />
          <a
            className="contact-icons"
            href=" https://www.linkedin.com/in/sunkumar-m-41298b286/"
          >
            <b className="bold">LinkedIn</b>
          </a>
        </p>
        <p className="contact-icons flex">
          <AiOutlineCopyrightCircle className="bold" />
          <b className="bold">2023 By Sunkumar M</b>
        </p>
      </div>
    </div>
  );
};

export default Footer;
