import { Button } from "../components/Button";
import { developerName, developerRole } from "../assets";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.15),transparent_30%)]" />
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">Disponible para nuevas ideas</p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {developerName}
            <span className="mt-2 block text-sky-300">{developerRole}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Transformo datos en sistemas inteligentes. Desarrollo scripts, automatizaciones y soluciones que
            optimizan procesos y reducen fricción operativa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects">
              <Button>Ver proyectos</Button>
            </a>
            <a href="#contact">
              <Button variant="ghost">Contáctame</Button>
            </a>
          </div>
        </div>
        <img
          src="/foto-cv.png"
          alt={`Foto de ${developerName}`}
          className="h-56 w-56 rounded-2xl border border-borderSoft object-cover shadow-md sm:h-64 sm:w-64"
        />
      </div>
    </section>
  );
}
