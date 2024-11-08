import React from "react";
import "./MyWork.css";
import project_1 from "../../assets/project_1.svg";
import project_2 from "../../assets/project_2.svg";
import project_3 from "../../assets/project_3.svg";
import project_4 from "../../assets/project_4.svg";
import { LiaArrowRightSolid } from "react-icons/lia";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>works</h1>
        <h1 className="flipped-text">works</h1>
      </div>
      <div className="mywork-container">
        <div className="grid-item item1">
          <h4>
            <span className="proj-no">01</span>
            <br />
            UniVeritas
          </h4>
          <img src={project_1} alt="project image" />
        </div>
        <div className="grid-item item2">
          <h4>
            <span className="proj-no">02</span>
            <br />
            Logoipsum
          </h4>
          <img src={project_2} alt="project image" />
        </div>
        <div className="grid-item item3">
          <h4>
            <span className="proj-no">03</span>
            <br />
            Straminboy
          </h4>
          <img src={project_3} alt="project image" />
        </div>
        <div className="grid-item item4">
          <h4>
            See More
            <LiaArrowRightSolid className="icon" />
          </h4>
        </div>
        <div className="grid-item item5">
          <h4>
            <span className="proj-no">04</span>
            <br />
            Metagame
          </h4>
          <img src={project_4} alt="project image" />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
