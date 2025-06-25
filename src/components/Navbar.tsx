import "../styles/Navbar.css";
import logoImg from "/images/remiflix.svg";
import githubIcon from "/images/github_icon.svg";
import linkedinIcon from "/images/linkedin_icon.svg";
import paperClipIcon from "/images/paperclip_icon.svg";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <img src={logoImg} alt="logo" className="logo" />
        <ul className="navbar-list">
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#hobbies">
            <li>Hobbies</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <div className="navbar-right">
        <a
          href="https://github.com/Zickenheiner"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="github-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/remi-zickenheiner/"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="linkedin-icon" />
        </a>
        <a href="/images/CV.pdf" download="Remi_Zickenheiner_CV.pdf">
          <img src={paperClipIcon} alt="paperclip-icon" />
        </a>
      </div>
    </nav>
  );
}
