import "../styles/ModalInfo.css";
import hdIcon from "/images/hd_icon.svg";
import ad_icon from "/images/ad_icon.svg";
import messageIcon from "/images/message_icon.svg";
import plus18Icon from "/images/+18_icon.svg";
import top10Icon from "/images/top10_icon.svg";
import patientTransporterImg from "/images/patient_transporter_img.svg";
import careerSwitchImg from "/images/career_switch_img.svg";
import levelUpImg from "/images/level_up_img.svg";
import closeIcon from "/images/close_icon.svg";
import Episode from "./Episode";
import { motion } from "motion/react";

interface ModalInfoProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function ModalInfo({ setIsModalOpen }: ModalInfoProps) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 2.2 } },
  };

  const episodes = [
    {
      id: 1,
      title: "Brancardier : 8 Years on the Move",
      description:
        "For 8 years, I worked as a patient transporter in a clinic. It was intense, and human. Teamwork, care, and calm in stressful situations...I learned a lot.",
      img: patientTransporterImg,
      time: "8 years",
      selected: false,
    },
    {
      id: 2,
      title: "Career switch : from care to code",
      description:
        "Tech had been my passion for 4 years and in 2024, I joined Wild Code School in Toulouse and became a Web & Mobile Developer. I like to understand what I do and do what I understand ; that’s how I build things that make sense.",
      img: careerSwitchImg,
      time: "5 months",
      selected: false,
    },
    {
      id: 3,
      title: "Level Up : The Bachelor",
      description:
        "Next step: keep learning and go further. In September 2025, I’ll start a Bachelor’s degree in Computer Science (3rd year) at Ynov Campus Toulouse, in a work-study program. More code, more projects, more growth!",
      img: levelUpImg,
      time: "1 years",
      selected: true,
    },
  ];
  return (
    <div className="modal-wrapper">
      <motion.div
        className="modal-info-container"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button type="button" onClick={handleClose} className="close-icon">
          <img src={closeIcon} alt="Close Icon" />
        </button>
        <span>
          <p>2025</p>
          <p>3 Episodes</p>
          <img src={hdIcon} alt="HD Icon" />
          <img src={ad_icon} alt="Ad Icon" />
          <img src={messageIcon} alt="Message Icon" />
        </span>
        <span>
          <img src={plus18Icon} alt="+18 Icon" />
          <p>developer, fullstack</p>
        </span>
        <section>
          <h2>
            <img src={top10Icon} alt="Top 10 Icon" /> #1 in fullstack
            development today
          </h2>
          <p>
            Hi! I’m Rémi, I’m 27 and I love coding. I worked for 8 years as a
            patient transporter in a clinic. It was a great experience, full of
            learning and teamwork. But my passion for tech caught up with me. In
            2024, I joined Wild Code School in Toulouse and got my Web & Mobile
            Developer diploma (level 5). Next? Starting a Bachelor’s degree at
            Ynov Campus Toulouse, in a work-study program from September 2025.
          </p>
          <section>
            <h3>Episodes</h3>
            <section>
              {episodes.map((episode) => (
                <Episode key={episode.id} episode={episode} />
              ))}
            </section>
            <p>To be continued ...</p>
          </section>
        </section>
      </motion.div>
    </div>
  );
}
