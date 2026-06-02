import React from "react";
import "./Hero.css";
import profile from "../assets/my-profile-img.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-kicker">Available for internships and freelance work</span>
          <h1>
            Building thoughtful digital products with clean code and modern web
            technology.
          </h1>
          <p className="hero-intro">
            I&apos;m Abdrshikur Ahmed, a full-stack developer focused on creating
            responsive interfaces, reliable backend systems, and polished user
            experiences that feel professional from the first click.
          </p>

          <div className="hero-highlights">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MySQL</span>
          </div>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-frame">
            <img src={profile} alt="Abdrshikur Ahmed" className="hero-img" />
          </div>
          <div className="hero-card">
            <strong>What I bring</strong>
            <p>Responsive UI, API integration, and dependable project execution.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
