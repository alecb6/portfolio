# Portfolio

Mi portafolio personal: quién soy, mis proyectos, mi experiencia y las tecnologías que uso.

**[portfolio-alexcb.vercel.app](https://portfolio-alexcb.vercel.app)**

![Portfolio Screenshot](./public/images/og-image.png)

## 🧩 Secciones

Una sola página con scroll, en tonos beige y naranja, con modo oscuro cálido:

- **Inicio**: presentación, qué hago ahora mismo y descarga del CV.
- **En cifras**: contadores animados y datos de OpoAlertas.
- **Proyectos**: proyectos destacados con capturas, tecnologías y enlaces.
- **GitHub en directo**: repositorios públicos, última actividad y lenguajes, cargados con la API de GitHub.
- **Experiencia y formación**, **Conocimientos** y **Contacto** (copia el email con un clic).

Las direcciones antiguas (`/proyectos`, `/experiencia`, `/conocimientos`) redirigen a su sección.

## 🚀 Tecnologías utilizadas

- [Next.js 15](https://nextjs.org/) (App Router) y [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) con los colores como variables CSS (`src/app/globals.css`)
- [Framer Motion](https://motion.dev/) para las animaciones (respeta «reducir movimiento»)
- [next-themes](https://github.com/pacocoursey/next-themes) para el modo claro y oscuro
- Fuentes Fraunces, Inter y JetBrains Mono con `next/font`
- [Sentry](https://sentry.io/) y Vercel Analytics / Speed Insights

## 📁 Estructura del proyecto

```
portfolio/
├── cv/cv.html                 # Fuente del CV en PDF
├── public/
│   ├── cv/                    # CV descargable
│   └── images/                # Imagen para redes y capturas de los proyectos
└── src/app/
    ├── components/
    │   ├── sections/          # Una sección de la página por archivo
    │   ├── slider/            # Tira de tecnologías
    │   └── ui/                # Tarjetas, contadores, animaciones...
    ├── data/
    │   ├── profile.ts         # Datos personales, experiencia, formación, conocimientos y cifras
    │   └── projects.ts        # Proyectos destacados
    ├── hooks/useGithubRepos.ts
    ├── globals.css            # Paleta y estilos base
    ├── layout.tsx
    └── page.tsx
```

## ✏️ Añadir un proyecto destacado

Añade una entrada en `src/app/data/projects.ts` y, si tiene captura, guárdala en `public/images/proyectos/`. Los repositorios públicos que no estén destacados salen solos en «Más en GitHub» (sin forks).

## 📄 CV

El CV descargable está en `public/cv/Alejandro-Cruz-Ballestero-CV.pdf` y se genera desde `cv/cv.html`. Para actualizarlo, edita el HTML, ábrelo en Chrome e imprímelo como PDF (A4, sin márgenes y con «Gráficos de fondo» activado).

## 📦 Instalación y uso

```bash
git clone https://github.com/alecb6/portfolio.git
cd portfolio
npm install
npm run dev
```

Puedes contactarme a través de [LinkedIn](https://www.linkedin.com/in/alejandro-cruz-ballestero-347a87349/) o en cananpa2014.jr@gmail.com.
