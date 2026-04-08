import { Reveal } from "./Reveal";

export function HeroSection({ hero }) {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="container hero-layout">
        <Reveal className="hero-copy hero-copy-minimal">
          <h1 className="hero-animate hero-animate-1">{hero.name}</h1>
          <p className="hero-role hero-animate hero-animate-2">{hero.role}</p>
          <p className="hero-description hero-animate hero-animate-3">{hero.description}</p>

          <div className="hero-actions hero-animate hero-animate-4">
            <a className="button button-primary button-hero-primary" href="#projetos">
              Ver projetos
            </a>
            <a className="button button-secondary button-hero-secondary" href="#contato">
              Entrar em contato
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
