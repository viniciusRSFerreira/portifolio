import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Email: FaEnvelope
};

export function ContactSection({ contact }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Reveal className="contact-panel" whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.008 }}>
      <div className="contact-links">
        {contact.links.map((item, index) => (
          <motion.a
            key={item.label}
            className="contact-link"
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.012 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.995 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
          >
            <span className="contact-link-icon" aria-hidden="true">
              {(() => {
                const Icon = iconMap[item.label];
                return Icon ? <Icon /> : null;
              })()}
            </span>
            <span className="contact-link-label">{item.label}</span>
          </motion.a>
        ))}
      </div>
    </Reveal>
  );
}
