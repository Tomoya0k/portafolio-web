import { SectionTitle } from "../components/SectionTitle";
import projectsData from "../data/projects.json";
import type { Project } from "../types/project";

const projects = projectsData as Project[];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <SectionTitle
        eyebrow="Trabajo seleccionado"
        title="Proyectos"
        description="Proyecto real orientado a analítica de datos y soporte a decisiones."
      />

      <div className="grid gap-5">
        {projects.map((project) => (
          <article key={project.id} className="rounded-xl border border-borderSoft bg-panel p-6 shadow-sm">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.title}`}>
              {project.technologies.map((tech) => (
                <li key={tech} className="rounded-md border border-borderSoft px-2.5 py-1 text-xs text-slate-200">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                className="inline-flex items-center justify-center rounded-lg border border-borderSoft bg-surface px-5 py-2.5 text-sm font-semibold text-accent transition hover:border-sky-400 hover:text-sky-300"
                href={project.caseStudyPath}
              >
                Ver caso completo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
