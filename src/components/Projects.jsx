import ProjectItem from "./ProjectItem";
import "./Projects.css";
import { projects } from "../projects";

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
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            technologies={project.technologies}
            link={project.link}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}
