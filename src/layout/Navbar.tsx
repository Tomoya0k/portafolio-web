import { navigationItems } from "../data/navigation";
import { useActiveSection } from "../hooks/useActiveSection";
import { developerName } from "../assets";

export function Navbar() {
  const activeSection = useActiveSection(navigationItems.map((item) => item.id));

  return (
    <header className="sticky top-0 z-20 border-b border-borderSoft/80 bg-surface/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10" aria-label="Navegación principal">
        <a href="#hero" className="flex items-center gap-3 text-sm font-semibold tracking-wide text-white sm:text-base">
          <img
            src="/foto-cv.png"
            alt={`Foto de ${developerName}`}
            className="h-10 w-10 rounded-full border border-borderSoft object-cover"
          />
          <span>{developerName}</span>
        </a>
        <ul className="flex items-center gap-2 sm:gap-4">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`rounded-md px-3 py-2 text-xs font-medium transition sm:text-sm ${
                    isActive ? "bg-panel text-accent" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
