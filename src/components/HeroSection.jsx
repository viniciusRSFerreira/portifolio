import { motion, useReducedMotion } from "framer-motion";

const heroEase = [0.22, 1, 0.36, 1];

export function HeroSection({ hero }) {
  const prefersReducedMotion = useReducedMotion();

  const baseTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.85, ease: heroEase };

  const itemProps = (delay) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { ...baseTransition, delay }
        };

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy hero-copy-minimal">
          <motion.h1 className="hero-title" {...itemProps(0.08)}>
            {hero.name}
          </motion.h1>

          <motion.p className="hero-role" {...itemProps(0.22)}>
            {hero.role}
          </motion.p>

          <motion.p className="hero-description" {...itemProps(0.36)}>
            {hero.description}
          </motion.p>

          <motion.div
            className="hero-actions"
            {...(prefersReducedMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { ...baseTransition, delay: 0.5 }
                })}
          >
            <motion.a
              className="button button-primary button-hero-primary"
              href="#projetos"
              whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.24, ease: heroEase }}
            >
              Ver projetos
            </motion.a>
            <motion.a
              className="button button-secondary button-hero-secondary"
              href="#contato"
              whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.01 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.24, ease: heroEase, delay: 0.05 }}
            >
              Entrar em contato
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
