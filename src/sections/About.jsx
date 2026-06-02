import React from "react";
import "./About.css";
import profile from "../assets/my-profile-img.jpg";
import {
  FaGithub,
  FaGitAlt,
  FaMobileAlt,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiJavascript, SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { label: "React", Icon: FaReact, tone: "react" },
  { label: "JavaScript", Icon: SiJavascript, tone: "javascript" },
  { label: "Node.js", Icon: FaNodeJs, tone: "node" },
  { label: "Express.js", Icon: SiExpress, tone: "express" },
  { label: "MySQL", Icon: SiMysql, tone: "mysql" },
  { label: "REST APIs", Icon: TbApi, tone: "api" },
  { label: "Responsive Design", Icon: FaMobileAlt, tone: "responsive" },
  { label: "Git & GitHub", Icon: FaGithub, tone: "github" },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-left">
          <div className="about-image-shell">
            <img src={profile} alt="Abdrshikur Ahmed" className="about-img" />
          </div>
        </div>

        <div className="about-right">
          <span className="section-kicker">About Me</span>
          <h2>Focused on building reliable products that look as good as they perform.</h2>
          <p>
            I am a Computer Science student and full-stack developer who enjoys
            turning ideas into practical web experiences. My work centers on
            building clean interfaces, integrating APIs, and writing maintainable
            code that supports long-term growth.
          </p>
          <p>
            I care about usability, performance, and clear communication. Whether
            I am developing a portfolio, an e-commerce experience, or a student
            project, I aim to deliver work that feels polished, trustworthy, and
            ready for real users.
          </p>

          <div className="about-metrics">
            <div>
              <strong>Frontend</strong>
              <span>Accessible, responsive interfaces with modern React patterns.</span>
            </div>
            <div>
              <strong>Backend</strong>
              <span>Structured APIs and database-driven features with Node.js and MySQL.</span>
            </div>
          </div>

          <h3>Core Skills</h3>
          <div className="skills">
            {skills.map(({ label, Icon, tone }) => (
              <span key={label} className="skill-chip">
                <Icon className={`skill-icon ${tone}`} aria-hidden="true" />
                <span className="skill-label">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
