export const profile = {
  name: "Alejandro Cruz Ballestero",
  shortName: "Alejandro",
  role: "Desarrollador web full stack",
  location: "Madrid",
  email: "cananpa2014.jr@gmail.com",
  cvUrl: "/cv/Alejandro-Cruz-Ballestero-CV.pdf",
  githubUser: "alecb6",
  // Año en que empecé a programar (primer curso de DAW)
  codingSince: 2021,
  // Primer trabajo como desarrollador (Maccorp Exacta Change)
  workingSince: 2024,
  socials: {
    github: "https://github.com/alecb6",
    linkedin:
      "https://www.linkedin.com/in/alejandro-cruz-ballestero-347a87349/",
    instagram: "https://www.instagram.com/alecb6/",
    x: "https://x.com/alecb2003",
  },
};

export interface TimelineItem {
  title: string;
  place: string;
  period: string;
  current?: boolean;
  points?: string[];
}

export const experience: TimelineItem[] = [
  {
    title: "Desarrollador web",
    place: "Maccorp Exacta Change",
    period: "Feb 2024 – actualidad",
    current: true,
    points: [
      "Desarrollo y mantenimiento de aplicaciones web con Laravel y PHP",
      "Consultas MySQL y optimización del rendimiento",
      "Interfaces con HTML, CSS y JavaScript adaptadas a todos los dispositivos",
      "Integración de APIs y componentes interactivos",
    ],
  },
  {
    title: "Peón de obra / Ayudante de pintor",
    place: "Empresa familiar",
    period: "2020 – 2024",
  },
];

export const education: TimelineItem[] = [
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
    place: "Proyecto final: UrClothes, red social de moda en Symfony",
    period: "2021 – 2024",
  },
  {
    title: "Bachillerato de Ciencias",
    place: "IES San Isidoro de Sevilla, Madrid",
    period: "2019 – 2021",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Astro",
      "Angular",
    ],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "Symfony", "Node.js", "APIs REST"],
  },
  {
    category: "Bases de datos",
    items: ["MySQL", "SQLite", "Turso", "Drizzle ORM", "Doctrine ORM"],
  },
  {
    category: "Herramientas y servicios",
    items: ["Git", "GitHub", "Vercel", "Vitest", "Telegram Bot API", "Brevo"],
  },
];
