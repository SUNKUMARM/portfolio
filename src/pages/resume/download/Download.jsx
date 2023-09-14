import React from "react";
import { BsDownload } from "react-icons/bs";
import "./download.css";

const Download = () => {
  return (
    <div className="resume-download">
      <a
        className="pdf"
        href="https://www.cakeresume.com/pdf/s--FKawsZ21kl6iKYftFfJr7A--/62vzg.pdf"
        download
      >
        <b> Resume</b> <BsDownload className="download-icon" />
      </a>
    </div>
  );
};

export default Download;
