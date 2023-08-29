import React from "react";
import { BsDownload } from "react-icons/bs";
import "./download.css";

const Download = () => {
  return (
    <div className="resume-download">
      <a
        className="pdf"
        href="https://www.cakeresume.com/pdf/s--L4NifHQiMnw7JZoifteuig--/ZBLG8.pdf"
        download
      >
        <b> Resume</b> <BsDownload className="download-icon" />
      </a>
    </div>
  );
};

export default Download;
