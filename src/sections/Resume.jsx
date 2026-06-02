import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <span className="section-kicker">Resume</span>
        <h2>Growing through hands-on development, collaboration, and continuous learning.</h2>

        <div className="resume-summary">
          <p>
            I am building my experience through academic work and personal
            projects, with a strong interest in full-stack development and
            product-focused problem solving. My goal is to contribute to teams
            that value quality, curiosity, and steady execution.
          </p>
        </div>

        <div className="resume-grid">
          <div className="resume-column">
            <h3>Education</h3>

            <div className="resume-item">
              <h4>Bachelor of Computer Science</h4>
              <span>2022 - Present</span>
              <p>Hawassa University, Ethiopia</p>
              <p>
                Studying software development, algorithms, database systems,
                networking, and other core computer science fundamentals.
              </p>
            </div>
          </div>

          <div className="resume-column">
            <h3>Experience</h3>

            <div className="resume-item">
              <h4>Student and Personal Development Projects</h4>
              <span>2024 - Present</span>
              <p>
                Designing and building web applications with a focus on clean UI,
                responsive layouts, and practical backend integration.
              </p>
              <ul>
                <li>Built a React portfolio site to present projects and skills professionally.</li>
                <li>Created an e-commerce style frontend with reusable components and modern layout patterns.</li>
                <li>Practiced API integration, database workflows, and full-stack project structure.</li>
                <li>Improved code quality by refining content, usability, and overall presentation.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
