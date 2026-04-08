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
import { motion, useReducedMotion } from "framer-motion";
import { SiDotnet, SiPostgresql, SiPostman, SiRabbitmq, SiSharp } from "react-icons/si";
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
  postgresql: SiPostgresql,
  git: FaGitAlt,
  docker: FaDocker,
  azuredevops: FaCodeBranch,
  postman: SiPostman,
  default: FaCode
};

export function SkillsSection({ groups }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="skills-grid">
      {groups.map((group, index) => (
        <Reveal
          key={group.title}
          className="skill-group"
          delay={index * 0.08}
          whileHover={prefersReducedMotion ? undefined : { y: -7, scale: 1.01 }}
        >
          <div className="skill-group-header">
            <p className="skill-group-label">{group.title}</p>
          </div>

          <div className="skill-list">
            {group.skills.map((skill) => {
              const Icon = iconMap[skill.icon] ?? iconMap.default;

              return (
                <motion.article
                  key={skill.name}
                  className="skill-item"
                  whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.01 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="skill-icon" style={{ color: skill.color }} aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </motion.article>
              );
            })}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
