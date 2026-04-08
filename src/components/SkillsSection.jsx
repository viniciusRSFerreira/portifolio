import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaCode,
  FaCodeBranch
} from "react-icons/fa";
import { SiDotnet, SiSharp, SiRabbitmq } from "react-icons/si";
import { TbApi, TbDatabase } from "react-icons/tb";
import { Reveal } from "./Reveal";

const iconMap = {
  javascript: FaJs,
  react: FaReact,
  html: FaHtml5,
  css: FaCss3Alt,
  csharp: SiSharp,
  dotnet: SiDotnet,
  api: TbApi,
  rabbitmq: SiRabbitmq,
  sqlserver: TbDatabase,
  git: FaGitAlt,
  docker: FaDocker,
  azuredevops: FaCodeBranch,
  default: FaCode
};

export function SkillsSection({ groups }) {
  return (
    <div className="skills-grid">
      {groups.map((group, index) => (
        <Reveal key={group.title} className="skill-group" delay={index * 0.08}>
          <div className="skill-group-header">
            <p className="skill-group-label">{group.title}</p>
          </div>

          <div className="skill-list">
            {group.skills.map((skill) => {
              const Icon = iconMap[skill.icon] ?? iconMap.default;

              return (
                <article key={skill.name} className="skill-item">
                  <span className="skill-icon" style={{ color: skill.color }} aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </article>
              );
            })}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
