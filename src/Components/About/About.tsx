import "./About.css";
import about_profile from "../../assets/aboutme_photo.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-top">
          <img src={about_profile} alt="profile-image" />
          <p>
            Born and raised in Japan, currently living in Vancouver. <br />
            I worked as a software engineer for over 3 years in a company.<br />
            I am always open to and enjoy communicating with people from
            different backgrounds and cultures.<br/>
            I enjoy learning new technologies and tools, writing articles.<br/>
            My motivation for developing this website is to share my learnings with the rest of the world.
          </p>
        </div>
        <div className="about-bottom">
          <div className="about-content">
            <h2>Experience</h2>
            <p>Full Stack Engineer</p>
            <p>Mitsui E&S Systems Research Inc. - Aichi, Japan</p>
            <p>Apr. 2021 - Jul. 2024</p>
          </div>
          <div className="about-content">
            <h2>Skills</h2>
            <div className="skill-detail">
              <div className="skills">
                <p>FrontEnd</p>
                <p>
                  TypeScript / JavaScript / React.js / Next.js / Anuglar.js /
                  Chakra UI / Tailwind CSS / shadcn / HTML / CSS
                </p>
              </div>
              <div className="skills">
                <p>BackEnd</p>
                <p>
                  Node.js / C# / Express.js / ASP.NET / ASP.NET Core /
                  PostgreSQL / Prisma / Oracle / MongoDB
                </p>
              </div>
              <div className="skills">
                <p>Tools</p>
                <p>Git / GitHub / GitLab / AWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
