import ProjectItem from "./ProjectItem";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-header">
        <h2 className="heading-xl nunita-bold">Projects</h2>
        <a
          href="https://www.linkedin.com/in/k2pbac/"
          className="underline nunita-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          CONTACT ME
        </a>
      </div>
      <div className="project-list">
        <ProjectItem
          title="DESIGN PORTFOLIO"
          technologies={["HTML", "CSS", "JavaScript"]}
          link="https://k2pbac.github.io/loopstudios-landing-page/"
          imageSrc="./images/thumbnail-project-1-large.webp"
          imageAlt="Loopstudios Landing Page"
        />
        <ProjectItem
          title="SPACE TOURISM"
          technologies={["HTML", "CSS", "JavaScript"]}
          link="https://k2pbac.github.io/space-tourism-website/"
          imageSrc="./images/thumbnail-project-2-large.webp"
          imageAlt="Space Tourism Website"
        />
        <ProjectItem
          title="SINGLE PAGE DEVELOPER PORTFOLIO"
          technologies={["HTML", "CSS", "JavaScript"]}
          link="https://k2pbac.github.io/single-page-developer-portfolio/"
          imageSrc="./images/thumbnail-project-3-large.webp"
          imageAlt="Single Page Developer Portfolio"
        />
      </div>
    </div>
  );
}
