import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>{"\u00A9"} 2026 Abdrshikur Ahmed. Crafted with React and a focus on clean presentation.</p>

        <div className="socials">
          <a
            href="https://github.com/ashikurahmed380-bot"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
