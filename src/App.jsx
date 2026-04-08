import { useEffect, useMemo, useState } from "react";
import { portfolioData } from "./data/portfolio";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SectionHeading } from "./components/SectionHeading";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

const sectionIds = ["inicio", "sobre", "habilidades", "projetos", "contato"];

function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const navigation = useMemo(
    () => portfolioData.navigation.map((item) => ({ ...item })),
    []
  );
  const { sections } = portfolioData;

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);

      if (!element) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-35% 0px -45% 0px",
          threshold: 0.1
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="background-orb orb-left" aria-hidden="true" />
      <div className="background-orb orb-right" aria-hidden="true" />
      <div className="background-grid" aria-hidden="true" />

      <Header navigation={navigation} activeSection={activeSection} />

      <main>
        <HeroSection hero={portfolioData.hero} />

        <section className="section" id="sobre">
          <div className="container">
            <SectionHeading
              eyebrow={sections.about.eyebrow}
              title={sections.about.title}
              description={sections.about.description}
            />
            <AboutSection items={portfolioData.about} />
          </div>
        </section>

        <section className="section" id="habilidades">
          <div className="container">
            <SectionHeading
              eyebrow={sections.skills.eyebrow}
              title={sections.skills.title}
              description={sections.skills.description}
            />
            <SkillsSection groups={portfolioData.skillGroups} />
          </div>
        </section>

        <section className="section" id="projetos">
          <div className="container">
            <SectionHeading
              eyebrow={sections.projects.eyebrow}
              title={sections.projects.title}
              description={sections.projects.description}
            />
            <ProjectsSection projects={portfolioData.projects} />
          </div>
        </section>

        <section className="section" id="contato">
          <div className="container">
            <SectionHeading
              eyebrow={sections.contact.eyebrow}
              title={sections.contact.title}
              description={sections.contact.description}
            />
            <ContactSection contact={portfolioData.contact} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
