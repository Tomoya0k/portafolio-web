import { SectionTitle } from "../components/SectionTitle";
import { skillCategories } from "../data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <SectionTitle
        eyebrow="Perfil profesional"
        title="Habilidades técnicas"
        description="Stack técnico orientado a análisis de datos, automatización de procesos y desarrollo de soluciones eficientes."
      />

      <ul className="grid gap-4 sm:grid-cols-2" aria-label="Lista de habilidades por categoría">
        {skillCategories.map((category) => (
          <li key={category.id} className="rounded-xl border border-borderSoft bg-panel p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {category.items.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
