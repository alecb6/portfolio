export interface FeaturedProject {
  name: string;
  // Nombre del repositorio en GitHub, para no repetirlo en la lista de la API
  repoName: string;
  year: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  image?: {
    src: string;
    alt: string;
  };
  demoUrl?: string;
  // Solo para repositorios públicos
  repoUrl?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "OpoAlertas",
    repoName: "opo-alertas",
    year: "2026",
    type: "Proyecto personal en producción",
    summary:
      "Web que lee cada mañana el BOE y publica las convocatorias de empleo público de ayuntamientos, diputaciones y otras entidades locales, con su plazo calculado y avisos gratis por email o Telegram.",
    highlights: [
      "Ingesta diaria del BOE con su API de datos abiertos: cada anuncio se convierte en entidad, provincia, plazas, sistema de selección y fin de plazo",
      "Seguimiento de correcciones, ampliaciones de plazo y anulaciones de cada convocatoria",
      "Avisos diarios por email (Brevo, con doble confirmación) y por un bot de Telegram",
      "Cuentas sin contraseña con Google o enlace por email, convocatorias guardadas y recordatorios de cierre",
      "Mapa de España por provincias y buscador guiado «¿Qué oposición te encaja?»",
      "Más de 1.500 preguntas de test del temario de auxiliar administrativo, test del día y exámenes oficiales",
      "Páginas estáticas pensadas para SEO, con datos estructurados y sitemap",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "SQLite",
      "Drizzle ORM",
      "Turso",
      "Better Auth",
      "Telegram Bot API",
      "d3-geo",
      "Vitest",
      "Vercel",
    ],
    image: {
      src: "/images/proyectos/opo-alertas.jpg",
      alt: "Portada de OpoAlertas con el buscador de convocatorias por provincia y tipo de plaza",
    },
    demoUrl: "https://opoalertas.es",
  },
  {
    name: "Pinturas Cruz",
    repoName: "PinturasCruz",
    year: "2026",
    type: "Web para un negocio",
    summary:
      "Landing de una empresa de pintura y reformas de la Sierra de Madrid, con un presupuestador que calcula un precio orientativo en cuatro pasos.",
    highlights: [
      "Presupuesto rápido según superficie, estancias, servicios y recargos, con importe mínimo e IVA configurables",
      "Contacto sin servidor: los formularios redactan el mensaje y lo abren en WhatsApp o en el correo",
      "Galería de trabajos con comparador deslizante antes/después",
      "Datos del negocio, localidades y tarifas en un único archivo de configuración",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: {
      src: "/images/proyectos/pinturas-cruz.jpg",
      alt: "Portada de la web de Pinturas Cruz con el botón para calcular el presupuesto",
    },
  },
  {
    name: "UrClothes",
    repoName: "TFG_Proyecto",
    year: "2024",
    type: "Proyecto final de ciclo (en equipo)",
    summary:
      "Red social de moda para organizar tu armario: subes tus prendas, montas conjuntos y la aplicación te propone ropa según el tiempo que hace.",
    highlights: [
      "Armario virtual con prendas por partes (superior, media e inferior) y conjuntos guardados",
      "Filtro de prendas según el tiempo actual con WeatherAPI",
      "Feed, foro, perfiles y solicitudes de amistad",
      "Registro con verificación por email, recuperación de contraseña y panel de administración",
    ],
    technologies: ["Symfony 7", "PHP 8.2", "Doctrine ORM", "Twig", "MySQL"],
  },
  {
    name: "La Velada (clon)",
    repoName: "la-velada-clone",
    year: "2025",
    type: "Proyecto de práctica",
    summary:
      "Réplica de la web de La Velada del Año, con páginas para cada luchador, cada combate y la porra.",
    highlights: [
      "Rutas dinámicas para luchadores y combates",
      "Datos tipados de luchadores, combates y patrocinadores",
    ],
    technologies: ["Astro 5", "TypeScript", "Tailwind CSS 4", "Vercel"],
    demoUrl: "https://la-velada-clone.vercel.app",
    repoUrl: "https://github.com/alecb6/la-velada-clone",
  },
  {
    name: "Red Social",
    repoName: "Red-Social",
    year: "2023",
    type: "Proyecto de clase",
    summary:
      "Red social completa en PHP: publicaciones, likes, amistades, mensajes y notificaciones.",
    highlights: [
      "Registro, inicio de sesión y recuperación de contraseña por email",
      "Publicaciones con imágenes, likes, búsqueda de usuarios y perfiles editables",
      "Solicitudes de amistad, mensajes privados y notificaciones",
      "Zona de administración para banear y desbanear usuarios",
    ],
    technologies: ["PHP", "MySQL", "PHPMailer", "HTML", "CSS"],
  },
];
