import React, { useEffect, useState } from "react";
import "./Header.css";
import profileImage from "../assets/my-profile-img.jpg";

const sections = ["hero", "about", "resume", "portfolio", "contact"];

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <a href="#hero" className="brand" aria-label="Go to home section">
          <img
            src={profileImage}
            alt="Abdrshikur Ahmed"
            className="brand-image"
          />
          <span className="brand-copy">
            <span className="brand-kicker">Portfolio</span>
            <span className="profile-name">Abdrshikur Ahmed</span>
            <span className="profile-title">Full-Stack Developer</span>
          </span>
        </a>

        <nav className="nav-menu" aria-label="Primary navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${
                    activeSection === item.id ? "active" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
