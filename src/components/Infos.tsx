import "../styles/Infos.css";
import top10Icon from "/images/top10_icon.svg";
import moreInfoIcon from "/images/more_info_icon.svg";

interface InfosProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function Infos({ setIsModalOpen }: InfosProps) {
  const handleMoreInfoClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="infos-container" id="about">
      <section>
        <img src={top10Icon} alt="top10" />
        <h2>
          #1 in fullstack development <br />
          today
        </h2>
      </section>
      <p>
        In this biopic, discover Rémi's passion, his projects and his skills,
        all set in a cinematic universe.
      </p>
      <section>
        <button type="button" onClick={handleMoreInfoClick}>
          <img src={moreInfoIcon} alt="more_info_icon" />
          More info
        </button>
      </section>
    </div>
  );
}
