import { Reveal } from "./Reveal";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Email: FaEnvelope
};

export function ContactSection({ contact }) {
  return (
    <Reveal className="contact-panel">
      <div className="contact-links">
        {contact.links.map((item, index) => (
          <a
            key={item.label}
            className="contact-link"
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            <span className="contact-link-icon" aria-hidden="true">
              {(() => {
                const Icon = iconMap[item.label];
                return Icon ? <Icon /> : null;
              })()}
            </span>
            <span className="contact-link-label">{item.label}</span>
          </a>
        ))}
      </div>
    </Reveal>
  );
}
