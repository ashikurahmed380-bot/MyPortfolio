import React from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "Handicraft Ethiopian Marketplace",
    description:
      "A modern e-commerce frontend concept focused on product discovery, layout clarity, and responsive browsing.",
    image: "/project1.png",
    github: "https://github.com/ashikurahmed380-bot/Handicraft-Ethiopian-MarketPlace",
    demo: "",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A React-based portfolio built to present my skills, projects, and professional profile with a clean visual system.",
    image: "/image.png",
    github: "https://github.com/ashikurahmed380-bot/portfolio",
    demo: "",
    stack: ["React", "CSS", "Vite"],
  },
  {
    title: "Responsive Web Practice Project",
    description:
      "A responsive interface project created to strengthen layout systems, spacing, and cross-device presentation.",
    image: "/image.png",
    github:
      "https://github.com/ashikurahmed380-bot/Responsive-Website-html-css-javascript-",
    demo: "",
    stack: ["HTML", "CSS", "Responsive UI"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <span className="section-kicker">Projects</span>
        <h2>Selected work that reflects my growth as a developer.</h2>
        <p className="portfolio-intro">
          These projects highlight my focus on clean frontends, practical
          implementation, and continuous improvement across real development work.
        </p>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article key={project.title} className="portfolio-card">
              <img src={project.image} alt={project.title} />

              <div className="portfolio-content">
                <div className="portfolio-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="portfolio-buttons">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : (
                    <span className="portfolio-status">Demo coming soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
