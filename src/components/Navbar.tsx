import "../styles/Navbar.css";
import logoImg from "/images/remiflix.svg";
import magnifyingGlassImg from "/images/magnifying_glass_icon.svg";
import arrowImg from "/images/arrow_icon.svg";
import accountImg from "/images/account_icon.svg";
import bellImg from "/images/bell_icon.svg";

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
        <img src={magnifyingGlassImg} alt="magnifying_glass_icon" />
        <p>Developer</p>
        <img src={bellImg} alt="bell_icon" />
        <img src={accountImg} alt="account_icon" />
        <img src={arrowImg} alt="arrow_icon" />
      </div>
    </nav>
  );
}
