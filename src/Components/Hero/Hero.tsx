import React, { useRef } from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/nanaokamoto.pdf";
import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = () => {
  const aRef = useRef<HTMLAnchorElement | null>(null);
  const url = resume;

  const handleDownload = () => {
    if (aRef.current) {
      (aRef.current as HTMLAnchorElement).click();
    }
  };

  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <h1>
          Nana Okamoto
          <br />
          <span className="highlight">Fullstack</span> Engineer
        </h1>
        <div className="hero-resume" onClick={handleDownload}>
          RESUME
        </div>
        <a
          ref={aRef}
          href={url}
          style={{ display: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
      <p>
        I'm a fullstack engineer with 3+ years of experience.
        <br />
        I'm currently focused on expanding my experience designing and
        developing high performing web applications.
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link-about" offset={50} href="#about">
          MORE
          <br />
          DETAILS
          <AiOutlineArrowDown className="icon" />
        </AnchorLink>
      </div>
    </div>
  );
};

export default Hero;
