import { Container } from "../layout/Container";

export default function ProjectPowerBI() {
  return (
    <>
      <header className="border-b border-borderSoft/80 bg-surface/90 backdrop-blur">
        <Container className="py-5">
          <a
            href="/"
            className="inline-flex items-center text-sm font-semibold text-accent transition hover:text-sky-300"
          >
            Volver al inicio
          </a>
        </Container>
      </header>

      <main>
        <Container className="py-12 sm:py-16">
          <article className="space-y-10 rounded-2xl border border-borderSoft bg-panel p-6 shadow-sm sm:p-10">
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Caso de estudio</p>
              <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-5xl">
                Dashboard de Analítica en Power BI
              </h1>
              <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base">
                Proyecto enfocado en convertir datos comerciales en información accionable para mejorar la toma de
                decisiones y reducir tiempos de análisis operativo.
              </p>
            </header>

            <section aria-labelledby="problema-proyecto" className="space-y-3">
              <h2 id="problema-proyecto" className="text-2xl font-bold text-white">
                Problema que resolvía
              </h2>
              <p className="text-sm text-slate-300 sm:text-base">
                La organización consolidaba indicadores de ventas y desempeño en reportes manuales con alta
                variabilidad, baja trazabilidad y demoras en la entrega. Esto limitaba la capacidad de reaccionar
                ante cambios del negocio.
              </p>
            </section>

            <section aria-labelledby="objetivo-proyecto" className="space-y-3">
              <h2 id="objetivo-proyecto" className="text-2xl font-bold text-white">
                Objetivo del proyecto
              </h2>
              <p className="text-sm text-slate-300 sm:text-base">
                Diseñar un dashboard ejecutivo en Power BI que centralizara métricas clave, estandarizara el análisis
                y permitiera monitoreo continuo de resultados para soporte de decisiones.
              </p>
            </section>

            <section aria-labelledby="tecnologias-proyecto" className="space-y-3">
              <h2 id="tecnologias-proyecto" className="text-2xl font-bold text-white">
                Tecnologías utilizadas
              </h2>
              <ul className="flex flex-wrap gap-2" aria-label="Tecnologías utilizadas en el proyecto">
                {["Power BI", "DAX", "Excel"].map((tech) => (
                  <li key={tech} className="rounded-md border border-borderSoft px-2.5 py-1 text-xs text-slate-200">
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="proceso-modelado" className="space-y-3">
              <h2 id="proceso-modelado" className="text-2xl font-bold text-white">
                Proceso y modelado de datos
              </h2>
              <p className="text-sm text-slate-300 sm:text-base">
                Se realizó limpieza y transformación de datos desde fuentes en Excel, construyendo un modelo relacional
                para asegurar consistencia entre dimensiones y hechos. Luego se desarrollaron medidas DAX para KPI de
                ventas, ticket promedio, variaciones y tendencia temporal.
              </p>
            </section>

            <section aria-labelledby="video-demostracion" className="space-y-4">
              <h2 id="video-demostracion" className="text-2xl font-bold text-white">
                Demostración del dashboard
              </h2>
              <div className="aspect-video overflow-hidden rounded-xl border border-borderSoft shadow-sm">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/DBEeUsQAcO0"
                  title="Dashboard de Analítica en Power BI"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </section>

            <section aria-labelledby="resultados-aprendizajes" className="space-y-3">
              <h2 id="resultados-aprendizajes" className="text-2xl font-bold text-white">
                Resultados y aprendizajes
              </h2>
              <p className="text-sm text-slate-300 sm:text-base">
                El dashboard redujo el tiempo de elaboración de reportes, mejoró la visibilidad de indicadores
                estratégicos y facilitó seguimiento de objetivos comerciales. El principal aprendizaje fue estructurar
                el modelo de datos desde el inicio para escalar reportes sin comprometer rendimiento.
              </p>
            </section>

            <section aria-labelledby="documentacion-tecnica" className="space-y-3">
              <h2 id="documentacion-tecnica" className="text-2xl font-bold text-white">
                Documentación técnica
              </h2>
              <a
                href="/docs/powerbi-documentacion.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-borderSoft bg-surface px-5 py-2.5 text-sm font-semibold text-accent transition hover:border-sky-400 hover:text-sky-300"
              >
                Descargar documentación técnica
              </a>
            </section>
          </article>
        </Container>
      </main>
    </>
  );
}
