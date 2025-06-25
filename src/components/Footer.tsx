import "../styles/Footer.css";
import githubIcon from "/images/github_icon.svg";
import linkedinIcon from "/images/linkedin_icon.svg";
import paperClipIcon from "/images/paperclip_icon.svg";
export default function Footer() {
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
    <footer className="footer-container">
      <section>
        {footerLinks.map((link) => (
          <p key={link}>{link}</p>
        ))}
      </section>
      <p>© 1997-{new Date().getFullYear()} Remiflix, Inc.</p>
    </footer>
  );
}
