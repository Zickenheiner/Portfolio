import "../styles/Footer.css";
import githubIcon from "/images/github_icon.svg";
import linkedinIcon from "/images/linkedin_icon.svg";
import paperClipIcon from "/images/paperclip_icon.svg";
export default function Footer() {
  //fais un tableau de tout les <p>
  const footerLinks = [
    "Open Source Credits",
    "Release Notes",
    "Coffee Settings",
    "Ctrl+S to Save the Planet",
    "The Matrix Terminal",
    "Build Logs",
    "Deploy and Pray",
    "Works on My Machine™",
    "console.log()",
    "Delete node_modules",
    "Manage LocalStorage",
    "Terms of npm install",
  ];
  return (
    <div className="footer-container">
      <section>
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
      </section>
      <section>
        {footerLinks.map((link) => (
          <p key={link}>{link}</p>
        ))}
      </section>
      <p>© 1997-{new Date().getFullYear()} Remiflix, Inc.</p>
    </div>
  );
}
