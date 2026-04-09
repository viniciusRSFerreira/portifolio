import { Reveal } from "./Reveal";

export function ProjectsSection({ projects }) {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <Reveal
          key={project.name}
          className="project-card"
          delay={index * 0.1}
          whileHover={{ y: -8, scale: 1.012 }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileTap={{ scale: 0.998 }}
        >
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
          </div>
        </Reveal>
      ))}
    </div>
  );
}
