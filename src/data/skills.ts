import type { SkillCategory } from "../types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "analisis-datos",
    title: "Análisis y Datos",
    items: [
      "Python (automatización y procesamiento de datos)",
      "Power BI (DAX, modelado y dashboards)",
      "Excel avanzado",
      "SQL (consultas y manipulación de datos)",
    ],
  },
  {
    id: "automatizacion-scripts",
    title: "Automatización y Scripts",
    items: [
      "Python scripting",
      "Transformación de datos",
      "Optimización de procesos repetitivos",
      "Integración de herramientas digitales",
    ],
  },
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    items: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    id: "herramientas-productividad",
    title: "Herramientas y Productividad",
    items: [
      "Git",
      "VS Code",
      "Uso estratégico de herramientas de IA para aceleración de desarrollo y validación técnica",
      "Modelado de procesos",
    ],
  },
];
