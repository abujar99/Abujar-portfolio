import React from "react";
import "./Hero.css";
import me from "../../assets/Abujar.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={me}alt="" />
      <h1>
        <span>I'm Abujar Shaikh,</span> frontend developer based in IND.
      </h1>
      <p>
        I am a frontend developer from Maharashtra, IND with 1 year of
        experience in baap company.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a
          href="https://drive.google.com/file/d/1YDbVcTT1hbzrgFctZhaO1ihSjDV40G1c/view?usp=drive_link"
          download="Ajinkya_Nehe_Resume.pdf"
          className="hero-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
      <div className="hero-icon">
        <div className="hero-github">
          <a
            href="https://github.com/abujar99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <div className="hero-gitlab">
          <a
            href="https://gitlab.com/abujarshaikh8180"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGitlab size={30} />
          </a>
        </div>

        <div className="hero-linkdin">
          <a
            href="https://www.linkedin.com/in/abujar-shaikh-25329b263/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
