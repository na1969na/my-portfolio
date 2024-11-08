import React from "react";
import "./Contact.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaDev } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <p>
          I'm currently availble to take on new projetcts, so feel free to send
          me a message about anything that you want me to work on.
          <br />
          You can contact anytime.
        </p>
        <ul className="contact-link">
          <li>
            <a href="https://x.com/na1969na">
              <FaSquareXTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/na1969na">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nana-okamoto-428b58318/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://dev.to/na1969na">
              <FaDev />
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-getintouch">
        <a className="my-email" href="mailto:nanaokamoto.tech@gmail.com">
          <p>Send Me a Mail</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
