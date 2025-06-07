import "../styles/Main.css";
import Infos from "../components/Infos";
import geocodeProjectImg from "/images/geocode_project_img.svg";
import pokemonArenaImg from "/images/pokemonarena_project_img.svg";
import walletImg from "/images/wallet_project_img.svg";
import reactSkillsImg from "/images/react_skills_img.svg";
import nodeSkillsImg from "/images/node_skills_img.svg";
import sqlSkillsImg from "/images/sql_skills_img.svg";
import soliditySkillsImg from "/images/solidity_skills_img.svg";
import pythonSkillsImg from "/images/python_skills_img.svg";
import climbingHobbiesImg from "/images/climbing_hobbies_img.svg";
import roboticsHobbiesImg from "/images/robotics_hobbies_img.svg";
import cookingHobbiesImg from "/images/cooking_hobbies_img.svg";
import snowboardHobbiesImg from "/images/snowboard_hobbies_img.svg";
import driftHobbiesImg from "/images/drift_hobbies_img.svg";
import img18 from "/images/+18.svg";
import Section from "../components/Section";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Main() {
  const projects = [
    { img: geocodeProjectImg, url: "https://geocode-orcin.vercel.app/" },
    { img: pokemonArenaImg, url: "https://pokemon-arenadex.onrender.com/" },
    { img: walletImg, url: "https://wallet-zickenheiner.vercel.app/" },
  ];
  const skills = [
    reactSkillsImg,
    nodeSkillsImg,
    sqlSkillsImg,
    soliditySkillsImg,
    pythonSkillsImg,
  ];
  const hobbies = [
    climbingHobbiesImg,
    roboticsHobbiesImg,
    cookingHobbiesImg,
    snowboardHobbiesImg,
    driftHobbiesImg,
  ];
  return (
    <div className="main-container">
      <Infos />
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
      <Footer />
    </div>
  );
}
