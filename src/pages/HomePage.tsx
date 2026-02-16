import { Container } from "../layout/Container";
import { Navbar } from "../layout/Navbar";
import { ContactSection } from "../sections/ContactSection";
import { HeroSection } from "../sections/HeroSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </Container>
      </main>
      <footer className="border-t border-borderSoft py-6 text-center text-xs text-slate-400">
        <Container>
          <p>2026 SEBASTIAN MACIAS. Construido con React, Vite, TypeScript y TailwindCSS.</p>
        </Container>
      </footer>
    </>
  );
}
