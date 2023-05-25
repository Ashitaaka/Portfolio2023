import React from "react";
import linkedinIcon  from "../assets/images/linkedin_icon.svg";
import cvIcon from "../assets/images/cv_icon.svg";
import githubIcon from "../assets/images/github_icon.svg";
import cv from "../assets/images/cv-olivier-gomez.pdf";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
          <a href={cv} download={cv} target="_blank">
            <img src={cvIcon} alt="Curriculum Vitae" />
          </a>
          <a
            href="https://www.linkedin.com/in/olivier-gomez-99044225a/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/Ashitaaka?tab=repositories"
            target="_blank"
          >
            <img src={githubIcon} alt="Github" />
          </a>
      </div>
    </footer>
  );
};

export default Footer;
