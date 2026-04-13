import { useState } from "react";

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase(),
  );
}

export default function ProjectItem({
  title,
  technologies,
  link,
  imageSrc,
  imageAlt,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isCodeButtonHovered, setIsCodeButtonHovered] = useState(false);

  const viewProject = !isHovered ? (
    <div className="view-project-overlay">
      <p
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        className={`button-text ${isButtonHovered ? "hovered" : ""}`}
      >
        {"View Project".toUpperCase()}
      </p>
    </div>
  ) : null;

  const viewCode = !isHovered ? (
    <div className="view-project-overlay">
      <p
        onMouseEnter={() => setIsCodeButtonHovered(true)}
        onMouseLeave={() => setIsCodeButtonHovered(false)}
        className={`button-text-code ${isCodeButtonHovered ? "hovered" : ""}`}
      >
        {"View Code".toUpperCase()}
      </p>
    </div>
  ) : null;

  return (
    <div className="project-item">
      {viewProject}
      {viewCode}
      <a
        className="image-container"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={imageSrc} alt={imageAlt} />
      </a>
      <p className="text-md">{toTitleCase(title)}</p>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>
            <img className="icon" src={`./icons/${tech}.svg`} alt={tech} />
          </li>
        ))}
      </ul>
    </div>
  );
}
