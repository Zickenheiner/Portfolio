import "../styles/Contact.css";
import mailIcon from "/images/mail_icon.svg";

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact me</h2>
      <h3>Interested in working together ?</h3>
      <a href="mailto:remi.zicken@gmail.com">
        <img src={mailIcon} alt="" />
        remi.zicken@gmail.com
      </a>
    </div>
  );
}
