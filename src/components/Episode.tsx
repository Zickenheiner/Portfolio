import "../styles/Episode.css";

interface EpisodeProps {
  episode: {
    id: number;
    title: string;
    description: string;
    img: string;
    time: string;
    selected: boolean;
  };
}

export default function Episode({ episode }: EpisodeProps) {
  const { id, title, description, img, time, selected } = episode;
  return (
    <article className={`episode-container ${selected ? "selected" : ""}`}>
      <div>
        <span>{id}</span>
        <img src={img} alt={title} />
      </div>
      <section>
        <div className="episode-title-container">
          <h3>{title}</h3>
          <p>{time}</p>
        </div>
        <p>{description}</p>
      </section>
    </article>
  );
}
