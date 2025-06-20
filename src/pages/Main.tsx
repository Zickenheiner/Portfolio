import "../styles/Main.css";
import Infos from "../components/Infos";
import projects from "../data/projects.json";
import skills from "../data/skills.json";
import hobbies from "../data/hobbies.json";
import img18 from "/images/+18.svg";
import Section from "../components/Section";
import Contact from "../components/Contact";
import ModalInfo from "../components/ModalInfo";
import { useEffect, useState } from "react";

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <main className="main-container">
      {isModalOpen && (
        <>
          <div className="modal-overlay" />
          <ModalInfo setIsModalOpen={setIsModalOpen} />
        </>
      )}
      <Infos setIsModalOpen={setIsModalOpen} />
      <img src={img18} alt="+18" />
      <section>
        <Section
          title="My projects"
          contents={projects}
          id="projects"
          isProject={true}
        />
        <Section title="My skills" contents={skills} id="skills" />
        <Section title="My hobbies" contents={hobbies} id="hobbies" />
      </section>
      <Contact />
    </main>
  );
}
