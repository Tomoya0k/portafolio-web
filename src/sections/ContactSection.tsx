import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <SectionTitle
        eyebrow="Hablemos"
        title="Contacto"
        description="Abierto a oportunidades freelance, tiempo completo y colaboraciones."
      />

      <div className="rounded-xl border border-borderSoft bg-panel p-6 sm:p-8">
        <p className="text-sm text-slate-300 sm:text-base">
          Comparte los objetivos y tiempos de tu proyecto y te responderé con un plan de implementación
          práctico.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="mailto:alex.morgan@example.com">
            <Button>Escríbeme por correo</Button>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <Button variant="ghost">LinkedIn</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
