import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [activeSection, setActiveSection] = useState(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= marker && rect.bottom > marker;
      });

      if (current) {
        setActiveSection(current.id);
        return;
      }

      const passedSections = sections.filter((section) => section.getBoundingClientRect().top <= marker);
      if (passedSections.length > 0) {
        setActiveSection(passedSections[passedSections.length - 1].id);
        return;
      }

      setActiveSection(sections[0].id);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [ids]);

  return activeSection;
}
