import "../styles/Section.css";

interface ContentsProjectType {
  img: string;
  url: string;
}

interface SectionProps {
  title: string;
  contents: string[] | ContentsProjectType[];
  id: string;
  isProject?: boolean;
}

export default function Section({
  title,
  contents,
  id,
  isProject,
}: SectionProps) {
  return (
    <div className="section-container" id={id}>
      <h2>{title}</h2>
      <section>
        {contents.map((content: string | ContentsProjectType) =>
          isProject && typeof content !== "string" ? (
            content.url !== "" ? (
              <a
                href={content.url}
                target="_blank"
                rel="noopener noreferrer"
                key={content.url}
              >
                <img
                  src={content.img}
                  alt={content.img}
                  className={`section-img ${isProject && "projects"}`}
                />
              </a>
            ) : (
              <img
                src={content.img}
                alt={content.img}
                className={`section-img`}
              />
            )
          ) : (
            <img
              src={typeof content === "string" ? content : ""}
              alt={typeof content === "string" ? content : ""}
              key={typeof content === "string" ? content : ""}
              className="section-img"
            />
          )
        )}
      </section>
    </div>
  );
}
