import { motion, useReducedMotion } from "framer-motion";

const baseTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1]
};

const baseVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

export function Reveal({ children, className = "", delay = 0, amount = 0.18, ...motionProps }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={baseVariants}
      transition={{ ...baseTransition, delay }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

export function RevealSection({ children, className = "", id, delay = 0 }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <section className={className} id={id}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      className={className}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={baseVariants}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </motion.section>
  );
}
