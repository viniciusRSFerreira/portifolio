import { Reveal } from "./Reveal";

export function AboutSection({ items }) {
  return (
    <div className="about-grid">
      {items.map((item, index) => (
        <Reveal key={item.title} className="about-card" delay={index * 0.08}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
