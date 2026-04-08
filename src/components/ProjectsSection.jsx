import { Reveal } from "./Reveal";

export function ProjectsSection({ projects }) {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <Reveal key={project.name} className="project-card" delay={index * 0.1}>
          <div className="project-top">
            <p className="project-kicker">Projeto</p>
            <h3>{project.name}</h3>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="project-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="project-actions">
            <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button button-ghost" href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
