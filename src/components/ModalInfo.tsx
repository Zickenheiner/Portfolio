import "../styles/ModalInfo.css";
import hdIcon from "/images/hd_icon.svg";
import ad_icon from "/images/ad_icon.svg";
import messageIcon from "/images/message_icon.svg";
import plus18Icon from "/images/+18_icon.svg";
import top10Icon from "/images/top10_icon.svg";
import closeIcon from "/images/close_icon.svg";
import Episode from "./Episode";
import episodes from "../data/episodes.json";
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
              {episodes.map((episode, index) => (
                <Episode key={episode.title} episode={episode} id={index + 1} />
              ))}
            </section>
            <p>To be continued ...</p>
          </section>
        </section>
      </motion.div>
    </div>
  );
}
